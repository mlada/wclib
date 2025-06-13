import React from 'react';
interface UiInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ui-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                type?: 'text' | 'password' | 'email' | 'number';
                value?: string;
                placeholder?: string;
                disabled?: boolean;
            };
        }
    }
}
export declare const ReactUiInput: React.ForwardRefExoticComponent<Omit<UiInputProps, "ref"> & React.RefAttributes<HTMLElement>>;
export {};
