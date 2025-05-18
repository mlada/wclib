import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './ui-button.styles';

type ButtonSize = 'small' | 'medium' | 'large';

@customElement('ui-button')
export class UiButton extends LitElement {
  static styles = styles;

  @property({ type: Boolean })
  accessor primary = false;

  @property({ type: String })
  accessor size: ButtonSize = 'medium';

  @property({ type: String })
  accessor label = '';

  render() {
    const classes = {
      'ui-button': true,
      'ui-button--primary': this.primary,
      'ui-button--secondary': !this.primary,
      [`ui-button--${this.size}`]: true
    };

    return html`
      <button
        type="button"
        class=${classMap(classes)}
        @click=${this.handleClick}
        part="button"
      >
        ${this.label}
      </button>
    `;
  }

  private handleClick(e: Event) {
    this.dispatchEvent(new CustomEvent('click', {
      detail: e,
      bubbles: true,
      composed: true
    }));
  }
}