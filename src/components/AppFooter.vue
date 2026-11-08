<script setup>
import { useI18n } from '@/composables/useI18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner mono">
      <span>© {{ year }} {{ profile.name }}</span>
      <span class="muted">{{ t('footer.built') }}</span>
      <a :href="`https://github.com/${profile.githubUser}/${profile.githubUser.toLowerCase()}.github.io`" target="_blank" rel="noopener">{{ t('footer.source') }} ↗</a>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--line); padding: 2rem 0; font-size: .8rem; }
.footer__inner { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.footer a:hover { color: var(--accent); }
</style>
