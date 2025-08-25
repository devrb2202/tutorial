// /composables/useTheme.ts
// import { useVuetify } from 'vuetify'

import { useTheme } from "vuetify"

export const useThemes = () => {
   const theme = useTheme()

  // Load from localStorage on mounted
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.global.name.value = savedTheme
    }
  })

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    localStorage.setItem('theme', theme.global.name.value)
  }

  return { theme, toggleTheme }
}
