export default {
  title: 'UI/Radio',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'invert'],
      description: 'Визуальный вариант',
      table: {
        type: { summary: 'invert | empty' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Checked состояние'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled состояние'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер',
      table: {
        type: { summary: 'sm | md | lg' }
      }
    },
    label: {
      control: 'text',
      description: 'Текст заголовка'
    },
    mod: {
      control: { type: 'inline-check' },
      options: ['square', 'start'],
      description: 'Модификаторы',
      table: {
        type: { summary: 'rounded | start' }
      }
    },
    name: {
      control: 'text',
      description: 'Атрибут name'
    }
  }
}

const renderRadio = ({
  variant = '',
  checked = false,
  disabled = false,
  size = '',
  label = '',
  mod = '',
  name = 'radio'
} = {}) => {
  const classes = ['radio']

  classes.push(`radio--size-${size}`)

  if (variant) {
    classes.push(`radio--var-${variant}`)
  }

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`radio--mod-${mod}`))

  return `<label class="${classes.join(' ')}">

    <input
      type="radio"
      name="${name}"
      ${checked ? 'checked' : ''}
      ${disabled ? 'disabled' : ''}
    />
    <span class="radio__title">${label}</span>
  </label>`
}

export const Default = {
  args: {
    label: 'Accept terms',
    name: 'terms'
  },
  render: (args) => renderRadio(args)
}

export const Invert = {
  args: {
    variant: 'invert',
    label: 'Invert style'
  },
  render: (args) => renderRadio(args)
}

export const Group = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${renderRadio({ label: 'Option 1', name: 'opt1', checked: true })}
      ${renderRadio({ label: 'Option 2', name: 'opt1' })}
      ${renderRadio({ label: 'Option 3', name: 'opt1' })}
      ${renderRadio({ label: 'Disabled', name: 'optDisabled', disabled: true })}
      ${renderRadio({ label: 'Disabled', name: 'optDisabled2', disabled: true, checked: true })}
      <hr />
      ${renderRadio({ label: 'Option 1', name: 'opt2', checked: true, variant: 'invert' })}
      ${renderRadio({ label: 'Option 2', name: 'opt2', variant: 'invert' })}
      ${renderRadio({ label: 'Option 3', name: 'opt2', variant: 'invert' })}
      ${renderRadio({ label: 'Disabled', name: 'optDisabled3', disabled: true, variant: 'invert' })}
      ${renderRadio({ label: 'Disabled', name: 'optDisabled3', disabled: true, checked: true, variant: 'invert' })}
    </div>
  `
}
