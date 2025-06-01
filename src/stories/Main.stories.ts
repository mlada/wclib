import { html } from "lit";
import { MenuElement } from "../../declaration";
 
const elements: MenuElement[] = [
  { name: "Услуги", url: "/" },
  { name: "Портфолио", url: "/about" },
  { name: "О компании", url: "/contact" },
];

const footerMenu1: MenuElement[] = [
  { name: "О нас", url: "/" },
  { name: "Карьера", url: "/about" },
  { name: "О Контакты", url: "/contact" },
];

const footerMenu2: MenuElement[] = [
  { name: "Документация", url: "/" },
  { name: "Блог", url: "/about" },
  { name: "Форум", url: "/contact" },
];

const logoUrl = "./assets/logos/logo.png";
const socialIcons = {
  twitter: "./assets/icons/twitter.svg",
  facebook: "./assets/icons/facebook.png",
  instagram: "./assets/icons/instagram.jpg",
};

export default {
  title: "Pages/Main",
  parameters: {
    layout: "fullscreen",
    assets: [logoUrl, ...Object.values(socialIcons)],
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["green", "blue", "orange"],
      description: "Цветовая тема страницы",
    },
  },
  args: {
    theme: "orange",
  },
};

const Template = (args: { theme: string }) => html`
  <style>
    :root {
      --theme-main-color: ${args.theme === "green"
        ? "rgb(39, 141, 85)"
        : args.theme === "blue"
        ? "rgb(25, 52, 90)"
        : "rgb(255, 85, 0)"};
      --theme-main-lighter-color: ${args.theme === "green"
        ? "rgb(27, 170, 91)"
        : args.theme === "blue"
        ? "rgb(33, 72, 126)"
        : "rgb(255, 119, 82)"};
      --border-radius: ${args.theme === "green"
        ? "0px"
        : args.theme === "blue"
        ? "20px"
        : "8px"};
      --theme-text-color: ${args.theme === "green"
        ? "rgb(0, 30, 14)"
        : args.theme === "blue"
        ? "rgb(0, 16, 39)"
        : "rgb(51, 51, 51)"};
      --font-family: ${args.theme === "green"
        ? "'Courier New', Courier, monospace"
        : args.theme === "blue"
        ? "'Trebuchet MS', Helvetica, sans-serif"
        : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"};
    }

    /* Стили для переключателя темы в Storybook */
    .theme-switcher {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: calc(var(--border-radius) / 2);
    }
  </style>
  <div class="main-container">
    <ui-header style="--header-height: 80px;">
      <ui-menu type="horizontal" size="medium" .elements=${elements}></ui-menu>
      <ui-button type="primary" size="medium" label="Заказать сайт"></ui-button>
    </ui-header>

    <ui-card
      title="Профессиональная разработка и запуск современных сайтов"
      description="Мы создаём сайты с адаптивным дизайном, используя HTML, CSS, JavaScript и современные фреймворки"
      size="large"
      image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
      image-alt="Разработка"
      ?hoverable="false"
    ></ui-card>

    <ui-card
      style="display: block;margin-top:180px;margin-bottom:180px"
      size="large"
      type="horizontal"
      title="Создание сайтов с использованием современных технологий"
      description="Профессионализм и качество в каждой детали"
    >
      <div slot="content">
        <p>
          Мы проектируем, разрабатываем и запускаем сайты, используя HTML, CSS,
          JavaScript и CMS. Уделяем внимание адаптивному дизайну, SEO и
          безопасности.
        </p>
      </div>
    </ui-card>

    <style>
      .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 24px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto 180px;
      }
    </style>
    <h1>Услуги по дизайну и разработке сайтов</h1>
    <h3>
      Создание эффективного онлайн-представительства с индивидуальным дизайном и
      современными технологиями
    </h3>
    <div class="cards-container">
      <ui-card
        size="small"
        title="Проектирование и разработка сайта"
        image-url="https://cdn-edge.kwork.ru/pics/t3/35/10209328-1603076936.jpg"
        hoverable
      ></ui-card>

      <ui-card
        size="small"
        title="Адаптивный дизайн и SEO-оптимизация"
        image-url="https://sun9-58.userapi.com/impg/d0Hk28ZIIP974TyIyPEGbac9rhS_4FFWOxAqFg/yh1NslumMA8.jpg?size=1066x843&quality=95&sign=4626764c97536cfc164b5650747ead99&type=album"
        hoverable
      ></ui-card>

      <ui-card
        size="small"
        title="Решения для интернет-магазинов"
        image-url="https://оопт-крым.рф/wp-content/uploads/2024/07/mlfstcfsyr4.jpg"
        hoverable
      ></ui-card>
    </div>
    <style>
      .colored-block {
        display: block;
        padding-top: 180px;
        padding-bottom: 180px;
        background-color: var(--theme-main-lighter-color);
        color: var(--theme-text-light-color) !important;
      }
      .centered {
        text-align: center !important;
      }
    </style>
    <div class="colored-block">
      <ui-card
        size="large"
        color="light"
        title="Создание и запуск современных сайтов"
        description="Мы предлагаем профессиональное создание сайтов с адаптивным дизайном, SEO и высоким уровнем безопасности, используя современные технологии и фреймворки."
      >
        <div class="centered" slot="content">
          <ui-button
            type="light"
            size="large"
            label="Рассчитать стоимость"
          ></ui-button>
        </div>
      </ui-card>
    </div>
    <h1 style="margin-top: 180px">Преимущества компании</h1>
    <div class="cards-container">
      <ui-card
        size="xs"
        description="Преимущество 1. Расскажите, что отличает ваши услуги от услуг в других компаниях"
        image-url="https://cdn-icons-png.freepik.com/256/2289/2289316.png"
      ></ui-card>

      <ui-card
        size="xs"
        description="Преимущество 2. Расскажите, чему вы уделяете больше всего внимания в работе с клиентами"
        image-url="https://cdn-icons-png.freepik.com/256/2289/2289316.png"
      ></ui-card>

      <ui-card
        size="xs"
        description="Преимущество 3. Расскажите, в чем преимущество работы именно с вашей командой"
        image-url="https://cdn-icons-png.freepik.com/256/2289/2289316.png"
      ></ui-card>
    </div>
    <style>
      .custom-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    </style>
    <ui-footer>
      <div class="custom-content" slot="">
        <section>
          <h3>Компания</h3>
          <ui-menu
            type="vertical"
            size="small"
            .elements=${footerMenu1}
          ></ui-menu>
        </section>
        <section>
          <h3>Ресурсы</h3>
          <ui-menu
            type="vertical"
            size="small"
            .elements=${footerMenu2}
          ></ui-menu>
        </section>
        <section>
          <h3>Контакты</h3>
          <p>г. Москва, ул. Примерная, 123</p>
          <p>+7 (123) 456-78-90</p>
          <p>info@example.com</p>
        </section>
      </div>
    </ui-footer>
  </div>
`;

export const Default = Template.bind({});
