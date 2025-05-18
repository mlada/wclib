import { CSSResult } from "lit";

declare module "*.css" {
  const styles: CSSResult;
  export default styles;
}

declare namespace JSX {
  interface IntrinsicElements {
    "ui-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        primary?: boolean;
        size?: "small" | "medium" | "large";
        label?: string;
      },
      HTMLElement
    >;
    // Add similar declarations for other components
  }
}

declare interface UiButtonElement extends HTMLElement {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
  label: string;
}