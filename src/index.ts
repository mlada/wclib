import { UiButton } from "./components/ui-button/ui-button";
import { UiCard } from "./components/ui-card/ui-card";
import { UiFooter } from "./components/ui-footer/ui-footer";
import { UiHeader } from "./components/ui-header/ui-header";
import { UiInput } from "./components/ui-input/ui-input";

export { UiButton, UiCard, UiFooter, UiHeader, UiInput };

// Register all components
if (!customElements.get("ui-button")) {
  customElements.define("ui-button", UiButton);
}
if (!customElements.get("ui-card")) {
  customElements.define("ui-card", UiCard);
}
if (!customElements.get("ui-footer")) {
  customElements.define("ui-footer", UiFooter);
}
if (!customElements.get("ui-header")) {
  customElements.define("ui-header", UiHeader);
}
if (!customElements.get("ui-input")) {
  customElements.define("ui-input", UiInput);
}
// if (!customElements.get('ui-page')) {
//   customElements.define('ui-page', UiPage);
// }
