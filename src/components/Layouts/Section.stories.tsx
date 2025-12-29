import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Section } from "./Section"
import { Typo } from '../Typograpy/Typography';



const meta = {
  title: 'Layouts/Section',
  component: Section.Root,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      type: {
        name: "enum",
        required: false,
        value: ['link', 'primary', 'success', 'danger', 'secondary', 'contract'] as const
      }
    },
    section: {
      type: {
        name: "enum",
        required: false,
        value: ['small', 'medium', 'large'] as const
      }
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Section.Root>;


export default meta;
type Story = StoryObj<typeof meta>;


const children = <Section.FlexBody>
  <Typo.Title as='h1'>
    Hello World
  </Typo.Title>
  <Typo.Title as='h3'>
    Say Hello to the world
  </Typo.Title>
</Section.FlexBody>


export const SectionPrimary: Story = {
  args: {
    color: "primary",
    children,
  },
};

export const SectionLink: Story = {
  args: {
    color: "link",
    children,
  },
};