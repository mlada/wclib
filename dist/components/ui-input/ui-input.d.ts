import { LitElement, CSSResult } from 'lit';
export declare class UiInput extends LitElement {
    #private;
    static styles: CSSResult;
    accessor value: string;
    accessor label: string;
    accessor placeholder: string;
    accessor type: 'text' | 'password' | 'email' | 'number';
    accessor disabled: boolean;
    accessor invalid: boolean;
    accessor errorMessage: string;
    accessor hint: string;
    accessor prefixIcon: string;
    accessor suffixIcon: string;
    accessor clearable: boolean;
    render(): import("lit").TemplateResult<1>;
}
