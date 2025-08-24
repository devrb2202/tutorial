// composables/useToc.ts
import { ref, onMounted, onUnmounted } from 'vue'

export const useToc = () => {
  const toc = {
    '/nuxt/introduction': [
      { label: 'What is Vue JS?', hash: '#sample01' },
      { label: 'Why it’s needed?', hash: '#sample02' },
      { label: 'What is an advantage?', hash: '#sample03' }
    ],
    '/nuxt/create-page': [
      { label: 'Creating First Page', hash: '#create01' },
      { label: 'Nested Pages', hash: '#create02' }
    ]
  }

  const active = ref<string | null>(null)

  const setActiveSection = () => {
    const sections = document.querySelectorAll<HTMLElement>('[id]')
    let current: string | null = null

    for (const el of sections) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) { // 120px offset para di agad mag-trigger
        current = `#${el.id}`
      }
    }

    active.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', setActiveSection)
    setActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', setActiveSection)
  })

  return { toc, active }
}
