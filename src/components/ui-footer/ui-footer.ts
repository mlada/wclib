
import { LitElement, html, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./ui-footer.styles";

@customElement("ui-footer")
export class UiFooter extends LitElement {
  static styles: CSSResult = styles;

  render() {
    const currentYear = new Date().getFullYear();

    return html`
      <footer class="ui-footer">
        <div class="footer-content">
          <slot></slot>
        </div>
        <div class="copyright">
          <p>&copy; ${currentYear} Раннева МК. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}
