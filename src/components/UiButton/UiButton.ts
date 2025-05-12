import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './ui-button.css?inline';

@customElement('ui-button')
export class UiButton extends LitElement {
  static styles = css`${unsafeCSS(buttonStyles)}`;

  @property({ type: Boolean })
  primary = false;

  @property({ type: String, attribute: 'background-color' })
  backgroundColor?: string;

  @property({ type: String })
  size = 'medium';

  @property({ type: String })
  label = '';

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

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': UiButton;
  }
}