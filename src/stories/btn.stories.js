export default {
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Визуальный вариант',
      table: {
        type: { summary: 'primary | secondary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер',
      table: {
        type: { summary: 'sm | md | lg' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled состояние'
    },
    link: {
      control: 'boolean',
      description: 'Сссылка, вместо button'
    },
    loading: {
      control: 'boolean',
      description: 'Loading состояние'
    },
    mod: {
      control: { type: 'inline-check' },
      options: ['square', 'fluid'],
      description: 'Модификатор',
      table: {
        type: { summary: 'Array<"square" | "fluid">' }
      }
    },
    text: {
      control: 'text',
      description: 'Текст'
    }
  }
}

const renderButton = ({
  variant = 'primary',
  size = 'md',
  link = false,
  disabled = false,
  loading = false,
  mod = [],
  text = 'Button'
} = {}) => {
  const classes = ['btn']

  classes.push(`btn--size-${size}`)
  classes.push(`btn--var-${variant}`)

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`btn--mod-${mod}`))
  if (loading) classes.push('is-load')

  return link ? `<a
      href="#"
      onclick="return false;"
      class="${classes.join(' ')}"
      role="button"
      ${disabled ? 'disabled' : ''}
    >
      ${loading ? '<div class="btn__loader"></div>' : ''}
      <span class="btn__text">${text}</span>
    </a>` : `
    <button
      class="${classes.join(' ')}"
      type="button"
      ${disabled ? 'disabled' : ''}
    >
      ${loading ? '<div class="btn__loader"></div>' : ''}
      <span class="btn__text">${text}</span>
    </button>
  `
}

export const Primary = {
  args: {
    variant: 'primary',
    text: 'Primary',
    disabled: true
  },
  render: (args) => renderButton(args)
}

export const Secondary = {
  args: {
    variant: 'secondary',
    text: 'Secondary'
  },
  render: (args) => renderButton(args)
}
