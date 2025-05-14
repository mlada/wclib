import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-header.styles';

@customElement('ui-header')
export class UiHeader extends LitElement {
  static styles = styles;

  render() {
    return html`
       <header class="ui-header">
      <div class="logo-section">
        <slot name="logo-section"></slot>
      </div>
      <div class="auth-section">
        <slot name="auth-section"></slot>
      </div>
    </header>
    `;
  }
}