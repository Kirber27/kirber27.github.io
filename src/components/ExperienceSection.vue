<script setup>
import { useI18n } from '@/composables/useI18n'
import { experience } from '@/data/profile'
import SectionHeader from './SectionHeader.vue'

const { t, l } = useI18n()
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-title">
    <div class="container">
      <SectionHeader index="02" id-prefix="experience" :title="t('sections.experience')" />

      <ol class="timeline" role="list">
        <li v-for="(job, i) in experience" :key="i" class="job" v-reveal>
          <div class="job__meta">
            <p class="job__period mono">{{ l(job.period) }}</p>
            <p class="muted job__loc">{{ l(job.location) }}</p>
          </div>
          <div class="job__body">
            <h3 class="job__role">
              {{ l(job.role) }}
              <span class="job__at">@
                <a v-if="job.url" :href="job.url" target="_blank" rel="noopener">{{ job.company }}</a>
                <template v-else>{{ job.company }}</template>
              </span>
            </h3>
            <ul class="job__list">
              <li v-for="(h, j) in job.highlights" :key="j">{{ l(h) }}</li>
            </ul>
            <ul class="job__stack" role="list" :aria-label="'Stack'">
              <li v-for="s in job.stack" :key="s" class="chip">{{ s }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline { list-style: none; margin: 0; padding: 0; }
.job { display: grid; grid-template-columns: 200px 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px dashed var(--line); }
.job:first-child { padding-top: 0; }
.job:last-child { border-bottom: 0; }
.job__period { margin: 0; color: var(--accent); font-size: .88rem; }
.job__loc { margin: .2rem 0 0; font-size: .88rem; }
.job__role { margin: 0 0 .9rem; font-size: 1.3rem; letter-spacing: -.01em; }
.job__at { color: var(--muted); font-weight: 500; }
.job__at a { color: var(--text); border-bottom: 1px solid var(--accent); }
.job__list { margin: 0 0 1.1rem; padding-left: 1.1rem; color: var(--muted); }
.job__list li { margin-bottom: .45rem; }
.job__list li::marker { color: var(--accent); content: '▹  '; }
.job__stack { display: flex; flex-wrap: wrap; gap: .4rem; list-style: none; padding: 0; margin: 0; }
@media (max-width: 720px) { .job { grid-template-columns: 1fr; gap: .6rem; } }
</style>
