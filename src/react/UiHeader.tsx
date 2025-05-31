import React, { forwardRef } from 'react';

interface UiHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-header': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export const ReactUiHeader = forwardRef<HTMLElement, UiHeaderProps>(
  ({  children, ...props }, ref) => {
    
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

ReactUiHeader.displayName = 'ReactUiHeader';

