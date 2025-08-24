// app/router.options.ts
import type { RouterScrollBehavior } from 'vue-router'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    const el = document.querySelector(to.hash)
    if (el) {
      const topOffset = 80 // taas ng AppBar/Navbar
      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      return {
        left: 0,
        top: elementPosition - topOffset,
        behavior: 'smooth'
      }
    }
  }

  return { left: 0, top: 0 }
}

export default {
  scrollBehavior
}
