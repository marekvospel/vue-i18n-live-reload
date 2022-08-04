import { defineConfig } from 'vite'
import { resolve } from 'node:path'

import Vue from '@vitejs/plugin-vue'
import I18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  plugins: [
    Vue(),

    I18n({
      compositionOnly: true,
      include: resolve('locale/**'),
    }),
  ],
})
