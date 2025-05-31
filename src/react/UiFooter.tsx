import React, { forwardRef } from 'react';

interface UiFooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-footer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const ReactUiFooter = forwardRef<HTMLElement, UiFooterProps>(
  ({ children, ...props }, ref) => {

    return (
      <ui-footer
        ref={ref}
        {...props}>
        {children}
      </ui-footer>
    );
  }
);

ReactUiFooter.displayName = 'ReactUiFooter';