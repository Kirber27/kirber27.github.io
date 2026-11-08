<script setup>
import { useI18n } from '@/composables/useI18n'
import { skills } from '@/data/profile'
import SectionHeader from './SectionHeader.vue'

const { t, l } = useI18n()
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="container">
      <SectionHeader index="04" id-prefix="skills" :title="t('sections.skills')" />
      <div class="skills">
        <div v-for="(g, i) in skills" :key="i" class="skill-group" v-reveal="i * 60">
          <h3 class="skill-group__title mono">{{ l(g.group) }}</h3>
          <ul class="skill-group__list" role="list">
            <li v-for="s in g.items" :key="s">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.skill-group { background: var(--bg); padding: 1.5rem; transition: background .25s; }
.skill-group:hover { background: var(--bg-elev); }
.skill-group__title { font-size: .8rem; text-transform: uppercase; letter-spacing: .08em; color: var(--accent); margin: 0 0 1rem; font-weight: 500; }
.skill-group__list { list-style: none; margin: 0; padding: 0; display: grid; gap: .5rem; }
.skill-group__list li { font-size: 1rem; }
</style>
