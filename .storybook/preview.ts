import { UiButton, UiCard, UiFooter, UiHeader } from "../src/components";
import type { Preview } from "@storybook/web-components";
import "../src/styles/theme.css";

// Явная регистрация веб-компонентов
if (!customElements.get("ui-button")) {
  customElements.define("ui-button", UiButton);
}

if (!customElements.get("ui-card")) {
  customElements.define("ui-card", UiCard);
}
if (!customElements.get("ui-header")) {
  customElements.define("ui-header", UiHeader);
}
if (!customElements.get("ui-footer")) {
  customElements.define("ui-footer", UiFooter);
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
