import React, { forwardRef } from 'react';

interface UiButtonProps {
  disabled?: boolean;
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
        disabled?: boolean;
        label?: string;
      };
    }
  }
}

export const UiButton = forwardRef<HTMLElement, UiButtonProps>(
  ({ disabled, label, children, ...props }, ref) => {
    return (
      <ui-button 
        ref={ref}
        {...props}
        disabled={ disabled }
        label={ label }
      >
        {children}
      </ui-button>
    );
  }
);

UiButton.displayName = 'UiButton';