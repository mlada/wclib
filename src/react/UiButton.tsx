import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

interface UiButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button type variant */
  type?: 'primary' | 'light' | 'secondary';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button text content */
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
        type?: 'primary' | 'light' | 'secondary';
        size?: 'small' | 'medium' | 'large';
        label?: string;
      };
    }
  }
}

export const ReactUiButton = forwardRef<HTMLElement, UiButtonProps>(
  ({ type = 'primary', size = 'medium', label, children, ...props }, ref) => {
    return (
      <ui-button
        ref={ref}
        type={type}
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
  type: PropTypes.oneOf(['primary', 'light', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  children: PropTypes.any,
};

ReactUiButton.defaultProps = {
  type: 'primary',
  size: 'medium',
};