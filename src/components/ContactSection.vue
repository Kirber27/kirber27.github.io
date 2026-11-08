<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { profile } from '@/data/profile'
import SectionHeader from './SectionHeader.vue'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.links.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch { window.location.href = `mailto:${profile.links.email}` }
}
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <SectionHeader index="05" id-prefix="contact" :title="t('sections.contact')" />
      <div class="contact__box" v-reveal>
        <p class="contact__text">{{ t('contact.text') }}</p>
        <a v-if="profile.links.email" :href="`mailto:${profile.links.email}`" class="contact__email">{{ profile.links.email }}</a>
        <div class="contact__actions">
          <a v-if="profile.links.email" :href="`mailto:${profile.links.email}`" class="btn btn--primary"><AppIcon name="mail" /> {{ t('contact.email') }}</a>
          <button v-if="profile.links.email" class="btn" @click="copyEmail">
            <AppIcon name="copy" /> <span aria-live="polite">{{ copied ? t('contact.copied') : t('contact.copy') }}</span>
          </button>
          <a v-if="profile.links.linkedin" :href="profile.links.linkedin" target="_blank" rel="noopener" class="btn"><AppIcon name="linkedin" /> LinkedIn</a>
          <a :href="profile.links.github" target="_blank" rel="noopener" class="btn"><AppIcon name="github" /> GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__box { max-width: 760px; }
.contact__text { font-size: 1.25rem; line-height: 1.55; margin-top: 0; color: var(--muted); }
.contact__email {
  display: inline-block; font-size: clamp(1.4rem, 4.2vw, 2.6rem); font-weight: 600; letter-spacing: -.03em;
  margin: .5rem 0 2rem; word-break: break-all;
  background: linear-gradient(var(--accent), var(--accent)) 0 100% / 0 2px no-repeat;
  transition: background-size .35s var(--ease);
}
.contact__email:hover { background-size: 100% 2px; }
.contact__actions { display: flex; flex-wrap: wrap; gap: .75rem; }
</style>
