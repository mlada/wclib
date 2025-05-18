import "reflect-metadata"; // Добавьте в самый верх вашего главного файла
// 
import { UiButton } from "./ui-button/ui-button";
import { UiCard } from "./ui-card/ui-card";
import { UiFooter } from "./ui-footer/ui-footer";
import { UiHeader } from "./ui-header/ui-header";
import { UiInput } from "./ui-input/ui-input";

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
