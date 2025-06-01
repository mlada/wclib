import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {  UiHeader } from '../components';
import { MenuElement } from '../../declaration';

const elements: MenuElement[] = [
  { name: 'Услуги', url: '/services' },
  { name: 'Портфолио', url: '/portfolio' },
  { name: 'О компании', url: '/about' },
];

/**
 * A customizable header component with navigation menu and call-to-action buttons.
 * 
 * ### Angular Usage
 * ```typescript
 * import { UiHeaderDirective, UiMenuDirective, UiButtonDirective } from 'your-library';
 * 
 * @NgModule({
 *   declarations: [UiHeaderDirective, UiMenuDirective, UiButtonDirective],
 * })
 * export class YourModule {}
 * 
 * // In template:
 * <ui-header [sticky]="true">
 *   <ui-menu
 *     [type]="'horizontal'"
 *     [size]="'medium'"
 *     [elements]="menuItems"
 *   ></ui-menu>
 *   <h1>РАЗРАБОТЧИК</h1>
 *   <ui-button
 *     [type]="'primary'"
 *     [size]="'medium'"
 *     [label]="'Заказать сайт'"
 *     (click)="handleButtonClick($event)"
 *   ></ui-button>
 * </ui-header>
 * 
 * // In component class:
 * menuItems = [
 *   { name: 'Услуги', url: '/services' },
 *   { name: 'Портфолио', url: '/portfolio' },
 *   { name: 'О компании', url: '/about' }
 * ];
 * 
 * 
 * handleButtonClick(event: Event) {
 *   console.log('Order button clicked');
 *   // Open order form
 * }
 * ```
 * 
 * ### React Usage
 * ```jsx
 * import { ReactUiHeader, ReactUiMenu, ReactUiButton } from 'your-library';
 * 
 * function App() {
 *   const menuItems = [
 *     { name: 'Услуги', url: '/services' },
 *     { name: 'Портфолио', url: '/portfolio' },
 *     { name: 'О компании', url: '/about' }
 *   ];
 * 
 * 
 *   const handleOrderClick = () => {
 *     console.log('Order button clicked');
 *     // Open order form
 *   };
 * 
 *   return (
 *     <ReactUiHeader sticky >
 *       <ReactUiMenu
 *         type="horizontal"
 *         size="medium"
 *         elements={menuItems}
 *       />
 *       <h1>РАЗРАБОТЧИК</h1>
 *       <ReactUiButton
 *         type="primary"
 *         size="medium"
 *         label="Заказать сайт"
 *         onClick={handleOrderClick}
 *       />
 *     </ReactUiHeader>
 *   );
 * }
 * ```
 */
const meta: Meta<UiHeader> = {
  title: 'Components/UI Header',
  component: 'ui-header',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-header
      style="--header-height: 80px;"
    >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <h1>РАЗРАБОТЧИК</h1>
      <ui-button
        type="primary"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `
};

export default meta;

type Story = StoryObj<UiHeader>;

// Default header
export const Default: Story = {};

// Sticky header
export const Sticky: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'This header sticks to the top when scrolling. Try scrolling the preview area.'
      }
    }
  },
  decorators: [
    (story) => html`
      <div style="height: 200vh; position: relative;">
        ${story()}
        <div style="padding: 20px; margin-top: 100px;">
          <h2>Scroll down to see sticky behavior</h2>
          <p>Page content...</p>
        </div>
      </div>
    `
  ]
};

// Header with custom logo
export const WithCustomLogo: Story = {
  render: (args) => html`
    <ui-header
      style="--header-height: 80px;"
    >
      <img 
        slot="logo" 
        src="https://via.placeholder.com/150x50?text=Логотип" 
        alt="Логотип компании"
        style="height: 40px;"
      >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <ui-button
        type="primary"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `
};

// Dark theme header
export const DarkTheme: Story = {
  render: (args) => html`
    <style>
      .dark-header {
        --header-bg: #222;
        --header-text: #fff;
        --header-link: #ddd;
        --header-link-hover: #fff;
        --header-border: #444;
      }
    </style>
    <ui-header
      class="dark-header"
      style="--header-height: 80px;"
    >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <h1>РАЗРАБОТЧИК</h1>
      <ui-button
        type="light"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `,
  parameters: {
    backgrounds: { default: 'dark' }
  }
};