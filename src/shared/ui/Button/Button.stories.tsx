import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {Button, ThemeButton} from './Button';
import '@app/styles/index.scss'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'radio',
            options: ['clear'], // подставь реальные значения ThemeButton
        },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',

    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
