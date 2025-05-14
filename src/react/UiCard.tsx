import React, { forwardRef } from 'react';

interface UiCardProps {
  header?: string;
  image-url?: string;
  hoverable?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        header?: string;
        image-url?: string;
        hoverable?: boolean;
      };
    }
  }
}

export const UiCard = forwardRef<HTMLElement, UiCardProps>(
  ({ header, image-url, hoverable, children, ...props }, ref) => {
    return (
      <ui-card 
        ref={ref}
        {...props}
        header={ header }
        image-url={ image-url }
        hoverable={ hoverable }
      >
        {children}
      </ui-card>
    );
  }
);

UiCard.displayName = 'UiCard';