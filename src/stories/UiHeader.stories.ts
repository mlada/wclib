import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Определяем тип для пропсов Storybook
type HeaderStoryProps = {
  slotLogo?: unknown;
  slotAuth?: unknown;
};

const meta: Meta<HeaderStoryProps> = {
  title: 'Components/UI Header',
  component: 'ui-header',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-header>
      ${args.slotLogo ? html`<div slot="logo-section">${args.slotLogo}</div>` : ''}
      ${args.slotAuth ? html`<div slot="auth-section">${args.slotAuth}</div>` : ''}
    </ui-header>
  `,
  argTypes: {
    slotLogo: {
      control: 'text',
      description: 'Контент слота logo-section',
      table: {
        category: 'Slots',
      },
    },
    slotAuth: {
      control: 'text',
      description: 'Контент слота auth-section',
      table: {
        category: 'Slots',
      },
    },
  },
  args: {
    slotLogo: 'Логотип',
    slotAuth: 'Авторизация',
  },
};

export default meta;

type Story = StoryObj<HeaderStoryProps>;

export const Default: Story = {};

export const WithLogo: Story = {
  args: {
    slotLogo: html`<img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" style="height: 40px;">`,
  },
};

export const WithAuthButtons: Story = {
  args: {
    slotAuth: html`
      <div style="display: flex; gap: 10px;">
        <button style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px;">Войти</button>
        <button style="padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px;">Регистрация</button>
      </div>
    `,
  },
};

export const WithBothSlots: Story = {
  args: {
    slotLogo: html`<img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" style="height: 40px;">`,
    slotAuth: html`
      <div style="display: flex; gap: 10px;">
        <button style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px;">Войти</button>
        <button style="padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px;">Регистрация</button>
      </div>
    `,
  },
};

export const EmptyHeader: Story = {
  args: {
    slotLogo: '',
    slotAuth: '',
  },
};