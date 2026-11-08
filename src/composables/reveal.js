/**
 * v-reveal: fades elements in when they enter the viewport.
 * Uses one shared IntersectionObserver; does nothing when the user prefers reduced motion.
 */
let observer

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        observer.unobserve(e.target)
      }
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  return observer
}

export const vReveal = {
  mounted(el, binding) {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
