import { LitElement, html, css, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./ui-button.styles";

type ButtonSize = "small" | "medium" | "large";

@customElement("ui-button")
export class UiButton extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Boolean })
  primary: boolean = false;

  @property({ type: String })
  size: ButtonSize = "medium";

  @property({ type: String })
  label = "";

  render() {
    const classes = {
      "ui-button": true,
      "ui-button--primary": this.primary,
      "ui-button--secondary": !this.primary,
      [`ui-button--${this.size}`]: true,
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
