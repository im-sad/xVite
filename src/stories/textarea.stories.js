export default {
  title: 'UI/Textarea',
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

const renderTextarea = ({
  variant = '',
  size = 'md',
  type = 'text',
  placeholder = '',
  disabled = false,
  hasError = false,
  mod = [],
  value = ''
} = {}) => {
  const classes = ['textarea']
  if (variant === 'primary') classes.push('textarea--var-primary')
  classes.push(`textarea--size-${size}`)
  if (hasError) classes.push('textarea--has-error')

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`textarea--mod-${mod}`))

  return `<textarea
    class="${classes.join(' ')}"
    type="${type}"
    placeholder="${placeholder}"
    ${disabled ? 'disabled' : ''}
  >${value}</textarea>`
}

export const Primary = {
  args: {
    variant: 'primary',
    placeholder: 'Primary textarea',
    size: 'md'
  },
  render: (args) => renderTextarea(args)
}
