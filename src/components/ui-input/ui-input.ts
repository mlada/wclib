// @ts-nocheck
// @ts-ignore
/* eslint-disable */
import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-input.styles';

@customElement('ui-input')
export class UiInput extends LitElement {
  static styles : CSSResult = styles;

  @property({ type: String })
  accessor value: string = '';

  @property({ type: String })
  accessor label: string = '';

  @property({ type: String })
  accessor placeholder: string = '';

  @property({ type: String })
  accessor type: 'text' | 'password' | 'email' | 'number' = 'text';

  @property({ type: Boolean })
  accessor disabled: boolean = false;

  @property({ type: Boolean })
  accessor invalid: boolean = false;

  @property({ type: String, attribute: 'error-message' })
  accessor errorMessage: string = '';

  @property({ type: String })
  accessor hint: string = '';

  @property({ type: String, attribute: 'prefix-icon' })
  accessor prefixIcon: string = '';

  @property({ type: String, attribute: 'suffix-icon' })
  accessor suffixIcon: string = '';

  @property({ type: Boolean })
  accessor clearable: boolean = false;

  #handleChange(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
  }

  #clearValue() {
    this.value = '';
    this.dispatchEvent(new CustomEvent('change', { detail: '' }));
    this.shadowRoot?.querySelector('input')?.focus();
  }

  render() {
    return html`
      <div class="input-container ${this.disabled ? 'disabled' : ''} ${this.invalid ? 'invalid' : ''}">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        
        <div class="input-wrapper">
          ${this.prefixIcon ? html`<span class="prefix">${this.prefixIcon}</span>` : ''}
          
          <input
            type=${this.type}
            placeholder=${this.placeholder}
            .value=${this.value}
            ?disabled=${this.disabled}
            @input=${this.#handleChange}
          >
          
          ${this.suffixIcon ? html`<span class="suffix">${this.suffixIcon}</span>` : ''}
          
          ${this.clearable && this.value && !this.disabled
            ? html`<button class="clear-btn" @click=${this.#clearValue} type="button">×</button>`
            : ''}
        </div>
        
        ${this.hint && !this.invalid ? html`<div class="hint">${this.hint}</div>` : ''}
        ${this.invalid && this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
      </div>
    `;
  }
}