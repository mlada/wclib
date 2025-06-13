import React from 'react';
interface UiFooterProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ui-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const ReactUiFooter: React.ForwardRefExoticComponent<UiFooterProps & React.RefAttributes<HTMLElement>>;
export {};
