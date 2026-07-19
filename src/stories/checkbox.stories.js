export default {
  title: 'UI/Checkbox',
  tags: ['autodocs'],
  argTypes: {
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

const renderCheckbox = ({ checked = false, disabled = false, size = '', label = '', mod = '', name = 'checkbox' } = {}) => {
  const classes = ['checkbox']

  classes.push(`checkbox--size-${size}`)

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

export const Group = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${renderCheckbox({ label: 'Option 1', name: 'opt1', checked: true })}
      ${renderCheckbox({ label: 'Option 2', name: 'opt2' })}
      ${renderCheckbox({ label: 'Option 3', name: 'opt3' })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true })}
      ${renderCheckbox({ label: 'Disabled', name: 'opt4', disabled: true, checked: true })}
    </div>
  `
}
