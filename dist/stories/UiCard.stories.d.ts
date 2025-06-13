import type { Meta, StoryObj } from '@storybook/web-components';
import { UiCard } from '../components';
/**
 * A versatile card component with multiple layout options and customization features.
 *
 * ### Angular Usage
 * ```typescript
 * import { UiCardDirective } from 'your-library';
 *
 * @NgModule({
 *   declarations: [UiCardDirective],
 * })
 * export class YourModule {}
 *
 * // In template:
 * <ui-card
 *   [title]="'Card Title'"
 *   [description]="'Card description'"
 *   [size]="'medium'"
 *   [imageUrl]="'path/to/image.jpg'"
 *   [hoverable]="true"
 * >
 *   <div slot="content">Additional content</div>
 *   <div slot="footer">
 *     <button (click)="handleButtonClick($event)">Action</button>
 *   </div>
 * </ui-card>
 *
 *
 * handleButtonClick(event: Event) {
 *   event.stopPropagation();
 *   console.log('Button clicked', event);
 * }
 * ```
 *
 * ### React Usage
 * ```jsx
 * import { ReactUiCard } from 'your-library';
 *
 * function App() {
 *
 *   return (
 *     <ReactUiCard
 *       title="Card Title"
 *       description="Card description"
 *       size="medium"
 *       imageUrl="path/to/image.jpg"
 *       hoverable
 *     >
 *       <div slot="content">Additional content</div>
 *       <div slot="footer">
 *         <button onClick={(e) => {
 *           e.stopPropagation();
 *           console.log('Button clicked');
 *         }}>
 *           Action
 *         </button>
 *       </div>
 *     </ReactUiCard>
 *   );
 * }
 * ```
 */
declare const meta: Meta<UiCard>;
export default meta;
type Story = StoryObj<UiCard>;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const FullWidthCard: Story;
export declare const Horizontal: Story;
export declare const ThreeSmallCardsInRow: Story;
