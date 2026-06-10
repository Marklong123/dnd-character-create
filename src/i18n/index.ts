// WSG 3.8: Lazy-load non-active locale — only import the active language on startup
import { createI18n } from 'vue-i18n'

const supportedLocales = ['en', 'zh'] as const
const detectedLocale = navigator.language.startsWith('zh') ? 'zh' : 'en'

const fallbackMessagesPromise = import('./locales/en.json').then(m => m.default)

// Start loading the active locale immediately (non-blocking)
const activeMessagesPromise = detectedLocale === 'zh'
  ? import('./locales/zh.json').then(m => m.default)
  : fallbackMessagesPromise

// Create i18n with empty messages — populated before app mount via initI18n()
const i18n = createI18n({
  legacy: false,
  locale: detectedLocale,
  fallbackLocale: 'en',
  messages: {},
  missingWarn: false,
  fallbackWarn: false,
})

/**
 * Initialize i18n with the detected locale's messages.
 * Must be called (and awaited) before app.mount().
 */
export async function initI18n(): Promise<void> {
  const [fallbackMessages, messages] = await Promise.all([fallbackMessagesPromise, activeMessagesPromise])
  i18n.global.setLocaleMessage('en', fallbackMessages)
  i18n.global.setLocaleMessage(detectedLocale, messages)
  // Re-enable warnings now that messages are loaded
  i18n.global.missingWarn = true
  i18n.global.fallbackWarn = true
}

/**
 * Lazy-load a locale's messages if not already available.
 * Call this when the user switches language.
 */
export async function loadLocale(locale: string): Promise<void> {
  if (i18n.global.availableLocales.includes(locale)) return
  const normalizedLocale = supportedLocales.includes(locale as typeof supportedLocales[number]) ? locale : 'en'
  const messages = normalizedLocale === 'zh'
    ? (await import('./locales/zh.json')).default
    : (await import('./locales/en.json')).default
  i18n.global.setLocaleMessage(normalizedLocale, messages)
}

export default i18n
