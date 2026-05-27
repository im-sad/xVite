import { setScrollWidth } from '@utils/scroll-width'
import { iosFixes } from '@utils/ios-fixes'
import { initModals } from '@modules/init-modals'
import { initTips } from '@modules/init-tip'

// DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  setScrollWidth()
  iosFixes()
})

// All resources loaded
window.addEventListener('load', () => {
  initModals()
  initTips()
})
