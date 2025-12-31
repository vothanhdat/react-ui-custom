import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { Box } from './index'
import { Typo } from '../Typograpy/Typography'
import { Button } from '../Button'

const meta = {
  title: 'components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(Box),
  args: {
    color: 'primary',
    variant: 'filled',
    isElevated: true,
    isPadded: true,
    children: (
      <>
        <Typo.Title as="h4">Box</Typo.Title>
        <Typo.Text>
          A simple container built with existing utility CSS.
        </Typo.Text>
        <Button color="link" variant="outlined">
          Action
        </Button>
      </>
    ),
  },
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    isElevated: false,
    isBordered: true,
  },
}

export const Dimmed: Story = {
  args: {
    variant: 'dimmed',
    color: 'secondary',
    isElevated: false,
  },
}
