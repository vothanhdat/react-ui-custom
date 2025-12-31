import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { Select } from './index'

const meta = {
  title: 'components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(Select),
  parameters: {
    layout: 'centered',
  },
  args: {
    color: 'primary',
    variant: 'outlined',
    children: (
      <select defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    ),
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'link',
  },
}

export const IconOnly: Story = {
  args: {
    isIcon: true,
    children: (
      <select defaultValue="menu" aria-label="Select menu">
        <option value="menu">Menu</option>
        <option value="settings">Settings</option>
      </select>
    ),
  },
}
