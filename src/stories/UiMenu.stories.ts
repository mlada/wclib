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
    <style>
      ui-menu::part(menu-container) {
        position: relative;
        display: inline-block;
      }
    </style>
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
// Mobile burger menu demo
export const MobileBurgerMenu: Story = {
  args: {
    type: 'horizontal',
  },
  decorators: [
    (story) => html`
      <style>
        .mobile-preview {
          position: relative;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 360px;
          height: 600px;
          resize: both;
          overflow: auto;
          background: white;
        }
        
        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #eee;
          position: relative;
        }
        
        .logo {
          font-weight: bold;
        }
        
        ui-menu::part(menu-container) {
          position: static;
        }
        
        @media (min-width: 768px) {
          .mobile-preview {
            width: 100%;
            height: auto;
            resize: none;
          }
        }
      </style>
      <div class="mobile-preview">
        <div class="mobile-header">
          ${story()}
        </div>
        <div style="padding: 1rem;">
          <p>Mobile content goes here. Resize the preview to see how the burger menu behaves.</p>
        </div>
      </div>
    `,
  ],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};