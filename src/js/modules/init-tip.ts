import tippy, { Placement } from 'tippy.js'

const createTip = (el: HTMLElement) => {
  const offsetX = parseInt(el.dataset.offsetX || '0', 10)
  const offsetY = parseInt(el.dataset.offsetY || '10', 10)
  const width = parseInt(el.dataset.width || '350', 10)
  const position: Placement = el.dataset.position as Placement

  tippy(el, {
    content: el.getAttribute('data-tip') || '',
    placement: position,
    maxWidth: width,
    theme: 'custom',
    trigger: 'mouseenter click focus',
    hideOnClick: false,
    offset: [offsetX, offsetY]
  })
}

export const initTips = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-tip]')

  elements.forEach((el: HTMLElement) => createTip(el))
}
