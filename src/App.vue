<script setup>
import { watchEffect } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { profile } from '@/data/profile'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const { t, l } = useI18n()

// Keep <title> and meta description in sync with the active language.
watchEffect(() => {
  document.title = `${profile.name} · ${l(profile.role)}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', l(profile.headline))
})
</script>

<template>
  <a href="#main" class="skip-link">{{ t('nav.skip') }}</a>
  <NavBar />
  <main id="main" tabindex="-1">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
