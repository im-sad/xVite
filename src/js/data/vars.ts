const MEDIA = {
  fullhd: 1920,
  quadhd: 1440,
  hd: 1280,
  desktop: 1024,
  tablet: 768,
  smartphone: 620,
  phone: 480,
  last: 375
} as const

const validateOptions = {
  lockForm: true,
  errorLabelStyle: '',
  errorFieldCssClass: 'has-error',
  errorLabelCssClass: 'input-error',
  validateBeforeSubmitting: false,
  focusInvalidField: false
}

export { MEDIA, validateOptions }
