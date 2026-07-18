export default {
  title: 'UI/Select',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Visual variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select'
    },
    mod: {
      control: { type: 'inline-check' },
      options: ['rounded'],
      description: 'Модификатор',
      table: {
        type: { summary: 'Array<"rounded">' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    hasError: {
      control: 'boolean',
      description: 'Error state'
    }
  }
}

const renderSelect = ({
  variant = '',
  size = 'md',
  mod = [],
  disabled = false,
  hasError = false
} = {}) => {
  const classes = ['select']
  if (variant === 'primary') classes.push('select--var-primary')
  classes.push(`select--size-${size}`)
  if (hasError) classes.push('select--has-error')

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`input--mod-${mod}`))

  return `<select
    class="${classes.join(' ')}"
    ${disabled ? 'disabled' : ''}
  >
    <option value="">Choose...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>`
}

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => renderSelect(args)
}

export const AllSizes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      ${renderSelect({ variant: 'primary', size: 'sm' })}
      ${renderSelect({ variant: 'primary', size: 'md' })}
      ${renderSelect({ variant: 'primary', size: 'lg' })}
    </div>
  `
}
