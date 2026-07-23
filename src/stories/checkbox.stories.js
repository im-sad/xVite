export default {
  title: 'UI/Checkbox',
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
      options: ['rounded', 'start'],
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

const renderCheckbox = ({
  variant = '',
  checked = false,
  disabled = false,
  size = '',
  label = '',
  mod = '',
  name = 'checkbox'
} = {}) => {
  const classes = ['checkbox']

  classes.push(`checkbox--size-${size}`)

  if (variant) {
    classes.push(`checkbox--var-${variant}`)
  }

  const selectedMods = Array.isArray(mod) ? mod : [mod]
  selectedMods.forEach((mod) => classes.push(`checkbox--mod-${mod}`))

  return `<label class="${classes.join(' ')}">

    <input
      type="checkbox"
      name="${name}"
      ${checked ? 'checked' : ''}
      ${disabled ? 'disabled' : ''}
    />
    <span class="checkbox__title">${label}</span>
  </label>`
}


export const Default = {
  args: {
    label: 'Accept terms',
    name: 'terms'
  },
  render: (args) => renderCheckbox(args)
}

export const Invert = {
  args: {
    variant: 'invert',
    label: 'Invert style'
  },
  render: (args) => renderCheckbox(args)
}

export const Group = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${renderCheckbox({ label: 'Option 1', name: 'opt1', checked: true })}
      ${renderCheckbox({ label: 'Option 2', name: 'opt2' })}
      ${renderCheckbox({ label: 'Option 3', name: 'opt3' })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true, checked: true })}
      <hr />
      ${renderCheckbox({ label: 'Option 1', name: 'opt1', checked: true, variant: 'invert' })}
      ${renderCheckbox({ label: 'Option 2', name: 'opt2', variant: 'invert' })}
      ${renderCheckbox({ label: 'Option 3', name: 'opt3', variant: 'invert' })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true, variant: 'invert' })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true, checked: true, variant: 'invert' })}
    </div>
  `
}
