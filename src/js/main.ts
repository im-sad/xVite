import { rootFz } from '@utils/root-fz'
import { setWidgetsHeight } from '@utils/widgets-height'
import { setScrollWidth } from '@utils/scroll-width'
import { iosFixes } from '@utils/ios-fixes'
import { initModals } from '@modules/init-modals'
import { initLazyImg } from '@modules/init-lazy-img'
import { initAnimations } from '@modules/init-animations'

// DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  rootFz()
  setScrollWidth()
  setWidgetsHeight()
  iosFixes()
  initLazyImg()
})

// All resources loaded
window.addEventListener('load', () => {
  initAnimations()
  initModals()
})
