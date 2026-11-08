import { describe, it, expect, beforeEach } from 'vitest'
import { createI18n, resolve } from '@/composables/useI18n'
import { messages } from '@/i18n/messages'

/** Collect every leaf key path of a nested object. */
const keys = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`])

describe('i18n', () => {
  beforeEach(() => localStorage.clear())

  it('has the same keys in English and Spanish', () => {
    expect(keys(messages.es).sort()).toEqual(keys(messages.en).sort())
  })

  it('resolves dotted paths', () => {
    expect(resolve(messages.en, 'nav.about')).toBe('About')
    expect(resolve(messages.en, 'nope.missing')).toBeUndefined()
  })

  it('translates and toggles locale', async () => {
    const i18n = createI18n('en')
    expect(i18n.t('nav.about')).toBe('About')
    i18n.toggle()
    expect(i18n.locale.value).toBe('es')
    expect(i18n.t('nav.about')).toBe('Sobre mí')
  })

  it('localizes content objects with English fallback', () => {
    const i18n = createI18n('es')
    expect(i18n.l({ en: 'Hello', es: 'Hola' })).toBe('Hola')
    expect(i18n.l({ en: 'Only English' })).toBe('Only English')
    expect(i18n.l('plain')).toBe('plain')
  })

  it('falls back to the key when missing', () => {
    expect(createI18n('en').t('does.not.exist')).toBe('does.not.exist')
  })
})
