import { ref, computed } from 'vue'

const TTL = 60 * 60 * 1000 // 1 hour — stays well under the 60 req/h unauthenticated limit

function readCache(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { at, data } = JSON.parse(raw)
    return Date.now() - at < TTL ? data : null
  } catch { return null }
}
function writeCache(key, data) {
  try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })) } catch { /* ignore */ }
}

/** Keep only the fields the UI needs (smaller cache, stable shape). */
export function normalizeRepo(r) {
  return {
    id: r.id,
    name: r.name,
    description: r.description || '',
    url: r.html_url,
    homepage: r.homepage || '',
    language: r.language || 'Other',
    stars: r.stargazers_count || 0,
    forks: r.forks_count || 0,
    topics: r.topics || [],
    updatedAt: r.pushed_at || r.updated_at
  }
}

/** Pure filtering/sorting so it can be unit-tested without the network. */
export function filterRepos(list, { query = '', language = 'all', sort = 'updated' } = {}) {
  const q = query.trim().toLowerCase()
  return list
    .filter((r) => language === 'all' || r.language === language)
    .filter((r) => !q || `${r.name} ${r.description} ${r.topics.join(' ')}`.toLowerCase().includes(q))
    .sort((a, b) => sort === 'stars'
      ? b.stars - a.stars || new Date(b.updatedAt) - new Date(a.updatedAt)
      : new Date(b.updatedAt) - new Date(a.updatedAt))
}

export function useGithubRepos(user, { exclude = [] } = {}) {
  const repos = ref([])
  const status = ref('idle') // idle | loading | success | error
  const query = ref('')
  const language = ref('all')
  const sort = ref('updated')
  const cacheKey = `gh-repos:${user}`

  async function load({ force = false } = {}) {
    const cached = !force && readCache(cacheKey)
    if (cached) { repos.value = cached; status.value = 'success'; return }

    status.value = 'loading'
    try {
      const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, {
        headers: { Accept: 'application/vnd.github+json' }
      })
      if (!res.ok) throw new Error(`GitHub API ${res.status}`)
      const data = (await res.json())
        .filter((r) => !r.fork && !r.archived && !exclude.includes(r.name.toLowerCase()))
        .map(normalizeRepo)
      repos.value = data
      writeCache(cacheKey, data)
      status.value = 'success'
    } catch (err) {
      console.warn('[repos]', err)
      status.value = 'error'
    }
  }

  const languages = computed(() => {
    const count = {}
    repos.value.forEach((r) => { count[r.language] = (count[r.language] || 0) + 1 })
    return Object.entries(count).sort((a, b) => b[1] - a[1]).map(([name]) => name)
  })

  const filtered = computed(() =>
    filterRepos(repos.value, { query: query.value, language: language.value, sort: sort.value })
  )

  return { repos, filtered, languages, status, query, language, sort, load }
}
