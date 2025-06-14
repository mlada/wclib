import { html } from "lit";
import { MenuElement } from "../../declaration";
import { UiModal } from "../components/ui-modal/ui-modal";
import { createRef, ref } from 'lit/directives/ref.js';

// Контент для разных тем
const themeContent = {
  green: {
    images: [
      'https://i.pinimg.com/736x/6d/45/d8/6d45d8e8d278547145ec0fc17fb111f7.jpg',
      'https://i.pinimg.com/originals/b7/3c/f2/b73cf208ebf2f343fc209e8b4e35a997.jpg',
      'https://avatars.mds.yandex.net/i?id=259f4996d92232397be1a85c6be187df_l-4438614-images-thumbs&n=13',
      'https://images.squarespace-cdn.com/content/v1/6340749ee514a116ad4f13a1/218e9cf6-dda9-458b-9bfb-99a95572b229/3501370-2.png'
    ],
    titles: [
      'Комплексное озеленение интерьера под ключ',
      'Ландшафтный дизайн и благоустройство',
      'Экологичные решения для вашего пространства',
      'Профессиональное озеленение помещений и территорий с использованием современных технологий',
    ],
    descriptions: [
      'Профессиональное озеленение помещений и территорий с использованием современных технологий',
      'Создаем гармоничные природные пространства с учетом ваших пожеланий',
      'Мы предлагаем профессиональное создание сайтов с адаптивным дизайном, SEO и высоким уровнем безопасности, используя современные технологии и фреймворки.',
      'Экологичный подход и индивидуальные решения для каждого проекта'
    ],
    services: [
      'Проектирование ландшафтного дизайна',
      'Озеленение интерьеров',
      'Экологический консалтинг'
    ],
    info: [
      '',
      'Профессиональное озеленение помещений и территорий с использованием современных технологий — это создание гармоничных природных пространств, где сочетаются эстетика, функциональность и экологичность. Мы применяем инновационные решения',
    'Мы применяем инновационные решения: автоматизированные системы полива, фитостены с интеллектуальным климат-контролем'
    ]
  },
  blue: {
    images: [
      'https://avatars.mds.yandex.net/get-altay/4341149/2a0000017bca70d1ca9108db93de0692a177/XXL_height',
      'https://pic.rutubelist.ru/video/2024-09-23/c9/c7/c9c7c2d5f62b7700002d08440cfe046f.jpg',
      'https://do.e1.ru/preview/do/c6a9e888eb88d3063dad4471090b54b3_1591265766_856_710.jpg',
      'https://avatars.mds.yandex.net/i?id=247f392dbfe508442561db3db3ad57c938a15c6c-5520851-images-thumbs&n=13',
    ],
    titles: [
      'Юридические услуги и консультации',
      'Полное правовое сопровождение бизнеса',
      'Защита ваших интересов в суде',
      'Полное сопровождение сделок'
    ],
    descriptions: [
      'Профессиональные юридические услуги с индивидуальным подходом',
      'Комплексное правовое сопровождение на всех этапах',
      '',
      'Надежная защита ваших прав и интересов'
    ],
    services: [
      'Юридические консультации',
      'Сопровождение сделок',
      'Судебная защита'
    ],
    info: [
      '',
      'Полное правовое сопровождение бизнеса — это комплекс юридических услуг, направленных на защиту интересов компании на всех этапах ее деятельности. Наши юристы обеспечивают грамотное оформление договоров, проверку контрагентов, сопровождение сделок, разрешение корпоративных споров, а также консультирование по вопросам налогообложения, трудового права и защиты интеллектуальной собственности.'
    ]
  },
  orange: {
    images: [
      'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL',
      'https://avatars.mds.yandex.net/get-ydo/1384592/2a0000016bd5372bb278fc6e9a770fd41253/diploma',
      'https://avatars.mds.yandex.net/i?id=266ec812e336c380aa24d79d6609b639_l-4120868-images-thumbs&n=13',
      'https://cdn-icons-png.freepik.com/256/2289/2289316.png'
    ],
    titles: [
      'Профессиональная разработка и запуск современных сайтов',
      'Создание digital-продуктов под ключ',
      'Услуги по дизайну и разработке сайтов',
      'Создание и запуск современных сайтов',
    ],
    descriptions: [
      'Мы создаём сайты с адаптивным дизайном, используя HTML, CSS, JavaScript и современные фреймворки',
      'Полный цикл разработки от проектирования до запуска',
      '',
      'Мы предлагаем профессиональное создание сайтов с адаптивным дизайном, SEO и высоким уровнем безопасности, используя современные технологии и фреймворки'
    ],
    info: [
      '',
      'Мы проектируем, разрабатываем и запускаем сайты, используя HTML, CSS, JavaScript и CMS. Уделяем внимание адаптивному дизайну, SEO и безопасности.'
    ],
    services: [
      'Разработка сайтов',
      'UI/UX дизайн',
      'Техническая поддержка'
    ]
  }
};

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

const Template = (args: { theme: string }) => {
  const content = themeContent[args.theme as keyof typeof themeContent];
  const modalRef = createRef<UiModal>();

  const openModal = () => {
    if (modalRef.value) {
      modalRef.value.open = true;
    }
  };

  return html`
  <style>
    :root {
      --theme-main-color: ${args.theme === "green" ? "rgb(39, 141, 85)" : 
                          args.theme === "blue" ? "rgb(25, 52, 90)" : "rgb(255, 85, 0)"};
      --theme-main-lighter-color: ${args.theme === "green" ? "rgb(27, 170, 91)" : 
                                  args.theme === "blue" ? "rgb(33, 72, 126)" : "rgb(255, 119, 82)"};
      --border-radius: ${args.theme === "green" ? "0px" : 
                       args.theme === "blue" ? "20px" : "8px"};
      --theme-text-color: ${args.theme === "green" ? "rgb(0, 30, 14)" : 
                           args.theme === "blue" ? "rgb(0, 16, 39)" : "rgb(51, 51, 51)"};
      --font-family: ${args.theme === "green" ? "'Courier New', Courier, monospace" : 
                      args.theme === "blue" ? "'Trebuchet MS', Helvetica, sans-serif" : 
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"};
    }

    /* Базовые стили */
    .main-container {
      overflow-x: hidden;
    }

    ui-header {
      --header-height: 60px;
    }

    /* Карточки */
    .cards-container {
      display: grid;
      gap: 1rem;
      padding: 0 1rem;
      margin: 2rem 0;
    }

    /* Блоки с отступами */
    .section-block {
      margin: 2rem 0;
      padding: 0 1rem;
    }

    /* Цветной блок */
    .colored-block {
      background: var(--theme-main-lighter-color);
      padding: 2rem 1rem;
      margin: 2rem 0;
    }

    /* Заголовки */
    h1, h2, h3 {
      padding: 0 1rem;
      margin: 1.5rem 0 1rem;
      text-align: center;
    }

    /* Футер */
    .custom-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
    }

    /* Десктоп версия */
    @media (min-width: 768px) {
      ui-header {
        --header-height: 80px;
      }

      .cards-container {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
        padding: 1.25rem;
        margin: 3rem 0;
      }

      .section-block {
        margin: 3rem 0;
        padding: 0 1.25rem;
      }

      .colored-block {
        padding: 3rem 1.25rem;
        margin: 3rem 0;
      }

      h1, h2, h3 {
        margin: 2rem 0 1.5rem;
      }

      .custom-content {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.5rem;
        gap: 2rem;
      }
    }

    /* Очень маленькие экраны */
    @media (max-width: 480px) {
      .cards-container {
        gap: 0.75rem;
      }

      .section-block,
      .colored-block {
        margin: 1.5rem 0;
      }

      h1, h2, h3 {
        margin: 1rem 0 0.75rem;
      }

      ui-button {
        --button-padding: 0.5rem 1rem;
      }
    }
  </style>

  <div class="main-container">
    <ui-header>
      <ui-menu type="horizontal" size="medium" .elements=${elements}></ui-menu>
      <ui-button
      @click=${openModal} 
        type="primary" 
        size="medium" 
        label=${args.theme === "green" ? "Консультация" : 
               args.theme === "blue" ? "Записаться" : 
               "Заявка"}
      ></ui-button>
    </ui-header>

    <ui-card
      title=${content.titles[0]}
      description=${content.descriptions[0]}
      size="large"
      image-url=${content.images[0]}
      image-alt="Главное изображение"
      ?hoverable="false"
    ></ui-card>

    <div class="section-block">
      <ui-card
        size="large"
        type="horizontal"
        title=${content.titles[1]}
        description=${content.descriptions[1]}
      >
        <div slot="content">
          <p>${content.info[1]}</p>
        </div>
      </ui-card>
    </div>

    <h1>${content.titles[2]}</h1>
    <h3>${content.info[2]}</h3>
    
    <div class="cards-container">
      ${content.services.map((service, index) => html`
        <ui-card
          size="small"
          title=${service}
          image-url=${content.images[index % content.images.length]}
          hoverable
        ></ui-card>
      `)}
    </div>

    <div class="colored-block">
      <ui-card
        size="large"
        color="light"
        title="${content.titles[3]}"
        description="${content.descriptions[3]}"
      >
        <div class="centered" slot="content">
          <ui-button
            type="light"
            size="large"
            label="Рассчитать стоимость"
            @click=${openModal}></ui-button>
        </div>
      </ui-card>
    </div>

    <h1>Преимущества компании</h1>
    <div class="cards-container">
      <ui-card
        size="xs"
        description="Преимущество 1. Расскажите, что отличает ваши услуги от услуг в других компаниях"
        image-url="${content.images[3]}"
      ></ui-card>

      <ui-card
        size="xs"
        description="Преимущество 2. Расскажите, чему вы уделяете больше всего внимания в работе с клиентами"
        image-url="${content.images[3]}"
      ></ui-card>

      <ui-card
        size="xs"
        description="Преимущество 3. Расскажите, в чем преимущество работы именно с вашей командой"
        image-url="${content.images[3]}"
      ></ui-card>
    </div>

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
   <ui-modal 
      title="Заказать консультацию"
      ${ref(modalRef)}
    >
      <form>
        <div style="display: grid; gap: 1rem; margin-right: 2rem;">
          <label>
            Ваше имя
            <input type="text" required style="width: 100%; padding: 0.5rem;">
          </label>
          <label>
            Email
            <input type="email" required style="width: 100%; padding: 0.5rem;">
          </label>
          <label>
            Сообщение
            <textarea style="width: 100%; padding: 0.5rem; min-height: 100px;"></textarea>
          </label>
        </div>
      </form>
      <div slot="footer">
        <ui-button 
          type="primary" 
          size="medium" 
          label="Отправить"
          @click=${() => modalRef.value?.close()}
        ></ui-button>
      </div>
    </ui-modal>
`;
}
export const Default = Template.bind({});