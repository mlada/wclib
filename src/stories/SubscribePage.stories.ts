import { html } from "lit";
import { UiButton, UiCard, UiFooter, UiHeader, UiInput } from "../index";
import "./subscribe-page.css";

// Пути к изображениям (Storybook будет искать их в public/assets)
const logoUrl = "./assets/logos/logo.png";
const socialIcons = {
  twitter: "./assets/icons/twitter.svg",
  facebook: "./assets/icons/facebook.png",
  instagram: "./assets/icons/instagram.jpg",
};

export default {
  title: "Pages/SubscribePage",
  component: "ui-button",
  parameters: {
    layout: "fullscreen",
    assets: [logoUrl, ...Object.values(socialIcons)],
  },
};

const Template = () => html`
  <ui-header>
    <div slot="logo-section" class="logo-section">
      <img src=${logoUrl} alt="Логотип" width="40" height="40" />
      <h1>ООО "Группа компаний"</h1>
    </div>
    <ui-button
      slot="auth-section"
      primary
      label="Подписаться"
      @click=${() => console.log("Подписаться clicked")}
    ></ui-button>
  </ui-header>

  <main class="subscribe-page">
    <!-- ... остальной контент ... -->
  </main>

  <ui-footer
    .socialLinks=${[
      { name: "Twitter", url: "#", icon: socialIcons.twitter },
      { name: "Facebook", url: "#", icon: socialIcons.facebook },
      { name: "Instagram", url: "#", icon: socialIcons.instagram },
    ]}
  >
    <div slot="logo-section" class="logo-section">
      <img src=${logoUrl} alt="Логотип" width="40" height="40" />
      <h3>ООО "Группа компаний"</h3>
    </div>
    <div slot="actions-section" class="footer-form">
      <!-- форма подписки -->
    </div>
  </ui-footer>
`;

export const Default = Template.bind({});
