export const rootFz = (min?: number, max?: number) => {
  // Линейная интерполяция font-size
  const resizeObserver = new ResizeObserver(_ => calculateRootFontSize())
  resizeObserver.observe(document.body)

  function calculateRootFontSize() {
    const minWidth = 320
    const maxWidth = 1920
    const minFont = min || 14
    const maxFont = max || 24

    const width = Math.min(Math.max(window.innerWidth, minWidth), maxWidth)

    const ratio = (width - minWidth) / (maxWidth - minWidth)
    const fontSize = minFont + (maxFont - minFont) * ratio

    document.documentElement.style.setProperty('--fluid-size', `${fontSize}px`)
  }
}
