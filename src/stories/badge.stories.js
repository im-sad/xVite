export default {
  title: 'UI/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual variant of the input'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер'
    }
  }
}

const renderBadge = ({
  variant = '',
  size = 'md',
  text = 'Badge'
} = {}) => {
  const classes = ['badge']

  classes.push(`badge--size-${size}`)
  classes.push(`badge--var-${variant}`)

  return `<div class="${classes.join(' ')}">
    ${text}
  </div>`
}

export const Default = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => renderBadge(args)
}

export const AllSizes = {
  render: () => `
    <div style="display: flex; align-items: center; gap: 16px; max-width: 200px;">
      ${renderBadge({ variant: 'primary', size: 'sm', text: 'Badge SM' })}
      ${renderBadge({ variant: 'primary', size: 'md', text: 'Badge MD' })}
      ${renderBadge({ variant: 'primary', size: 'lg', text: 'Badge LG' })}
    </div>
  `
}
