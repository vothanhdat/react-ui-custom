import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Section } from "./Section"
import { Typo } from '../Typograpy/Typography';



const meta = {
    title: 'Layouts/Section',
    component: Section.Root,
    parameters: {

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        isFilled: Boolean,
        isContract: Boolean,
        isOutlined: Boolean,
        isDimmed: Boolean,
        isPrimary: Boolean,
        isLink: Boolean,
        isDanger: Boolean
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
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

export const PrimaryFilled: Story = {
    args: {
        isPrimary: true,
        isFilled: true,
        children,
    },
};
export const LinkFilled: Story = {
    args: {
        isLink: true,
        isFilled: true,
        children,
    },
};