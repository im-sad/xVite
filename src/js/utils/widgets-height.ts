export const setWidgetsHeight = () => {
  const footer = document.getElementById('footer')
  const header = document.getElementById('header')

  footer && document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`)
  header && document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)

  window.addEventListener('resize', () => {
    footer && document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`)
    header && document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)
  })
}
