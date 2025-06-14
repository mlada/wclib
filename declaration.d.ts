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
 

declare type ButtonVariant = "primary" | "secondary" | "light";

declare type ElementSize = 'xs' | 'small' | 'medium' | 'large';

declare type Orientation = 'vertical' | 'horizontal';

declare type ColorTheme = 'light' | 'dark';

declare type MenuElement<T = {}> = {
  id?: string;
  name: string;
  url: string;
} & T;

import { UiModal } from '../components/ui-modal/ui-modal';

declare global {
  interface HTMLElementTagNameMap {
    'ui-modal': UiModal;
  }
}

export interface ModalOptions {
  title?: string;
  content?: string;
  buttons?: Array<{
    text: string;
    action: () => void;
  }>;
}