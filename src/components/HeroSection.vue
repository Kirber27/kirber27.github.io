<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { profile } from '@/data/profile'
import AppIcon from './AppIcon.vue'

const { t, l, locale } = useI18n()

// The "code card" renders the profile as a JS object — a small nod to the craft.
const codeLines = computed(() => [
  ['kw', 'const '], ['id', 'developer'], ['op', ' = {'], ['br'],
  ['ind'], ['key', 'name'], ['op', ': '], ['str', `'${profile.name}'`], ['op', ','], ['br'],
  ['ind'], ['key', 'role'], ['op', ': '], ['str', `'Senior Frontend'`], ['op', ','], ['br'],
  ['ind'], ['key', 'stack'], ['op', ': ['], ['str', `'Vue'`], ['op', ', '], ['str', `'React'`], ['op', ', '], ['str', `'TS'`], ['op', '],'], ['br'],
  ['ind'], ['key', 'speaks'], ['op', ': ['], ['str', `'es'`], ['op', ', '], ['str', `'en'`], ['op', '],'], ['br'],
  ['ind'], ['key', 'available'], ['op', ': '], ['kw', String(profile.available)], ['op', ','], ['br'],
  ['ind'], ['fn', 'ship'], ['op', ': () => '], ['str', locale.value === 'es' ? `'con calidad'` : `'with care'`], ['br'],
  ['op', '}']
])
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__glow" aria-hidden="true" />
    <div class="container hero__grid">
      <div class="hero__copy">
        <p v-if="profile.available" class="hero__status mono">
          <span class="dot" aria-hidden="true" /> {{ t('hero.available') }}
        </p>
        <p class="hero__hello mono">{{ profile.name }} · {{ l(profile.location) }}</p>
        <h1 class="hero__title">
          {{ l(profile.role).split(' / ')[0] }}<span class="slash"> / </span><br class="br-md" />{{ l(profile.role).split(' / ')[1] }}
        </h1>
        <p class="hero__headline">{{ l(profile.headline) }}</p>

        <div class="hero__cta">
          <a href="#projects" class="btn btn--primary">{{ t('hero.ctaProjects') }} <AppIcon name="arrow" /></a>
          <a href="#contact" class="btn">{{ t('hero.ctaContact') }}</a>
          <a v-if="profile.links.cv" :href="profile.links.cv" class="btn" download>
            <AppIcon name="download" /> {{ t('hero.cv') }}
          </a>
        </div>

        <ul class="hero__social" role="list">
          <li><a :href="profile.links.github" target="_blank" rel="noopener" class="icon-btn" aria-label="GitHub"><AppIcon name="github" /></a></li>
          <li v-if="profile.links.linkedin"><a :href="profile.links.linkedin" target="_blank" rel="noopener" class="icon-btn" aria-label="LinkedIn"><AppIcon name="linkedin" /></a></li>
          <li v-if="profile.links.email"><a :href="`mailto:${profile.links.email}`" class="icon-btn" aria-label="Email"><AppIcon name="mail" /></a></li>
        </ul>
      </div>

      <div class="hero__card" aria-hidden="true">
        <div class="code">
          <div class="code__bar"><span /><span /><span /><em class="mono">developer.js</em></div>
          <pre class="code__body mono"><template v-for="(tok, i) in codeLines" :key="i"><br v-if="tok[0] === 'br'" /><span v-else-if="tok[0] === 'ind'">  </span><span v-else :class="`tk-${tok[0]}`">{{ tok[1] }}</span></template></pre>
        </div>
      </div>
    </div>

    <div class="container">
      <dl class="hero__stats">
        <div v-for="s in profile.stats" :key="s.value" class="stat">
          <dt class="stat__value">{{ s.value }}</dt>
          <dd class="stat__label muted">{{ l(s.label) }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; padding: clamp(3rem, 8vw, 6rem) 0 4rem; overflow: hidden; }
.hero__glow {
  position: absolute; inset: -20% -10% auto auto; width: 60vw; height: 60vw; max-width: 760px; max-height: 760px;
  background: radial-gradient(circle, var(--glow), transparent 65%); pointer-events: none;
}
.hero__grid { position: relative; display: grid; grid-template-columns: 1.25fr 1fr; gap: 3rem; align-items: center; }

.hero__status {
  display: inline-flex; align-items: center; gap: .55rem; margin: 0 0 1.5rem;
  font-size: .8rem; padding: .35rem .8rem; border-radius: 999px;
  border: 1px solid var(--line); background: var(--bg-elev);
}
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 0 var(--accent); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 var(--glow); } 70% { box-shadow: 0 0 0 10px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }

.hero__hello { color: var(--muted); margin: 0 0 .75rem; font-size: .9rem; }
.hero__title { font-size: clamp(2.4rem, 6.2vw, 4.6rem); line-height: 1; letter-spacing: -.035em; margin: 0 0 1.5rem; font-weight: 700; }
.slash { color: var(--accent); }
.br-md { display: none; }
@media (min-width: 821px) { .br-md { display: inline; } .slash { display: none; } }
.hero__headline { font-size: clamp(1.05rem, 1.8vw, 1.25rem); color: var(--muted); max-width: 38ch; margin: 0 0 2rem; }
.hero__cta { display: flex; flex-wrap: wrap; gap: .75rem; margin-bottom: 2rem; }
.hero__social { display: flex; gap: .5rem; list-style: none; padding: 0; margin: 0; }

.code { background: var(--bg-elev); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; box-shadow: 0 30px 80px -40px rgba(0,0,0,.6); transform: rotate(1.2deg); }
.code__bar { display: flex; align-items: center; gap: 6px; padding: .8rem 1rem; border-bottom: 1px solid var(--line); background: var(--bg-soft); }
.code__bar span { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
.code__bar em { margin-left: auto; font-style: normal; font-size: .75rem; color: var(--muted); }
.code__body { margin: 0; padding: 1.25rem 1.4rem 1.5rem; font-size: .86rem; line-height: 1.85; white-space: pre; overflow-x: auto; }
.tk-kw { color: #c792ea; }
.tk-id, .tk-fn { color: #82aaff; }
.tk-key { color: var(--text); }
.tk-str { color: var(--accent); }
.tk-op { color: var(--muted); }
[data-theme='light'] .tk-kw { color: #8a3ab9; }
[data-theme='light'] .tk-id, [data-theme='light'] .tk-fn { color: #2456c7; }

.hero__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin: 4rem 0 0; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.stat { background: var(--bg); padding: 1.4rem 1.5rem; }
.stat__value { font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 700; letter-spacing: -.03em; }
.stat__label { margin: 0; font-size: .9rem; }

@media (max-width: 820px) {
  .hero__grid { grid-template-columns: 1fr; }
  .hero__card { order: 2; }
  .code { transform: none; }
  .hero__stats { grid-template-columns: 1fr; }
}
</style>
