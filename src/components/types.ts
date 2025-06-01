
export type ButtonVariant = "primary" | "secondary" | "light";

export type ElementSize = 'xs' | 'small' | 'medium' | 'large';

export type Orientation = 'vertical' | 'horizontal';

export type ColorTheme = 'light' | 'dark';

export type MenuElement<T = {}> = {
  id?: string;
  name: string;
  url: string;
} & T;