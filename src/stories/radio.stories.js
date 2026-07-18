export default {
  title: 'UI/Radio',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
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
      description: 'Radio label'
    },
    mod: {
      control: 'select',
      options: ['square'],
      description: 'Radio modifier'
    },
    name: {
      control: 'text',
      description: 'Input name'
    }
  }
}

const renderRadio = ({ checked = false, disabled = false, size = '', label = '', mod = '', name = 'radio' } = {}) => {
  const classes = ['radio']

  classes.push(`radio--size-${size}`)

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

export const Group = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${renderRadio({ label: 'Option 1', name: 'opt1', checked: true })}
      ${renderRadio({ label: 'Option 2', name: 'opt1' })}
      ${renderRadio({ label: 'Option 3', name: 'opt1' })}
      ${renderRadio({ label: 'Disabled', name: 'opt4', disabled: true, checked: true })}
    </div>
  `
}
