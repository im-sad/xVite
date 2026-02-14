const toCamelCase = (str: string) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr: string) => chr.toUpperCase())

const getCSSVarValue = (variable: string) => getComputedStyle(document.documentElement).getPropertyValue(variable)

const copyToClipboard = async(text: string): Promise<boolean> => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Text copied to clipboard')
      return true
    } catch (ex) {
      console.warn('Modern clipboard API failed, falling back to legacy method', ex)
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.left = '-999999px'
  textarea.style.top = '-999999px'
  document.body.appendChild(textarea)

  try {
    textarea.focus()
    textarea.select()
    const result = document.execCommand('copy')
    console.log('Text copied using legacy method')
    return result
  } catch (ex) {
    console.warn('Copy to clipboard failed', ex)
    return false
  } finally {
    document.body.removeChild(textarea)
  }
}

const formatBytes = (bytes: number, lang: string[] = ['B', 'KB', 'MB', 'GB', 'TB']) => {
  if (bytes === 0) {
    return '0B'
  }

  const sizes = lang
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const result = bytes / Math.pow(1024, i)

  return (result % 1 === 0 ? result : result.toFixed(2)) + sizes[i]
}

export { toCamelCase, getCSSVarValue, copyToClipboard, formatBytes }
