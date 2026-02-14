import type Swiper from 'swiper'
import JustValidate from 'just-validate'

export {}

declare global {
  interface Window {
    ASSETS_PATH: string
    MSInputMethodContext?: any
  }

  interface HTMLElement {
    swiperApi?: Swiper
  }

  interface HTMLFormElement {
    formApi?: JustValidate
  }
}
