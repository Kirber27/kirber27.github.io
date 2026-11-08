<script setup>
import { useI18n } from '@/composables/useI18n'
import { featuredProjects } from '@/data/profile'
import SectionHeader from './SectionHeader.vue'
import GithubRepos from './GithubRepos.vue'
import AppIcon from './AppIcon.vue'

const { t, l } = useI18n()
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-title">
    <div class="container">
      <SectionHeader index="03" id-prefix="projects" :title="t('sections.featured')" />

      <div class="featured">
        <article v-for="(p, i) in featuredProjects" :key="p.title" class="card project" v-reveal="i * 80">
          <header class="project__head">
            <span class="chip">{{ l(p.tag) }}</span>
            <div class="project__links">
              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="icon-btn" :aria-label="`${t('projects.code')}: ${p.title}`"><AppIcon name="github" /></a>
              <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener" class="icon-btn" :aria-label="`${t('projects.demo')}: ${p.title}`"><AppIcon name="external" /></a>
            </div>
          </header>
          <h3 class="project__title">{{ p.title }}</h3>
          <p class="muted">{{ l(p.description) }}</p>
          <ul class="project__hl">
            <li v-for="(h, j) in p.highlights" :key="j">{{ l(h) }}</li>
          </ul>
          <p class="project__stack mono">{{ p.stack.join(' · ') }}</p>
        </article>
      </div>

      <GithubRepos />
    </div>
  </section>
</template>

<style scoped>
.featured { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 5rem; }
.project { display: flex; flex-direction: column; padding: 1.75rem; }
.project:hover { transform: translateY(-4px); }
.project__head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
.project__links { display: flex; gap: .4rem; }
.project__title { font-size: 1.45rem; margin: 0 0 .6rem; letter-spacing: -.02em; }
.project p { margin: 0 0 1rem; }
.project__hl { margin: 0 0 1.25rem; padding-left: 1.1rem; font-size: .95rem; }
.project__hl li::marker { color: var(--accent); }
.project__stack { margin-top: auto !important; font-size: .8rem; color: var(--muted); padding-top: 1rem; border-top: 1px solid var(--line); }
@media (max-width: 400px) { .featured { grid-template-columns: 1fr; } }
</style>
