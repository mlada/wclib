import type { Meta, StoryObj } from '@storybook/web-components';
 
import { html } from 'lit';
import { UiMenu } from '../components/ui-menu/ui-menu';

const meta: Meta<UiMenu> = {
  title: 'Components/UI Menu',
  component: 'ui-menu',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Определяет тип меню горизонтальный или вертикальный',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер меню',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    elements: {
      control: 'object',
      description: 'Массив элементов меню',
      table: {
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    type: 'horizontal',
    size: 'medium',
    elements: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  render: (args) => html`
    <ui-menu
      type=${args.type}
      size=${args.size}
      .elements=${args.elements}
    ></ui-menu>
  `,
};

export default meta;

type Story = StoryObj<UiMenu>;

export const Default: Story = {};

export const VerticalMenu: Story = {
  args: {
    type: 'vertical',
  },
};

export const SmallMenu: Story = {
  args: {
    size: 'small',
  },
};

export const LargeMenu: Story = {
  args: {
    size: 'large',
  },
};

export const CustomItems: Story = {
  args: {
    elements: [
      { name: 'Products', url: '/products' },
      { name: 'Services', url: '/services' },
      { name: 'Blog', url: '/blog' },
      { name: 'Support', url: '/support' },
    ],
  },
};
 