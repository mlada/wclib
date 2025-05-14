import React, { forwardRef } from 'react';

interface UiFooterProps {
  socialLinks?: Array<{name: string, url: string, icon: string}>;
  children?: React.ReactNode;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-footer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        socialLinks?: Array<{name: string, url: string, icon: string}>;
      };
    }
  }
}

export const UiFooter = forwardRef<HTMLElement, UiFooterProps>(
  ({ socialLinks, children, ...props }, ref) => {
    return (
      <ui-footer 
        ref={ref}
        {...props}
        socialLinks={ socialLinks }
      >
        {children}
      </ui-footer>
    );
  }
);

UiFooter.displayName = 'UiFooter';