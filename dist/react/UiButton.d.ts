import React from 'react';
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
            'ui-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                type?: 'primary' | 'light' | 'secondary';
                size?: 'small' | 'medium' | 'large';
                label?: string;
            };
        }
    }
}
export declare const ReactUiButton: React.ForwardRefExoticComponent<UiButtonProps & React.RefAttributes<HTMLElement>>;
export {};
