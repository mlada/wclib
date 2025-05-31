
import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-menu.styles';


export type MenuSize = "small" | "medium" | "large";
export type MenuType = "vertical" | "horizontal";
export type MenuElement = {
  id?: string;
  name: string;
  url: string; 
}


@customElement('ui-menu')
export class UiMenu extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Array })
  accessor elements: MenuElement[] = [];

  @property({ type: String })
  accessor type: string = 'horizontal';

  @property({ type: String })
  accessor size: string = 'medium';

  render() {
    return html`
      <ul class="menu ${this.type} ${this.size}">
        ${this.elements.map(
          (element) => html`
            <li class="menu-item">
              <a href=${element.url}>${element.name}</a>
            </li>
          `
        )}
      </ul>
    `;
  }
}