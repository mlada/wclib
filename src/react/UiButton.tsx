import React, { forwardRef } from 'react';

interface UiButtonProps {
  primary?: boolean;
  background-color?: string;
  size?: &#x27;small&#x27; | &#x27;medium&#x27; | &#x27;large&#x27;;
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
        background-color?: string;
        size?: &#x27;small&#x27; | &#x27;medium&#x27; | &#x27;large&#x27;;
        label?: string;
      };
    }
  }
}

export const UiButton = forwardRef<HTMLElement, UiButtonProps>(
  ({ primary, background-color, size, label, children, ...props }, ref) => {
    return (
      <ui-button 
        ref={ref}
        {...props}
        primary={ primary }
        background-color={ background-color }
        size={ size }
        label={ label }
      >
        {children}
      </ui-button>
    );
  }
);

UiButton.displayName = 'UiButton';