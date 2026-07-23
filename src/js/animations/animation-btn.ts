import { gsap } from 'gsap'

export const animationBtn = (): void => {
  const buttons = document.querySelectorAll<HTMLElement>('.btn')

  buttons.forEach((btn) => {
    const pressHandler = () => {
      gsap.killTweensOf(btn)
      gsap.to(btn, { scale: 0.8, duration: 0.12, ease: 'power3.out', force3D: false })
    }

    const releaseHandler = () => {
      gsap.killTweensOf(btn)
      gsap.to(btn, { scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.4)', force3D: false })
    }

    btn.addEventListener('pointerdown', pressHandler)
    btn.addEventListener('pointerup', releaseHandler)
    btn.addEventListener('pointercancel', releaseHandler)
    btn.addEventListener('pointerleave', releaseHandler)
  })
}
