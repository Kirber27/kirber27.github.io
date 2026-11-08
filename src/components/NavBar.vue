<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useTheme } from '@/composables/useTheme'
import AppIcon from './AppIcon.vue'

const { t, locale, toggle } = useI18n()
const { theme, toggleTheme } = useTheme()

const items = ['about', 'experience', 'projects', 'skills', 'contact']
const active = ref('')
const scrolled = ref(false)
const open = ref(false)

let observer
const onScroll = () => { scrolled.value = window.scrollY > 12 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  // Scroll-spy: highlight the section currently in view
  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) active.value = e.target.id })
  }, { rootMargin: '-45% 0px -50% 0px' })
  items.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="container nav__inner">
      <a href="#top" class="nav__logo mono" @click="open = false">
        <span class="nav__bracket">&lt;</span>kirber<span class="nav__bracket">/&gt;</span>
      </a>

      <nav id="primary-nav" class="nav__links" :aria-label="t('nav.menu')">
        <a
          v-for="id in items"
          :key="id"
          :href="`#${id}`"
          :class="{ active: active === id }"
          :aria-current="active === id ? 'location' : undefined"
          @click="open = false"
        >{{ t(`nav.${id}`) }}</a>
      </nav>

      <div class="nav__actions">
        <button class="icon-btn lang mono" :aria-label="t('nav.toggleLang')" :title="t('nav.toggleLang')" @click="toggle">
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>
        <button class="icon-btn" :aria-label="t('nav.toggleTheme')" :title="t('nav.toggleTheme')" @click="toggleTheme">
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button
          class="icon-btn nav__burger"
          :aria-label="t('nav.menu')"
          :aria-expanded="open"
          aria-controls="primary-nav"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 50;
  transition: background .3s, border-color .3s, backdrop-filter .3s;
  border-bottom: 1px solid transparent;
}
.nav--scrolled, .nav--open {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--line);
}
.nav__inner { display: flex; align-items: center; justify-content: space-between; height: 68px; gap: 1rem; }
.nav__logo { font-weight: 500; font-size: 1rem; }
.nav__bracket { color: var(--accent); }
.nav__links { display: flex; gap: .25rem; }
.nav__links a {
  padding: .45rem .8rem; border-radius: 999px; font-size: .92rem; color: var(--muted);
  transition: color .2s, background .2s;
}
.nav__links a:hover { color: var(--text); }
.nav__links a.active { color: var(--text); background: var(--bg-soft); }
.nav__actions { display: flex; gap: .5rem; }
.lang { font-size: .78rem; font-weight: 500; }
.nav__burger { display: none; }

@media (max-width: 820px) {
  .nav__burger { display: inline-grid; }
  .nav__links {
    position: absolute; top: 68px; left: 0; right: 0;
    flex-direction: column; padding: 1rem 1.25rem 1.5rem;
    background: var(--bg); border-bottom: 1px solid var(--line);
    transform: translateY(-8px); opacity: 0; pointer-events: none;
    transition: opacity .2s, transform .2s;
  }
  .nav--open .nav__links { opacity: 1; transform: none; pointer-events: auto; }
  .nav__links a { padding: .8rem 1rem; font-size: 1.05rem; }
}
</style>
