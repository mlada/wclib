import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './ui-button.styles';

@customElement('ui-button')
export class UiButton extends LitElement {
  static styles = buttonStyles;

  @property({ type: Boolean })
  accessor primary = false;  // Используем accessor (Lit 3.x) или...

  @property({ type: String, attribute: 'background-color' })
  accessor backgroundColor: string | undefined;  // ...удаляем инициализацию здесь

  @property({ type: String })
  accessor size = 'medium';

  @property({ type: String })
  accessor label = '';

  render() {
    const mode = this.primary ? 'ui-button--primary' : 'ui-button--secondary';
    const classes = ['ui-button', `ui-button--${this.size}`, mode].join(' ');

    return html`
      <button
        type="button"
        class=${classes}
        style=${this.backgroundColor ? `background-color: ${this.backgroundColor}` : ''}
        @click=${(e: Event) => this.dispatchEvent(new CustomEvent('click', { detail: e }))}
      >
        ${this.label}
      </button>
    `;
  }
}