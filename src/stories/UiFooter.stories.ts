import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Определяем тип для пропсов Storybook
type FooterStoryProps = {
  user?: { name: string } | null;
  links?: Array<{
    title: string;
    links: Array<{ text: string; url: string }>;
  }>;
  socialLinks?: Array<{ name: string; url: string; icon: string }>;
  slotLogo?: unknown;
  slotActions?: unknown;
};

const meta: Meta<FooterStoryProps> = {
  title: 'Components/UI Footer',
  component: 'ui-footer',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-footer
      .user=${args.user}
      .links=${args.links}
      .socialLinks=${args.socialLinks}
    >
      ${args.slotLogo ? html`<div slot="logo-section">${args.slotLogo}</div>` : ''}
      ${args.slotActions ? html`<div slot="actions-section">${args.slotActions}</div>` : ''}
    </ui-footer>
  `,
  argTypes: {
    user: {
      control: 'object',
      description: 'Информация о пользователе',
    },
    links: {
      control: 'object',
      description: 'Колонки с ссылками в футере',
    },
    socialLinks: {
      control: 'object',
      description: 'Социальные сети с иконками',
    },
    slotLogo: {
      control: 'text',
      description: 'Контент слота logo-section',
      table: {
        category: 'Slots',
      },
    },
    slotActions: {
      control: 'text',
      description: 'Контент слота actions-section',
      table: {
        category: 'Slots',
      },
    },
  },
  args: {
    user: null,
    links: [
      {
        title: "Компания",
        links: [
          { text: "О нас", url: "/about" },
          { text: "Карьера", url: "/careers" },
          { text: "Контакты", url: "/contact" },
        ],
      },
      {
        title: "Ресурсы",
        links: [
          { text: "Документация", url: "/docs" },
          { text: "Блог", url: "/blog" },
          { text: "Поддержка", url: "/support" },
        ],
      },
      {
        title: "Правовая информация",
        links: [
          { text: "Условия использования", url: "/terms" },
          { text: "Политика конфиденциальности", url: "/privacy" },
          { text: "Cookie", url: "/cookie" },
        ],
      },
    ],
    socialLinks: [
      {
        name: "Twitter",
        url: "https://twitter.com",
        icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
      },
      {
        name: "Facebook",
        url: "https://facebook.com",
        icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
      },
    ],
    slotLogo: 'Логотип',
    slotActions: 'Действия',
  },
};

export default meta;

type Story = StoryObj<FooterStoryProps>;

export const Default: Story = {};

export const WithUser: Story = {
  args: {
    user: { name: "Иван Иванов" },
  },
};

export const CustomLinks: Story = {
  args: {
    links: [
      {
        title: "Категория 1",
        links: [
          { text: "Ссылка 1", url: "#" },
          { text: "Ссылка 2", url: "#" },
        ],
      },
      {
        title: "Категория 2",
        links: [
          { text: "Ссылка A", url: "#" },
          { text: "Ссылка B", url: "#" },
        ],
      },
    ],
  },
};

export const WithCustomSlots: Story = {
  args: {
    slotLogo: html`<img src="https://via.placeholder.com/150x50" alt="Logo">`,
    slotActions: html`<button>Действие</button>`,
  },
  render: (args) => html`
    <ui-footer
      .user=${args.user}
      .links=${args.links}
      .socialLinks=${args.socialLinks}
    >
      <div slot="logo-section">${args.slotLogo}</div>
      <div slot="actions-section">${args.slotActions}</div>
    </ui-footer>
  `,
};

export const MinimalFooter: Story = {
  args: {
    links: [],
    socialLinks: [],
    slotLogo: '',
    slotActions: '',
  },
};