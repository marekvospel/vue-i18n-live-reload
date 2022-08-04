import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { createAppI18n } from './plugins/i18n'

app.use(createAppI18n())

app.mount('#app')
