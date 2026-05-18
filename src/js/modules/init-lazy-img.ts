export const initLazyImg = (): void => {
  const lazyImgs = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')

  lazyImgs.forEach(img => {
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('is-loaded')
      return
    }

    const handleLoad = () => {
      img.classList.add('is-loaded')
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }

    const handleError = () => {
      img.classList.add('is-error')
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)
  })
}
