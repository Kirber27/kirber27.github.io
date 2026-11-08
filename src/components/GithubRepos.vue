<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useGithubRepos } from '@/composables/useGithubRepos'
import { profile } from '@/data/profile'
import AppIcon from './AppIcon.vue'

const { t, locale } = useI18n()
const user = profile.githubUser
const { filtered, languages, status, query, language, sort, load } = useGithubRepos(user, {
  exclude: [`${user.toLowerCase()}.github.io`]
})

const LIMIT = 9
const showAll = ref(false)

const langColors = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Vue: '#41b883', HTML: '#e34c26', CSS: '#663399',
  SCSS: '#c6538c', Python: '#3572a5', Java: '#b07219', PHP: '#4f5d95', 'C#': '#178600', Go: '#00add8'
}
const fmtDate = (iso) => new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric' }).format(new Date(iso))

// Load only when the section is near the viewport to save an API call on bounce.
const root = ref(null)
onMounted(() => {
  if (!('IntersectionObserver' in window)) return load()
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { load(); io.disconnect() }
  }, { rootMargin: '400px' })
  io.observe(root.value)
})
</script>

<template>
  <div ref="root" class="repos" aria-labelledby="repos-title">
    <div class="repos__head">
      <div>
        <h3 id="repos-title" class="repos__title"><span class="mono accent">~/</span>{{ t('sections.repos') }}</h3>
        <p class="muted repos__sub">{{ t('sections.reposSub') }}</p>
      </div>
      <a :href="`https://github.com/${user}?tab=repositories`" target="_blank" rel="noopener" class="btn">
        <AppIcon name="github" /> {{ t('projects.viewAll') }}
      </a>
    </div>

    <div class="toolbar" role="search">
      <label class="visually-hidden" for="repo-search">{{ t('projects.search') }}</label>
      <input id="repo-search" v-model="query" type="search" class="input" :placeholder="t('projects.search')" />

      <label class="visually-hidden" for="repo-sort">Sort</label>
      <select id="repo-sort" v-model="sort" class="input select">
        <option value="updated">{{ t('projects.sortUpdated') }}</option>
        <option value="stars">{{ t('projects.sortStars') }}</option>
      </select>
    </div>

    <div v-if="languages.length > 1" class="filters" role="group" aria-label="Language">
      <button class="filter" :aria-pressed="language === 'all'" @click="language = 'all'">{{ t('projects.all') }}</button>
      <button v-for="lang in languages" :key="lang" class="filter" :aria-pressed="language === lang" @click="language = lang">
        <span class="lang-dot" :style="{ background: langColors[lang] || 'var(--muted)' }" /> {{ lang }}
      </button>
    </div>

    <div aria-live="polite">
      <ul v-if="status === 'loading' || status === 'idle'" class="grid" role="list" :aria-label="t('projects.loading')">
        <li v-for="n in 6" :key="n" class="card skeleton" />
      </ul>

      <div v-else-if="status === 'error'" class="state card">
        <p>{{ t('projects.error') }}</p>
        <button class="btn" @click="load({ force: true })">{{ t('projects.retry') }}</button>
      </div>

      <p v-else-if="!filtered.length" class="state muted">{{ t('projects.empty') }}</p>

      <template v-else>
        <ul class="grid" role="list">
          <li v-for="r in (showAll ? filtered : filtered.slice(0, LIMIT))" :key="r.id">
            <a :href="r.url" target="_blank" rel="noopener" class="card repo">
              <h4 class="repo__name mono">{{ r.name }}</h4>
              <p class="repo__desc muted">{{ r.description || '—' }}</p>
              <div class="repo__meta mono">
                <span><span class="lang-dot" :style="{ background: langColors[r.language] || 'var(--muted)' }" /> {{ r.language }}</span>
                <span v-if="r.stars"><AppIcon name="star" class="mini" /> {{ r.stars }}</span>
                <span v-if="r.forks"><AppIcon name="fork" class="mini" /> {{ r.forks }}</span>
                <span class="repo__date">{{ t('projects.updated') }} {{ fmtDate(r.updatedAt) }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div v-if="filtered.length > LIMIT" class="more">
          <button class="btn" @click="showAll = !showAll">
            {{ showAll ? '−' : `+${filtered.length - LIMIT}` }}
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.repos__head { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.repos__title { font-size: 1.5rem; margin: 0; letter-spacing: -.02em; }
.repos__sub { margin: .3rem 0 0; font-size: .95rem; }
.accent { color: var(--accent); }

.toolbar { display: flex; gap: .75rem; margin-bottom: 1rem; flex-wrap: wrap; }
.input {
  flex: 1 1 260px; padding: .75rem 1rem; border-radius: var(--radius-sm);
  background: var(--bg-elev); border: 1px solid var(--line); font-size: .95rem;
}
.input:focus { outline: none; border-color: var(--accent); }
.select { flex: 0 1 220px; cursor: pointer; }

.filters { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.5rem; }
.filter {
  display: inline-flex; align-items: center; gap: .4rem; cursor: pointer;
  padding: .35rem .8rem; border-radius: 999px; font-size: .85rem;
  border: 1px solid var(--line); background: transparent; color: var(--muted);
  transition: all .2s;
}
.filter:hover { color: var(--text); }
.filter[aria-pressed='true'] { background: var(--text); color: var(--bg); border-color: var(--text); }

.grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1rem; }
.repo { display: flex; flex-direction: column; height: 100%; padding: 1.25rem; }
.repo:hover { transform: translateY(-3px); }
.repo__name { margin: 0 0 .5rem; font-size: .98rem; font-weight: 500; word-break: break-word; }
.repo__desc { margin: 0 0 1rem; font-size: .9rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.repo__meta { margin-top: auto; display: flex; flex-wrap: wrap; gap: .4rem 1rem; font-size: .75rem; color: var(--muted); align-items: center; }
.repo__meta > span { display: inline-flex; align-items: center; gap: .3rem; }
.repo__date { margin-left: auto; }
.mini { width: 13px; height: 13px; }
.lang-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }

.skeleton { height: 150px; position: relative; overflow: hidden; }
.skeleton::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, var(--bg-soft), transparent);
  animation: shimmer 1.4s infinite; transform: translateX(-100%);
}
@keyframes shimmer { to { transform: translateX(100%); } }
.state { text-align: center; padding: 2.5rem 1rem; }
.state p { margin-top: 0; }
.more { display: flex; justify-content: center; margin-top: 1.5rem; }
</style>
