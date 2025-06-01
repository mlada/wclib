import { LitElement, html, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from "./ui-card.styles";
import { ColorTheme, ElementSize, Orientation } from '../../../declaration';
  
@customElement('ui-card')
export class UiCard extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: String })
  accessor title: string = "";

  @property({ type: String })
  accessor description: string = "";

  @property({ type: String })
  accessor size: ElementSize = "large";

  @property({ type: String })
  accessor type: Orientation = "vertical";
  
  @property({ type: String })
  accessor color: ColorTheme = "dark";

  @property({ type: String, attribute: "image-url" })
  accessor imageUrl: string = "";

  @property({ type: String, attribute: "image-alt" })
  accessor imageAlt: string = "";

  @property({ type: Boolean })
  accessor hoverable: boolean = false;

  render() {
    return html`
      <div class="card card--${this.size} card--${this.type} ${this.hoverable ? 'hoverable' : ''}">            
        <div class="card-content card-content--${this.color}">
          ${this.title ? html`<p class="card-title">${this.title}</p>` : ''}
          ${this.description ? html`<p class="card-description">${this.description}</p>` : ''}

        </div>
        <slot name="content"></slot>
        ${this.imageUrl ? html`
          <img 
            class="card-image"
            src=${this.imageUrl} 
            alt=${this.imageAlt || this.title}
            loading="lazy"
          >
        ` : ''}
        <slot name="footer"></slot>
      </div>
    `;
  }
}