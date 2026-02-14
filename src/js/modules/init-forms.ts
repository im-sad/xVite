import JustValidate from 'just-validate'
import { validateOptions } from '@data/vars'
import { addRules, getPhone, savePhone } from '@helpers/form-helpers'

const submitForm = (e: Event) => {
  const targetForm = e.target as HTMLFormElement
  const name = targetForm.getAttribute('data-form') || ''
  const isLegacyForm = targetForm.hasAttribute('data-legacy-submit')
  const action = targetForm.getAttribute('action') || `${window.location}`
  const dataForm = new FormData(targetForm)
  const submitBtn = targetForm.querySelector('[type="submit"]')

  submitBtn?.classList.add('is-load')
  savePhone(targetForm)

  if (isLegacyForm) {
    targetForm.submit()
    return
  }

  fetch(action, {
    method: 'POST',
    credentials: 'same-origin',
    body: dataForm
  })
  .then((res) => {
    if (!res.ok) {
      submitBtn?.classList.remove('is-load')
      throw new Error('Server error')
    }
    return res.json()
  })
  .then((data) => {
    if (!data) {
      throw new Error('Invalid JSON response')
    } else {
      switch (name) {
        default:
        console.info('SENDED')
      }
    }

    submitBtn?.classList.remove('is-load')
  })
  .catch((err) => {
    submitBtn?.classList.remove('is-load')
    console.error(err)
  })
}

const initForms = () => {
  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('[data-form]:not(.is-init)')

  forms.forEach((form: HTMLFormElement) => {
    const validate = new JustValidate(form, validateOptions)

    getPhone(form)
    addRules(form, validate)
    validate.onSuccess(e => submitForm(e as Event))

    form.formApi = validate
    form.classList.add('is-init')
  })
}

export { validateOptions, initForms }
