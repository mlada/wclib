import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { UiHeader } from '../components';
import { MenuElement } from '../components/ui-menu/ui-menu';

const elements: MenuElement[] = [
  { name: 'Услуги', url: '/' },
  { name: 'Портфолио', url: '/about' },
  { name: 'О компании', url: '/contact' },
];

const meta: Meta<UiHeader> = {
  title: 'Components/UI Header',
  component: 'ui-header',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-header style="--header-height: 80px;">
      <ui-menu
        type='horizontal'
        size='medium'
        .elements=${elements}
      ></ui-menu>
      <h1>РАЗРАБОТЧИК</h1>
      <ui-button
        type='primary'
        size='medium'
        label='Заказать сайт' 
      ></ui-button>
    </ui-header>
  `
};

export default meta;

type Story = StoryObj<UiHeader>;

export const Default: Story = {};
