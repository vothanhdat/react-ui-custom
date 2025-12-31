import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { FlexLayout } from './FlexLayout'
import { Button } from '../Button'
import { Typo } from '../Typograpy/Typography'

const meta = {
  title: 'Layouts/FlexLayout',
  component: FlexLayout.Container,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(FlexLayout.Container),
  args: {
    row: true,
    gap: true,
    center: true,
    children: (
      <>
        <Button color="link">Left</Button>
        <Button color="primary">Middle</Button>
        <Button color="secondary">Right</Button>
      </>
    ),
  },
} satisfies Meta<typeof FlexLayout.Container>

export default meta

type Story = StoryObj<typeof meta>

export const Row: Story = {}

export const Col: Story = {
  args: {
    row: false,
    col: true,
    center: false,
    children: (
      <>
        <Typo.Title as="h4">Column</Typo.Title>
        <Typo.Text>
          This is a column layout using prop-driven classes.
        </Typo.Text>
        <Button color="success">Action</Button>
      </>
    ),
  },
}

export const Wrap: Story = {
  args: {
    row: true,
    wrap: true,
    gap: true,
    center: false,
    children: (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <Button key={i} color={i % 2 ? 'primary' : 'link'}>
            Item {i + 1}
          </Button>
        ))}
      </>
    ),
  },
}
