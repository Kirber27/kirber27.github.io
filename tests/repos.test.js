import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { filterRepos, normalizeRepo, useGithubRepos } from '@/composables/useGithubRepos'

const raw = (over = {}) => ({
  id: Math.random(), name: 'repo', description: null, html_url: 'https://github.com/x/repo',
  homepage: null, language: 'JavaScript', stargazers_count: 0, forks_count: 0,
  topics: [], pushed_at: '2024-01-01T00:00:00Z', fork: false, archived: false, ...over
})

const list = [
  normalizeRepo(raw({ name: 'vue-dashboard', language: 'Vue', stargazers_count: 3, pushed_at: '2024-05-01T00:00:00Z' })),
  normalizeRepo(raw({ name: 'api-client', language: 'TypeScript', stargazers_count: 10, pushed_at: '2023-01-01T00:00:00Z', description: 'Typed REST client' })),
  normalizeRepo(raw({ name: 'old-site', language: 'JavaScript', pushed_at: '2025-02-01T00:00:00Z', topics: ['jquery'] }))
]

describe('filterRepos', () => {
  it('sorts by last update by default', () => {
    expect(filterRepos(list).map((r) => r.name)).toEqual(['old-site', 'vue-dashboard', 'api-client'])
  })
  it('sorts by stars', () => {
    expect(filterRepos(list, { sort: 'stars' })[0].name).toBe('api-client')
  })
  it('filters by language', () => {
    expect(filterRepos(list, { language: 'Vue' }).map((r) => r.name)).toEqual(['vue-dashboard'])
  })
  it('searches name, description and topics', () => {
    expect(filterRepos(list, { query: 'rest' })[0].name).toBe('api-client')
    expect(filterRepos(list, { query: 'JQUERY' })[0].name).toBe('old-site')
  })
})

describe('useGithubRepos', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => vi.restoreAllMocks())

  it('fetches, drops forks/excluded repos and caches the result', async () => {
    const data = [raw({ name: 'keep' }), raw({ name: 'forked', fork: true }), raw({ name: 'me.github.io' })]
    const spy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => data })

    const a = useGithubRepos('me', { exclude: ['me.github.io'] })
    await a.load()
    expect(a.status.value).toBe('success')
    expect(a.repos.value.map((r) => r.name)).toEqual(['keep'])

    const b = useGithubRepos('me')
    await b.load()
    expect(spy).toHaveBeenCalledTimes(1) // second call served from cache
    expect(b.repos.value).toHaveLength(1)
  })

  it('exposes an error state when the API fails', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 403 })
    const r = useGithubRepos('me')
    await r.load()
    expect(r.status.value).toBe('error')
  })
})
