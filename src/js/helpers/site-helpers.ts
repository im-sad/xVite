const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const hasTouch = () => window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0

export { isDarkMode, hasTouch }
