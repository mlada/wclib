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
