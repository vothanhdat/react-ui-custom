import type { Meta, StoryObj } from '@storybook/react-vite'

import { getStoryBookArgTypes } from '../../core/elFactory'
import { GridLayout } from './GridLayout'
import { Typo } from '../Typograpy/Typography'

const meta = {
  title: 'Layouts/GridLayout',
  component: GridLayout.GridContainer,
  tags: ['autodocs'],
  argTypes: getStoryBookArgTypes(GridLayout.GridContainer),
  args: {
    children: (
      <>
        <GridLayout.GridItem className="box">
          <Typo.Title as="h4">Item 1</Typo.Title>
          <Typo.Text>Grid item content</Typo.Text>
        </GridLayout.GridItem>
        <GridLayout.GridItem className="box">
          <Typo.Title as="h4">Item 2</Typo.Title>
          <Typo.Text>Grid item content</Typo.Text>
        </GridLayout.GridItem>
        <GridLayout.GridItem className="box">
          <Typo.Title as="h4">Item 3</Typo.Title>
          <Typo.Text>Grid item content</Typo.Text>
        </GridLayout.GridItem>
      </>
    ),
  },
} satisfies Meta<typeof GridLayout.GridContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div className="container">
      <GridLayout.GridContainer {...args} />
    </div>
  ),
}
