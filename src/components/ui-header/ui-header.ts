
import { LitElement, html, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ui-header.styles';

@customElement('ui-header')
export class UiHeader extends LitElement {
  static styles: CSSResult = styles;

  private scrollHandler = () => {
    const header = this.shadowRoot?.querySelector('.ui-header');
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.scrollHandler);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.scrollHandler);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <header class="ui-header">
        <div class="header-content">
          <slot></slot>
        </div>
      </header>
    `;
  }
}