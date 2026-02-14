import HystModal, { HystModalInstance } from 'hystmodal'

export const initModals = (): HystModal => {
  const modals = new HystModal({
    linkAttributeName: 'data-open-modal',
    waitTransitions: true,
    beforeOpen: (modalInstance: HystModalInstance) => {
      const target: HTMLElement = modalInstance.element
      console.log(target)
    }
  })

  return modals
}
