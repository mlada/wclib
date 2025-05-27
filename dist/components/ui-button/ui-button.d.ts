import { LitElement, CSSResult } from "lit";
type ButtonSize = "small" | "medium" | "large";
export declare class UiButton extends LitElement {
    static styles: CSSResult;
    primary: boolean;
    size: ButtonSize;
    label: string;
    render(): import("lit").TemplateResult<1>;
    private handleClick;
}
export {};
