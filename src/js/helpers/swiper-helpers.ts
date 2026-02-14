import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types/swiper-options'

const getProgressPercent = (progress: number) => +((1 - progress).toFixed(2)) * 100

const hasManySlides = (slider: HTMLElement) => slider.getElementsByClassName('swiper-slide').length >= 2

const allSlidesVisible = (swiperInstance: Swiper): boolean => {
  if (!swiperInstance || !swiperInstance.slides || swiperInstance.slides.length === 0) {
    return false
  }

  const slides = swiperInstance.slides
  const container = swiperInstance.wrapperEl

  if (!container) {
    return false
  }

  const containerRect = container.getBoundingClientRect()
  const isVertical = swiperInstance.params.direction === 'vertical'
  const containerSize = isVertical ? containerRect.height : containerRect.width

  let totalSlidesSize = 0
  const spaceBetween = Number(swiperInstance.params.spaceBetween) || 0

  slides.forEach((slide, index) => {
    const slideRect = slide.getBoundingClientRect()
    const slideSize = isVertical ? slideRect.height : slideRect.width
    totalSlidesSize += slideSize

    if (index < slides.length - 1) {
      totalSlidesSize += spaceBetween
    }
  })

  return totalSlidesSize <= containerSize
}

// Отключаем свайпер на брейкпоинте
const createBreakpoint = (el: HTMLElement, params: SwiperOptions, media: string) => {
  let swiperInstance: undefined | Swiper
  const mediaBreak = window.matchMedia(media)

  if (!el) {
    return
  }

  const initSwiper = () => (swiperInstance = new Swiper(el, params))

  const breakpointChecker = () => {
    if (mediaBreak.matches === true) {
      return initSwiper()
    } else if (mediaBreak.matches === false) {
      swiperInstance !== undefined && swiperInstance.destroy(true, true)
    }

    return false
  }

  mediaBreak.addListener(breakpointChecker)
  breakpointChecker()
}

export { allSlidesVisible, getProgressPercent, hasManySlides, createBreakpoint }
