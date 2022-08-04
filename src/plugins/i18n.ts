import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { Plugin } from 'vue'

export function createAppI18n(): Plugin {
  return createI18n({
    locale: 'en',
    messages,
  })
}
