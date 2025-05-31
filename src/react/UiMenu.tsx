import React, { forwardRef } from 'react';
export type MenuElement = {
  id?: string;
  name: string;
  url: string; 
}
interface UiMenuProps {
  /** Menu orientation */
  type?: 'vertical' | 'horizontal';
  /** Size of menu items */
  size?: 'small' | 'medium' | 'large';
  /** Array of menu items */
  elements?: MenuElement[];
  /** Callback when menu item is clicked */
  onItemClick?: (event: CustomEvent) => void;
  /** React children */
  children?: React.ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-menu': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        type?: 'vertical' | 'horizontal';
        size?: 'small' | 'medium' | 'large';
        elements?: MenuElement[];
      };
    }
  }
}

export const ReactUiMenu = forwardRef<HTMLElement, UiMenuProps>(
  ({ type = 'horizontal', size = 'medium', elements = [], onItemClick, ...props }, ref) => {
   
    return (
      <ui-menu
        ref={ref}
        type={type}
        size={size}
        elements={elements}
        {...props}
      />
    );
  }
);

ReactUiMenu.displayName = 'ReactUiMenu';

ReactUiMenu.defaultProps = {
  type: 'horizontal',
  size: 'medium',
  elements: []
};