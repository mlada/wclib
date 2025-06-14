import { UiButton, UiCard, UiFooter, UiHeader, UiMenu, UiModal } from "../src/components";
import type { Preview } from "@storybook/web-components";
import "../src/styles/main.css";
 
// Явная регистрация веб-компонентов
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

if (!customElements.get("ui-menu")) {
  customElements.define("ui-menu", UiMenu);
}

if (!customElements.get("ui-modal")) {
  customElements.define("ui-modal", UiModal);
}



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

export default preview;
