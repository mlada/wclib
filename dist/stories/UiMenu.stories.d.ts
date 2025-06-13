import type { Meta, StoryObj } from '@storybook/web-components';
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
declare const meta: Meta<UiMenu>;
export default meta;
type Story = StoryObj<UiMenu>;
export declare const Default: Story;
export declare const VerticalMenu: Story;
export declare const SmallMenu: Story;
export declare const LargeMenu: Story;
export declare const CustomItems: Story;
export declare const WithIcons: Story;
export declare const DarkTheme: Story;
