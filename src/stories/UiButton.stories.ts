
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// 1. Определяем тип для пропсов компонента, которые будут использоваться в Storybook
type StoryButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: (event: Event) => void;
};

// 2. Создаем meta с явным указанием типа StoryButtonProps
const meta: Meta<StoryButtonProps> = {
  title: 'Components/UI Button',
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Determines if the button is primary or secondary',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when button is clicked',
    },
  },
  render: (args) => html`
    <ui-button
      ?primary=${args.primary}
      size=${args.size}
      label=${args.label}
      @click=${args.onClick}
    ></ui-button>
  `,
};

export default meta;

// 3. Используем StoryObj с нашим типом StoryButtonProps
type Story = StoryObj<StoryButtonProps>;

export const Primary: Story = {
  args: {
    primary: true,
    size: 'medium',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    size: 'medium',
    label: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Large Button',
  },
};