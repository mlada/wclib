import { LitElement } from 'lit';
export declare class UiButton extends LitElement {
    static styles: import("lit").CSSResult;
    accessor primary: boolean;
    accessor backgroundColor: string | undefined;
    accessor size: string;
    accessor label: string;
    render(): import("lit-html").TemplateResult<1>;
}
