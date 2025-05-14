import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './ui-input.styles';

@customElement('ui-input')
export class UiInput extends LitElement {
  static styles = styles;

  @property({ type: String })
  accessor value = '';

  @property({ type: String })
  accessor label = '';

  @property({ type: String })
  accessor placeholder = '';

  @property({ type: String })
  accessor type: 'text' | 'password' | 'email' | 'number' = 'text';

  @property({ type: Boolean })
  accessor disabled = false;

  @property({ type: Boolean })
  accessor invalid = false;

  @property({ type: String, attribute: 'error-message' })
  accessor errorMessage = '';

  @property({ type: String })
  accessor hint = '';

  @property({ type: String, attribute: 'prefix-icon' })
  accessor prefixIcon = '';

  @property({ type: String, attribute: 'suffix-icon' })
  accessor suffixIcon = '';

  @property({ type: Boolean })
  accessor clearable = false;

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