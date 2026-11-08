import { ref, computed, watch, inject } from 'vue'
import { messages } from '@/i18n/messages'

export const SUPPORTED = ['en', 'es']
const KEY = Symbol('i18n')

function storageGet(k) {
  try { return localStorage.getItem(k) } catch { return null }
}
function storageSet(k, v) {
  try { localStorage.setItem(k, v) } catch { /* private mode, ignore */ }
}

export function detectLocale() {
  const saved = storageGet('lang')
  if (SUPPORTED.includes(saved)) return saved
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'en'
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en'
}

/** Resolve a dotted path like "nav.about" in the messages tree. */
export function resolve(tree, path) {
  return path.split('.').reduce((acc, part) => (acc == null ? acc : acc[part]), tree)
}

/**
 * Tiny i18n layer — no dependency needed for two languages.
 *  t('nav.about')      → UI string
 *  l({ en, es })       → localized content object
 */
export function createI18n(initial = detectLocale()) {
  const locale = ref(initial)

  const t = (path) => resolve(messages[locale.value], path) ?? resolve(messages.en, path) ?? path
  const l = (value) => {
    if (value == null || typeof value !== 'object') return value ?? ''
    return value[locale.value] ?? value.en ?? ''
  }
  const toggle = () => { locale.value = locale.value === 'en' ? 'es' : 'en' }

  watch(locale, (val) => {
    storageSet('lang', val)
    if (typeof document !== 'undefined') document.documentElement.lang = val
  }, { immediate: true })

  const api = { locale, t, l, toggle, isEs: computed(() => locale.value === 'es') }
  return {
    ...api,
    install(app) {
      app.provide(KEY, api)
      app.config.globalProperties.$t = t
      app.config.globalProperties.$l = l
    }
  }
}

export function useI18n() {
  const i18n = inject(KEY)
  if (!i18n) throw new Error('useI18n() called without installing createI18n()')
  return i18n
}
