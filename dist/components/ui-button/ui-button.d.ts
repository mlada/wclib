import { LitElement, CSSResult } from 'lit';
export declare class UiButton extends LitElement {
    static styles: CSSResult;
    accessor primary: boolean;
    accessor size: string;
    accessor label: string;
    render(): import("lit-html").TemplateResult<1>;
}
