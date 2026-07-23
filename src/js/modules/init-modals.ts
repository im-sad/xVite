import HystModal, { HystModalInstance } from 'hystmodal'

export const initModals = (): HystModal => {
  const modals = new HystModal({
    linkAttributeName: 'data-open-modal',
    waitTransitions: true,
    beforeOpen: (_modalInstance: HystModalInstance) => {},
    afterClose: (modalInstance: HystModalInstance) => {
      const target: HTMLElement = modalInstance.element

      target.setAttribute('aria-hidden', 'true')
    }
  })

  return modals
}
