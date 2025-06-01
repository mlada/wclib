import { LitElement, CSSResult } from "lit";
import { ButtonVariant, ElementSize } from "../../../declaration";
export declare class UiButton extends LitElement {
    static styles: CSSResult;
    type: ButtonVariant;
    size: ElementSize;
    label: string;
    render(): import("lit").TemplateResult<1>;
    private handleClick;
}
