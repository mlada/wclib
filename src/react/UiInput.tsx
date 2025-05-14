import React, { forwardRef } from 'react';

interface UiInputProps {
  type?: &#x27;text&#x27; | &#x27;password&#x27; | &#x27;email&#x27; | &#x27;number&#x27;;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-input': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        type?: &#x27;text&#x27; | &#x27;password&#x27; | &#x27;email&#x27; | &#x27;number&#x27;;
        value?: string;
        placeholder?: string;
        disabled?: boolean;
      };
    }
  }
}

export const UiInput = forwardRef<HTMLElement, UiInputProps>(
  ({ type, value, placeholder, disabled, children, ...props }, ref) => {
    return (
      <ui-input 
        ref={ref}
        {...props}
        type={ type }
        value={ value }
        placeholder={ placeholder }
        disabled={ disabled }
      >
        {children}
      </ui-input>
    );
  }
);

UiInput.displayName = 'UiInput';