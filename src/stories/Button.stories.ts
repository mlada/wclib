import { html } from "lit";
import "../index";

export default {
  title: "Components/UI Button",
  component: "ui-button", // Важно: имя тега компонента
  argTypes: {
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" }, // Добавляем action для клика
  },
  render: (args: any) => html`
    <ui-button
      ?primary=${args.primary}
      size=${args.size}
      label=${args.label}
      background-color=${args.backgroundColor || ""}
      @click=${args.onClick}
    ></ui-button>
  `,
};

export const Primary = {
  args: {
    primary: true,
    label: "Primary Buttonsdklsfk",
    size: "large",
  },
};
