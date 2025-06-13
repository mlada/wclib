"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[456],{"./src/stories/Main.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const themeContent={green:{images:["https://i.pinimg.com/736x/6d/45/d8/6d45d8e8d278547145ec0fc17fb111f7.jpg","https://i.pinimg.com/originals/b7/3c/f2/b73cf208ebf2f343fc209e8b4e35a997.jpg","https://avatars.mds.yandex.net/i?id=259f4996d92232397be1a85c6be187df_l-4438614-images-thumbs&n=13","https://images.squarespace-cdn.com/content/v1/6340749ee514a116ad4f13a1/218e9cf6-dda9-458b-9bfb-99a95572b229/3501370-2.png"],titles:["Комплексное озеленение интерьера под ключ","Ландшафтный дизайн и благоустройство","Экологичные решения для вашего пространства","Профессиональное озеленение помещений и территорий с использованием современных технологий"],descriptions:["Профессиональное озеленение помещений и территорий с использованием современных технологий","Создаем гармоничные природные пространства с учетом ваших пожеланий","Мы предлагаем профессиональное создание сайтов с адаптивным дизайном, SEO и высоким уровнем безопасности, используя современные технологии и фреймворки.","Экологичный подход и индивидуальные решения для каждого проекта"],services:["Проектирование ландшафтного дизайна","Озеленение интерьеров","Экологический консалтинг"],info:["","Профессиональное озеленение помещений и территорий с использованием современных технологий — это создание гармоничных природных пространств, где сочетаются эстетика, функциональность и экологичность. Мы применяем инновационные решения","Мы применяем инновационные решения: автоматизированные системы полива, фитостены с интеллектуальным климат-контролем"]},blue:{images:["https://avatars.mds.yandex.net/get-altay/4341149/2a0000017bca70d1ca9108db93de0692a177/XXL_height","https://pic.rutubelist.ru/video/2024-09-23/c9/c7/c9c7c2d5f62b7700002d08440cfe046f.jpg","https://do.e1.ru/preview/do/c6a9e888eb88d3063dad4471090b54b3_1591265766_856_710.jpg","https://avatars.mds.yandex.net/i?id=247f392dbfe508442561db3db3ad57c938a15c6c-5520851-images-thumbs&n=13"],titles:["Юридические услуги и консультации","Полное правовое сопровождение бизнеса","Защита ваших интересов в суде","Полное сопровождение сделок"],descriptions:["Профессиональные юридические услуги с индивидуальным подходом","Комплексное правовое сопровождение на всех этапах","","Надежная защита ваших прав и интересов"],services:["Юридические консультации","Сопровождение сделок","Судебная защита"],info:["","Полное правовое сопровождение бизнеса — это комплекс юридических услуг, направленных на защиту интересов компании на всех этапах ее деятельности. Наши юристы обеспечивают грамотное оформление договоров, проверку контрагентов, сопровождение сделок, разрешение корпоративных споров, а также консультирование по вопросам налогообложения, трудового права и защиты интеллектуальной собственности."]},orange:{images:["https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL","https://avatars.mds.yandex.net/get-ydo/1384592/2a0000016bd5372bb278fc6e9a770fd41253/diploma","https://avatars.mds.yandex.net/i?id=266ec812e336c380aa24d79d6609b639_l-4120868-images-thumbs&n=13","https://cdn-icons-png.freepik.com/256/2289/2289316.png"],titles:["Профессиональная разработка и запуск современных сайтов","Создание digital-продуктов под ключ","Услуги по дизайну и разработке сайтов","Создание и запуск современных сайтов"],descriptions:["Мы создаём сайты с адаптивным дизайном, используя HTML, CSS, JavaScript и современные фреймворки","Полный цикл разработки от проектирования до запуска","","Мы предлагаем профессиональное создание сайтов с адаптивным дизайном, SEO и высоким уровнем безопасности, используя современные технологии и фреймворки"],info:["","Мы проектируем, разрабатываем и запускаем сайты, используя HTML, CSS, JavaScript и CMS. Уделяем внимание адаптивному дизайну, SEO и безопасности."],services:["Разработка сайтов","UI/UX дизайн","Техническая поддержка"]}},elements=[{name:"Услуги",url:"/"},{name:"Портфолио",url:"/about"},{name:"О компании",url:"/contact"}],footerMenu1=[{name:"О нас",url:"/"},{name:"Карьера",url:"/about"},{name:"О Контакты",url:"/contact"}],footerMenu2=[{name:"Документация",url:"/"},{name:"Блог",url:"/about"},{name:"Форум",url:"/contact"}],__WEBPACK_DEFAULT_EXPORT__={title:"Pages/Main",parameters:{layout:"fullscreen",assets:["./assets/logos/logo.png",...Object.values({twitter:"./assets/icons/twitter.svg",facebook:"./assets/icons/facebook.png",instagram:"./assets/icons/instagram.jpg"})]},argTypes:{theme:{control:"select",options:["green","blue","orange"],description:"Цветовая тема страницы"}},args:{theme:"orange"}},Default=(args=>{const content=themeContent[args.theme];return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
  <style>
    :root {
      --theme-main-color: ${"green"===args.theme?"rgb(39, 141, 85)":"blue"===args.theme?"rgb(25, 52, 90)":"rgb(255, 85, 0)"};
      --theme-main-lighter-color: ${"green"===args.theme?"rgb(27, 170, 91)":"blue"===args.theme?"rgb(33, 72, 126)":"rgb(255, 119, 82)"};
      --border-radius: ${"green"===args.theme?"0px":"blue"===args.theme?"20px":"8px"};
      --theme-text-color: ${"green"===args.theme?"rgb(0, 30, 14)":"blue"===args.theme?"rgb(0, 16, 39)":"rgb(51, 51, 51)"};
      --font-family: ${"green"===args.theme?"'Courier New', Courier, monospace":"blue"===args.theme?"'Trebuchet MS', Helvetica, sans-serif":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"};
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
      <ui-button type="primary" size="medium" label=${"green"===args.theme?"Заказать консультацию":"blue"===args.theme?"Записаться на прием":"Оставить заявку"}>></ui-button>
    </ui-header>

    <ui-card
      title=${content.titles[0]}
        description=${content.descriptions[0]}
      size="large"
       image-url=${content.images[0]}
        image-alt="Главное изображение"
      ?hoverable="false"
    ></ui-card>

    <ui-card
      style="display: block;margin-top:180px;margin-bottom:180px"
      size="large"
      type="horizontal"
      title=${content.titles[1]}
      description=${content.descriptions[1]}
    >
      <div slot="content">
        <p>
        ${content.info[1]}
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
    <h1>${content.titles[2]}</h1>
    <h3>${content.info[2]}</h3>
    <div class="cards-container">
       ${content.services.map(((service,index)=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
          <ui-card
            size="small"
            title=${service}
            image-url=${content.images[index%content.images.length]}
            hoverable
          ></ui-card>
        `))}
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
        title="${content.titles[3]}"
        description="${content.descriptions[3]}"
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
`}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: {\n  theme: string;\n}) => {\n  const content = themeContent[args.theme as keyof typeof themeContent];\n  return html`\n  <style>\n    :root {\n      --theme-main-color: ${args.theme === "green" ? "rgb(39, 141, 85)" : args.theme === "blue" ? "rgb(25, 52, 90)" : "rgb(255, 85, 0)"};\n      --theme-main-lighter-color: ${args.theme === "green" ? "rgb(27, 170, 91)" : args.theme === "blue" ? "rgb(33, 72, 126)" : "rgb(255, 119, 82)"};\n      --border-radius: ${args.theme === "green" ? "0px" : args.theme === "blue" ? "20px" : "8px"};\n      --theme-text-color: ${args.theme === "green" ? "rgb(0, 30, 14)" : args.theme === "blue" ? "rgb(0, 16, 39)" : "rgb(51, 51, 51)"};\n      --font-family: ${args.theme === "green" ? "\'Courier New\', Courier, monospace" : args.theme === "blue" ? "\'Trebuchet MS\', Helvetica, sans-serif" : "-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif"};\n    }\n\n    /* Стили для переключателя темы в Storybook */\n    .theme-switcher {\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      z-index: 1000;\n      padding: 8px 12px;\n      background: rgba(0, 0, 0, 0.1);\n      border-radius: calc(var(--border-radius) / 2);\n    }\n  </style>\n  <div class="main-container">\n    <ui-header style="--header-height: 80px;">\n      <ui-menu type="horizontal" size="medium" .elements=${elements}></ui-menu>\n      <ui-button type="primary" size="medium" label=${args.theme === "green" ? "Заказать консультацию" : args.theme === "blue" ? "Записаться на прием" : "Оставить заявку"}>></ui-button>\n    </ui-header>\n\n    <ui-card\n      title=${content.titles[0]}\n        description=${content.descriptions[0]}\n      size="large"\n       image-url=${content.images[0]}\n        image-alt="Главное изображение"\n      ?hoverable="false"\n    ></ui-card>\n\n    <ui-card\n      style="display: block;margin-top:180px;margin-bottom:180px"\n      size="large"\n      type="horizontal"\n      title=${content.titles[1]}\n      description=${content.descriptions[1]}\n    >\n      <div slot="content">\n        <p>\n        ${content.info[1]}\n        </p>\n      </div>\n    </ui-card>\n\n    <style>\n      .cards-container {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n        gap: 24px;\n        padding: 20px;\n        max-width: 1200px;\n        margin: 0 auto 180px;\n      }\n    </style>\n    <h1>${content.titles[2]}</h1>\n    <h3>${content.info[2]}</h3>\n    <div class="cards-container">\n       ${content.services.map((service, index) => html`\n          <ui-card\n            size="small"\n            title=${service}\n            image-url=${content.images[index % content.images.length]}\n            hoverable\n          ></ui-card>\n        `)}\n    </div>\n    <style>\n      .colored-block {\n        display: block;\n        padding-top: 180px;\n        padding-bottom: 180px;\n        background-color: var(--theme-main-lighter-color);\n        color: var(--theme-text-light-color) !important;\n      }\n      .centered {\n        text-align: center !important;\n      }\n    </style>\n    <div class="colored-block">\n      <ui-card\n        size="large"\n        color="light"\n        title="${content.titles[3]}"\n        description="${content.descriptions[3]}"\n      >\n        <div class="centered" slot="content">\n          <ui-button\n            type="light"\n            size="large"\n            label="Рассчитать стоимость"\n          ></ui-button>\n        </div>\n      </ui-card>\n    </div>\n    <h1 style="margin-top: 180px">Преимущества компании</h1>\n    <div class="cards-container">\n      <ui-card\n        size="xs"\n        description="Преимущество 1. Расскажите, что отличает ваши услуги от услуг в других компаниях"\n        image-url="${content.images[3]}"\n      ></ui-card>\n\n      <ui-card\n        size="xs"\n        description="Преимущество 2. Расскажите, чему вы уделяете больше всего внимания в работе с клиентами"\n        image-url="${content.images[3]}"\n      ></ui-card>\n\n      <ui-card\n        size="xs"\n        description="Преимущество 3. Расскажите, в чем преимущество работы именно с вашей командой"\n        image-url="${content.images[3]}"\n      ></ui-card>\n    </div>\n    <style>\n      .custom-content {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n    </style>\n    <ui-footer>\n      <div class="custom-content" slot="">\n        <section>\n          <h3>Компания</h3>\n          <ui-menu\n            type="vertical"\n            size="small"\n            .elements=${footerMenu1}\n          ></ui-menu>\n        </section>\n        <section>\n          <h3>Ресурсы</h3>\n          <ui-menu\n            type="vertical"\n            size="small"\n            .elements=${footerMenu2}\n          ></ui-menu>\n        </section>\n        <section>\n          <h3>Контакты</h3>\n          <p>г. Москва, ул. Примерная, 123</p>\n          <p>+7 (123) 456-78-90</p>\n          <p>info@example.com</p>\n        </section>\n      </div>\n    </ui-footer>\n  </div>\n`;\n}',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Main-stories.7dd77c4e.iframe.bundle.js.map