import { LitElement, html, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./ui-card.styles";

@customElement("ui-card")
export class UiCard extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: String })
  accessor header: string = "";

  @property({ type: String })
  accessor icon: string = "";

  @property({ type: String, attribute: "image-url" })
  accessor imageUrl: string = "";

  @property({ type: String, attribute: "image-alt" })
  accessor imageAlt: string = "";

  @property({ type: Boolean })
  accessor hoverable: boolean = false;

  render() {
    return html`
      <div class="ui-card ${this.hoverable ? "hoverable" : ""}">
        ${this.header || this.icon
          ? html` <div class="card-header">
              ${this.icon
                ? html`<span class="header-icon"
                    ><img src=${this.icon} alt=${this.header || "Card icon"}
                  /></span>`
                : ""}
              ${this.header ? html`<h3>${this.header}</h3>` : ""}
            </div>`
          : ""}
        ${this.imageUrl
          ? html`<div class="card-image">
              <img src=${this.imageUrl} alt=${this.imageAlt || "Card image"} />
            </div>`
          : ""}

        <div class="card-content">
          <slot></slot>
        </div>

        <div class="card-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }
}
