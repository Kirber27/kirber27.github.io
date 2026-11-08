import { ref, watch } from 'vue'

const initial = typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'dark' : 'dark'
const theme = ref(initial)

watch(theme, (val) => {
  document.documentElement.dataset.theme = val
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', val === 'dark' ? '#0b0d10' : '#f6f5f1')
  try { localStorage.setItem('theme', val) } catch { /* ignore */ }
})

export function useTheme() {
  const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark' }
  return { theme, toggleTheme }
}
