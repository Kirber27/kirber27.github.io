import { describe, it, expect, beforeAll, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createI18n } from '@/composables/useI18n'

beforeAll(() => {
  globalThis.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} }
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => [] })
})

const factory = (lang) => mount(App, {
  global: { plugins: [createI18n(lang)], directives: { reveal: {} } },
  attachTo: document.body
})

describe('App', () => {
  it('renders every section', () => {
    const w = factory('en')
    ;['about', 'experience', 'projects', 'skills', 'contact'].forEach((id) =>
      expect(w.find(`#${id}`).exists()).toBe(true))
    w.unmount()
  })

  it('switches language from the navbar', async () => {
    const w = factory('en')
    expect(w.find('#about-title').text()).toBe('About me')
    await w.find('button.lang').trigger('click')
    expect(w.find('#about-title').text()).toBe('Sobre mí')
    expect(document.documentElement.lang).toBe('es')
    w.unmount()
  })
})
