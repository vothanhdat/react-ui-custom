import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { Typo } from './Typography'

const meta = {
  title: 'components/Typography',
  component: Typo.Text,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(Typo.Text),
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    color: 'primary',
  },
} satisfies Meta<typeof Typo.Text>

export default meta

type Story = StoryObj<typeof meta>

export const TextPrimary: Story = {
  args: {
    color: 'primary',
  },
}

export const TitleH1: Story = {
  render: (args) => <Typo.Title as="h1" {...args} />, 
  args: {
    children: 'Hello Typography',
    color: 'link',
    bold: true,
  },
}

export const Inline: Story = {
  render: (args) => (
    <Typo.Text>
      Inline example: <Typo.Inline {...args} /> inside a paragraph.
    </Typo.Text>
  ),
  args: {
    children: 'highlight',
    color: 'secondary',
  },
}
