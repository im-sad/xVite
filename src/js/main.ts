import { setScrollWidth } from '@utils/scroll-width'
import { iosFixes } from '@utils/ios-fixes'
import { initModals } from '@modules/init-modals'
import { initTheme } from '@modules/init-theme'
import { initTips } from '@modules/init-tip'

// DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  setScrollWidth()
  iosFixes()
  // initTheme()
})

// All resources loaded
window.addEventListener('load', () => {
  initModals()
  initTips()
})
