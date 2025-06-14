import { LitElement, html, CSSResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './ui-menu.styles';
import { ElementSize, MenuElement, Orientation } from '../../../declaration';

@customElement('ui-menu')
export class UiMenu extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Array })
  accessor elements: MenuElement[] = [];

  @property({ type: String })
  accessor type: Orientation = 'horizontal';

  @property({ type: String })
  accessor size: ElementSize = 'medium';

  @state()
  private isMenuOpen = false;

  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return html`
      ${this.type === 'horizontal' 
        ? html`
            <button 
              class="burger-button" 
              @click=${this.toggleMenu}
              aria-label="${this.isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}"
            >
              <span class="burger-icon"></span>
            </button>
          `
        : ''
      }
      
      <ul class="menu ${this.type} ${this.size} ${this.isMenuOpen ? 'open' : ''}">
        ${this.elements.map(
          (element) => html`
            <li class="menu-item">
              <a href=${element.url} @click=${() => this.isMenuOpen = false}>
                ${element.name}
              </a>
            </li>
          `
        )}
      </ul>
    `;
  }
}