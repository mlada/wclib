import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { UiMenu } from '../components/ui-menu/ui-menu';

/** 
 * A flexible navigation menu component with vertical and horizontal layouts.
 * 
 * ### Angular Usage
 * ```typescript
 * import { UiMenuDirective } from 'your-library';
 * 
 * @NgModule({
 *   declarations: [UiMenuDirective],
 * })
 * export class YourModule {}
 * 
 * // In template:
 * <ui-menu
 *   [type]="'horizontal'"
 *   [size]="'medium'"
 *   [elements]="menuItems"
 * ></ui-menu>
 * 
 * // In component class:
 * menuItems = [
 *   { name: 'Home', url: '/', icon: 'home' },
 *   { name: 'About', url: '/about', icon: 'info' },
 *   { name: 'Contact', url: '/contact', icon: 'mail' }
 * ];
 * 
 * ```
 * 
 * ### React Usage
 * ```jsx
 * import { ReactUiMenu } from 'your-library';
 * 
 * function App() {
 *   const menuItems = [
 *     { name: 'Home', url: '/', icon: 'home' },
 *     { name: 'Products', url: '/products', icon: 'shopping' },
 *     { name: 'Contact', url: '/contact', icon: 'mail' }
 *   ];
 * 
 *  
 * 
 *   return (
 *     <ReactUiMenu
 *       type="vertical"
 *       size="large"
 *       elements={menuItems}
 *     />
 *   );
 * }
 * ```
 */
const meta: Meta<UiMenu> = {
  title: 'Components/UI Menu',
  component: 'ui-menu',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Menu orientation (vertical or horizontal)',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of menu items',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    elements: {
      control: 'object',
      description: 'Array of menu items with name and url',
      table: {
        defaultValue: { summary: '[]' },
      },
    }
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

// Default horizontal menu
export const Default: Story = {};

// Vertical menu variant
export const VerticalMenu: Story = {
  args: {
    type: 'vertical',
  },
  decorators: [
    (story) => html`
      <div style="display: flex; height: 300px;">
        ${story()}
      </div>
    `,
  ],
};

// Small size menu
export const SmallMenu: Story = {
  args: {
    size: 'small',
  },
};

// Large size menu
export const LargeMenu: Story = {
  args: {
    size: 'large',
  },
};

// Menu with custom items
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

// Menu with icons
export const WithIcons: Story = {
  args: {
    elements: [
      { name: 'Dashboard', url: '/',   },
      { name: 'Projects', url: '/projects',  },
      { name: 'Team', url: '/team',   },
      { name: 'Settings', url: '/settings',   },
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

// Dark theme menu
export const DarkTheme: Story = {
  args: {
    type: 'vertical',
  },
  decorators: [
    (story) => html`
      <style>
        .dark-menu {
          --menu-bg: #2d3748;
          --menu-text: #f7fafc;
          --menu-hover: #4a5568;
          --menu-active: #4299e1;
        }
      </style>
      <div class="dark-menu" style="display: flex; height: 300px; padding: 1rem; background: #1a202c;">
        ${story()}
      </div>
    `,
  ],
};