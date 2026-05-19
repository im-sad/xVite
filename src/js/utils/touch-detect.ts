const hasTouch = () => window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0

const touchDetect = () => {
  document.documentElement.classList.add(hasTouch() ? 'has-touch' : 'no-touch')
}

export { touchDetect, hasTouch }
