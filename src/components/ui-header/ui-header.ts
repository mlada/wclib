import { LitElement, html, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ui-header.styles';

@customElement('ui-header')
export class UiHeader extends LitElement {
  static styles: CSSResult = styles;

  private scrollHandler = () => {
    const header = this.shadowRoot?.querySelector('.ui-header');
    if (header) {
      const scrollContainer = this.findScrollContainer();
      const scrollY = scrollContainer?.scrollTop || window.scrollY;
      
      if (scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  private findScrollContainer(): HTMLElement | null {
    let el: HTMLElement | null = this;
    while (el) {
      if (el.scrollHeight > el.clientHeight && getComputedStyle(el).overflowY !== 'visible') {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  connectedCallback() {
    super.connectedCallback();
    const scrollContainer = this.findScrollContainer() || window;
    scrollContainer.addEventListener('scroll', this.scrollHandler);
    
    // Инициализируем состояние при загрузке
    setTimeout(() => this.scrollHandler(), 0);
  }

  disconnectedCallback() {
    const scrollContainer = this.findScrollContainer() || window;
    scrollContainer.removeEventListener('scroll', this.scrollHandler);
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