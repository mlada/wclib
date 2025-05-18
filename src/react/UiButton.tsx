import React, { forwardRef } from 'react';

interface UiButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        primary?: boolean;
        size?: 'small' | 'medium' | 'large';
        label?: string;
      };
    }
  }
}

export const ReactUiButton = forwardRef<HTMLElement, UiButtonProps>(
  ({ primary, size, label, children, ...props }, ref) => {
    return (
      <ui-button 
        ref={ref}
        {...props}
        primary={ primary }
        size={ size }
        label={ label }
      >
        {children}
      </ui-button>
    );
  }
);

ReactUiButton.displayName = 'UiButton';