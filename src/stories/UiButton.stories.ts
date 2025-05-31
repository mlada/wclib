
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ButtonSize, ButtonType, UiButton } from '../components/ui-button/ui-button';

// 1. Определяем тип для пропсов компонента, которые будут использоваться в Storybook
type StoryButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  label?: string;
  onClick?: (event: Event) => void;
};
 

const meta: Meta<StoryButtonProps> = {
  title: 'Components/UI Button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'light', 'secondary'],
      description: 'Определяет тип кнопки',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер кнопки',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Название кнопки',
    },
    onClick: {
      action: 'clicked',
      description: 'Событие по клику',
    },
  },
  render: (args) => html`
    <ui-button
      type=${args.type}
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
    type: 'primary',
    size: 'medium',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
  },
};

export const Light: Story = {
  args: {
    type: 'light',
    size: 'medium',
    label: 'Light Button',
  },
  decorators: [
    (story) => html`
      <div style="
        background-color: var(--theme-main-color, orange);
        padding: 20px;
        border-radius: 8px;
        display: block;
        width: 80%;
        height: 100%;
      ">
        ${story()}
      </div>
    `,
  ],
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};