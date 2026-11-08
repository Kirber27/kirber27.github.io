import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from './composables/useI18n'
import { vReveal } from './composables/reveal'
import './styles/main.css'

createApp(App)
  .use(createI18n())
  .directive('reveal', vReveal)
  .mount('#app')
