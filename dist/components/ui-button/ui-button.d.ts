import { LitElement } from 'lit';
type ButtonSize = 'small' | 'medium' | 'large';
export declare class UiButton extends LitElement {
    static styles: import("lit").CSSResult;
    accessor primary: boolean;
    accessor size: ButtonSize;
    accessor label: string;
    render(): import("lit").TemplateResult<1>;
    private handleClick;
}
export {};
