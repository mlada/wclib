
import { LitElement, html, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-menu.styles';
import { ElementSize, Orientation, MenuElement } from '../types';



@customElement('ui-menu')
export class UiMenu extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Array })
  accessor elements: MenuElement[] = [];

  @property({ type: String })
  accessor type: Orientation = 'horizontal';

  @property({ type: String })
  accessor size: ElementSize = 'medium';

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