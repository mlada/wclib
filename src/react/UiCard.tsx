import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

interface UiCardProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  imageUrl?: string;
  imageAlt?: string;
  hoverable?: boolean;
  type?: 'vertical' | 'horizontal';
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        title?: string;
        description?: string;
        size?: 'small' | 'medium' | 'large';
        imageUrl?: string;
        imageAlt?: string;
        hoverable?: boolean;
        type?: 'vertical' | 'horizontal';
      };
    }
  }
}

export const ReactUiCard = forwardRef<HTMLElement, UiCardProps>(
  ({ title, description, size, imageUrl, imageAlt, hoverable, type, onClick, children, ...props }, ref) => {
    return (
      <ui-card
        ref={ref}
        title={title}
        description={description}
        size={size}
        image-url={imageUrl}
        image-alt={imageAlt}
        hoverable={hoverable}
        type={type}
        onClick={onClick}
        {...props}
      >
        {children}
      </ui-card>
    );
  }
);

ReactUiCard.displayName = 'ReactUiCard';

ReactUiCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  hoverable: PropTypes.bool,
  type: PropTypes.oneOf(['vertical', 'horizontal']),
  onClick: PropTypes.func,
  children: PropTypes.any,
};

ReactUiCard.defaultProps = {
  size: 'medium',
  hoverable: false,
  type: 'vertical',
};