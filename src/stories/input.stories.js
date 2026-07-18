export default {
  title: 'UI/Input',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
      description: 'Visual variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type'
    },
    mod: {
      control: { type: 'inline-check' },
      options: ['rounded'],
      description: 'Модификатор',
      table: {
        type: { summary: 'Array<"rounded">' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    hasError: {
      control: 'boolean',
      description: 'Error state'
    },
    value: {
      control: 'text',
      description: 'Input value'
    }
  }
}

const renderInput = ({
  variant = '',
  size = 'md',
  type = 'text',
  placeholder = '',
  disabled = false,
  hasError = false,
  mod = [],
  value = ''
} = {}) => {
  const classes = ['input']
  if (variant === 'primary') classes.push('input--var-primary')
  classes.push(`input--size-${size}`)
  if (hasError) classes.push('input--has-error')

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`input--mod-${mod}`))

  return `<input
    class="${classes.join(' ')}"
    type="${type}"
    placeholder="${placeholder}"
    ${disabled ? 'disabled' : ''}
    value="${value}"
  />`
}

export const Primary = {
  args: {
    variant: 'primary',
    placeholder: 'Primary input',
    size: 'md'
  },
  render: (args) => renderInput(args)
}

export const Types = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      ${renderInput({ variant: 'primary', type: 'text', placeholder: 'Text' })}
      ${renderInput({ variant: 'primary', type: 'email', placeholder: 'Email' })}
      ${renderInput({ variant: 'primary', type: 'password', placeholder: 'Password' })}
      ${renderInput({ variant: 'primary', type: 'number', placeholder: 'Number' })}
      ${renderInput({ variant: 'primary', type: 'tel', placeholder: 'Phone' })}
      ${renderInput({ variant: 'primary', type: 'url', placeholder: 'URL' })}
    </div>
  `
}
