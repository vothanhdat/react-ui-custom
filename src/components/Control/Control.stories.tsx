import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { Control } from './index'

const meta = {
  title: 'components/Control',
  component: Control,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(Control),
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Control',
    color: 'link',
    variant: 'outlined',
  },
} satisfies Meta<typeof Control>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const MultiLine: Story = {
  args: {
    multiLine: true,
    children: (
      <>
        <div style={{ fontWeight: 700 }}>Title</div>
        <div style={{ textTransform: 'none' }}>Description line</div>
      </>
    ),
  },
}
