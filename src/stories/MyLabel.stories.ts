import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' },
        color: { control: 'select' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic label',
        color: 'text-primary',
        allCaps: false
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        size: 'normal',
        allCaps: true
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary',
        allCaps: false
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        color: 'text-tertiary',
        allCaps: false
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Custom Background color label',
        size: 'h1',
        color: 'text-tertiary',
        allCaps: false
    }
};