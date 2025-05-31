import { LitElement, html, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./ui-button.styles";

export type ButtonType = "primary" | "light" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

@customElement("ui-button")
export class UiButton extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: String })
  type: ButtonType = "primary";

  @property({ type: String })
  size: ButtonSize = "medium";

  @property({ type: String })
  label = "";

  render() {
    const classes = {
      "ui-button": true,  // Базовый класс всегда добавляется
      ...(this.type && { [`ui-button--${this.type}`]: true }),   
      ...(this.size && { [`ui-button--${this.size}`]: true }),   
    };

    return html`
      <button
        type="button"
        class=${classMap(classes)}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }

  private handleClick(e: Event) {
    this.dispatchEvent(
      new CustomEvent("click", {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }
}
