import { gsap } from 'gsap'

export const animationMagnetic = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-magnetic]')
  const magnetoStrength = 15
  const magnetoDuration = 1.5

  elements.forEach((item: HTMLElement) => {
    const strength = +(item.dataset.magneticStrength ?? magnetoStrength)
    const duration = +(item.dataset.magneticDuration ?? magnetoDuration) 

    item.addEventListener('mousemove', (e: MouseEvent) => {
      const boundBox = item.getBoundingClientRect()
      const newX = ((e.clientX - boundBox.left) / item.offsetWidth) - 0.5
      const newY = ((e.clientY - boundBox.top) / item.offsetHeight) - 0.5

      gsap.to(item, {
        x: newX * strength,
        y: newY * strength,
        duration: duration,
        ease: 'power4.out'
      })
    })

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: duration,
        ease: 'elastic.out'
      })
    })
  })
}
