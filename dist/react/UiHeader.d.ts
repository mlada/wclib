import React from 'react';
interface UiHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ui-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const ReactUiHeader: React.ForwardRefExoticComponent<UiHeaderProps & React.RefAttributes<HTMLElement>>;
export {};
