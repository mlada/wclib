import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './UiCard.css';

@customElement('ui-card')
export class UiCard extends LitElement {
  static styles = css`${styles}`;

  @property({ type: String }) header = '';
  @property({ type: String }) icon = '';
  @property({ type: String }) imageUrl = '';
  @property({ type: String }) imageAlt = '';
  @property({ type: Boolean }) hoverable = false;
  @property({ type: Boolean }) hasActions = false;

  render() {
    return html`
      <div class="ui-card ${this.hoverable ? 'hoverable' : ''}">
        ${this.header || this.icon
          ? html`
              <div class="card-header">
                ${this.icon
                  ? html`<span class="header-icon"><img src=${this.icon} alt=${this.header || 'Card icon'} /></span>`
                  : ''}
                ${this.header ? html`<h3>${this.header}</h3>` : ''}
              </div>`
          : ''}

        ${this.imageUrl
          ? html`<div class="card-image"><img src=${this.imageUrl} alt=${this.imageAlt || 'Card image'} /></div>`
          : ''}

        <div class="card-content">
          <slot></slot>
        </div>

        ${this.hasActions
          ? html`<div class="card-actions"><slot name="actions"></slot></div>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-card': UiCard;
  }
}