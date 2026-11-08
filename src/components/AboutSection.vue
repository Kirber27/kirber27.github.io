<script setup>
import { useI18n } from '@/composables/useI18n'
import { about, profile } from '@/data/profile'
import SectionHeader from './SectionHeader.vue'

const { t, l } = useI18n()
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container">
      <SectionHeader index="01" id-prefix="about" :title="t('sections.about')" />
      <div class="about">
        <div class="about__text" v-reveal>
          <p class="about__lead">{{ l(profile.intro) }}</p>
          <p v-for="(p, i) in about.paragraphs" :key="i" class="muted">{{ l(p) }}</p>
        </div>
        <div>
          <h3 class="about__sub mono">// {{ t('sections.principles') }}</h3>
          <ol class="principles" role="list">
            <li v-for="(pr, i) in about.principles" :key="i" class="card principle" v-reveal="i * 80">
              <span class="principle__n mono">0{{ i + 1 }}</span>
              <div>
                <h4>{{ l(pr.title) }}</h4>
                <p class="muted">{{ l(pr.text) }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; }
.about__lead { font-size: 1.3rem; line-height: 1.5; margin-top: 0; }
.about__sub { font-size: .85rem; color: var(--muted); font-weight: 400; margin: 0 0 1rem; }
.principles { list-style: none; padding: 0; margin: 0; display: grid; gap: .85rem; }
.principle { display: flex; gap: 1rem; padding: 1.2rem 1.3rem; }
.principle__n { color: var(--accent); font-size: .85rem; padding-top: .2rem; }
.principle h4 { margin: 0 0 .25rem; font-size: 1.05rem; }
.principle p { margin: 0; font-size: .95rem; }
@media (max-width: 820px) { .about { grid-template-columns: 1fr; gap: 2rem; } }
</style>
