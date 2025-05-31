import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ButtonSize, ButtonType, UiButton } from '../components/ui-button/ui-button';

// 1. Define component props type for Storybook
type StoryButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  label?: string;
  onClick?: (event: Event) => void;
};

/** 
 * ### Angular Usage
 * ```typescript
 * import { UiButtonDirective } from 'your-library';
 * 
 * @NgModule({
 *   declarations: [UiButtonDirective],
 * })
 * export class YourModule {}
 * 
 * // In template:
 * <ui-button 
 *   [type]="'primary'" 
 *   size="medium" 
 *   label="Click me"
 *   (click)="handleClick($event)"
 * ></ui-button>
 * 
 * // In component:
 * handleClick(event: Event) {
 *   console.log('Button clicked', event);
 * }
 * ```
 * 
 * ### React Usage
 * ```jsx
 * import { ReactUiButton } from 'your-library';
 * 
 * function App() {
 *   return (
 *     <ReactUiButton 
 *       primary 
 *       size="large" 
 *       label="Submit" 
 *       onClick={() => console.log('Clicked')}
 *     />
 *   );
 * }
 * ```
 */
const meta: Meta<StoryButtonProps> = {
  title: 'Components/UI Button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'light', 'secondary'],
      description: 'Button type variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
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
      description: 'Click event handler',
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
        border-radius: var(--border-radius);
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