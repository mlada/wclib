import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './ui-modal.styles';

@customElement('ui-modal')
export class UiModal extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title = '';

  @query('.modal-container')
  modalContainer!: HTMLDivElement;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleKeyDown);
    super.disconnectedCallback();
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.open) {
      this.close();
    }
  };

  private handleOverlayClick(e: MouseEvent) {
    if (e.target === this) {
      this.close();
    }
  }

  close() {
    this.dispatchEvent(new CustomEvent('close'));
    this.open = false;
  }

  render() {
    return html`
      <div 
        class="modal-container"
        @click=${(e: Event) => e.stopPropagation()}
      >
        <div class="modal-header">
          <h2>${this.title}</h2>
          <button class="close-button" @click=${this.close}>&times;</button>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}