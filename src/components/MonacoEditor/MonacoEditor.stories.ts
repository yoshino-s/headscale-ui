import { type Meta, type StoryObj } from '@storybook/react';

import MonacoEditor from './MonacoEditor';

const meta = {
  title: 'Components/MonacoEditor',
  component: MonacoEditor,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MonacoEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
