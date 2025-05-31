import { LitElement, CSSResult } from "lit";
export type ButtonType = "primary" | "light" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export declare class UiButton extends LitElement {
    static styles: CSSResult;
    type: ButtonType;
    size: ButtonSize;
    label: string;
    render(): import("lit").TemplateResult<1>;
    private handleClick;
}
