// @ts-nocheck
// @ts-ignore
/* eslint-disable */
import React, { forwardRef } from 'react';

interface UiHeaderProps {
  children?: React.ReactNode;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-header': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
      };
    }
  }
}

export const ReactUiHeader = forwardRef<HTMLElement, UiHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <ui-header 
        ref={ref}
        {...props}
      >
        {children}
      </ui-header>
    );
  }
);

ReactUiHeader.displayName = 'UiHeader';