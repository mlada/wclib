import type { Meta, StoryObj } from '@storybook/web-components';
import { UiFooter } from '../components';
/**
 * A flexible footer component with multiple layout options and customization features.
 *
 * ### Angular Usage
 * ```typescript
 * import { UiFooterDirective } from 'your-library';
 *
 * @NgModule({
 *   declarations: [UiFooterDirective],
 * })
 * export class YourModule {}
 *
 * // In template:
 * <ui-footer>
 *   <div class="custom-content" slot="content">
 *     <!-- Your footer content here -->
 *     <a href="#" (click)="handleInternalClick($event)">Link</a>
 *   </div>
 * </ui-footer>
 *
 * // In component class:
 * handleInternalClick(event: CustomEvent) {
 *   console.log('External link clicked', event.detail);
 *   // Optionally prevent default and handle navigation programmatically
 * }
 *
 * ```
 *
 * ### React Usage
 * ```jsx
 * import { ReactUiFooter } from 'your-library';
 *
 * function App() {
 *
 *   return (
 *     <ReactUiFooter>
 *       <div className="custom-content" slot="content">
 *         <a href="#" onClick={(e) => {
 *           e.preventDefault();
 *           console.log('Internal link clicked');
 *         }}>
 *           Internal Link
 *         </a>
 *       </div>
 *     </ReactUiFooter>
 *   );
 * }
 * ```
 */
declare const meta: Meta<UiFooter>;
export default meta;
type Story = StoryObj<UiFooter>;
export declare const Basic: Story;
export declare const Minimal: Story;
export declare const WithSocialIcons: Story;
export declare const DarkTheme: Story;
export declare const WithLogo: Story;
