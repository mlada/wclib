import React from 'react';
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
            'ui-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
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
export declare const ReactUiCard: React.ForwardRefExoticComponent<UiCardProps & React.RefAttributes<HTMLElement>>;
export {};
