// @ts-nocheck
// @ts-ignore
/* eslint-disable */
import React, { forwardRef } from 'react';

interface UiCardProps {
  header?: string;
  imageUrl?: string;
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
        imageUrl?: string;
        hoverable?: boolean;
      };
    }
  }
}

export const ReactUiCard = forwardRef<HTMLElement, UiCardProps>(
  ({ header, imageUrl, hoverable, children, ...props }, ref) => {
    return (
      <ui-card 
        ref={ref}
        {...props}
        header={ header }
        imageUrl={ imageUrl }
        hoverable={ hoverable }
      >
        {children}
      </ui-card>
    );
  }
);

ReactUiCard.displayName = 'UiCard';