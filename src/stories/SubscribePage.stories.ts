// @ts-nocheck
// @ts-ignore
/* eslint-disable */
import { html } from "lit";
import { UiButton, UiCard, UiFooter, UiHeader, UiInput } from "../components/index";
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
    <section class="hero-section">
      <h1>Подпишитесь на новости!</h1>
      <div class="subscribe-form">
        <ui-input
          type="email"
          placeholder="Ваш email"
          style="width: 300px;"
        ></ui-input>
        <ui-button
          primary
          label="Отправить"
          @click=${() => console.log("Отправить clicked")}
        ></ui-button>
      </div>
    </section>

    <section class="news-section">
      <h2>Последние новости</h2>
      <div class="news-grid">
        <ui-card header="Новость 1" hoverable>
          <p>Описание первой новости. Что-то интересное произошло.</p>
        </ui-card>
        <ui-card header="Новость 2" hoverable>
          <p>Вторая новость еще более увлекательная!</p>
        </ui-card>
        <ui-card header="Новость 3" hoverable>
          <p>Третья новость завершает трилогию.</p>
        </ui-card>
      </div>
    </section>
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
