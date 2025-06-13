import type { Meta, StoryObj } from '@storybook/web-components';
import { ButtonVariant, ElementSize } from '../../declaration';
type StoryButtonProps = {
    type?: ButtonVariant;
    size?: ElementSize;
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
declare const meta: Meta<StoryButtonProps>;
export default meta;
type Story = StoryObj<StoryButtonProps>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Light: Story;
export declare const Small: Story;
export declare const Large: Story;
