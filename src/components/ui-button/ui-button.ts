import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-button.styles';

@customElement('ui-button')
export class UiButton extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Boolean })
  accessor primary: boolean = false;  // Используем accessor (Lit 3.x) или...

  @property({ type: String })
  accessor size: string = 'medium';

  @property({ type: String })
  accessor label: string = '';

  render() {
    const mode : string = this.primary ? 'ui-button--primary' : 'ui-button--secondary';
    const classes : string = ['ui-button', `ui-button--${this.size}`, mode].join(' ');

    return html`
      <button
        type="button"
        class=${classes}
        @click=${(e: Event) => this.dispatchEvent(new CustomEvent('click', { detail: e }))}
      >
        ${this.label}
      </button>
    `;
  }
}