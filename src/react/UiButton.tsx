import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';


interface UiButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether the button should use primary styling */
  primary?: boolean;
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** The button label text */
  label?: string;
  /** React children */
  children?: React.ReactNode;
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
        primary={primary}
        size={size}
        label={label}
        {...props}
      >
        {children}
      </ui-button>
    );
  }
);

ReactUiButton.displayName = 'ReactUiButton';


ReactUiButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
}; 