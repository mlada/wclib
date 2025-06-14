"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[128],{"./src/stories/UiFooter.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicColumns:()=>BasicColumns,BrandFooter:()=>BrandFooter,DarkWithCTA:()=>DarkWithCTA,Minimal:()=>Minimal,SitemapFooter:()=>SitemapFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI Footer",component:"ui-footer",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:'A flexible footer component with multiple layout options and customization features.\r\n\r\n### Angular Usage\r\n```typescript\r\nimport { UiFooterDirective } from \'your-library\';\r\n\r\n@NgModule({\r\n  declarations: [UiFooterDirective],\r\n})\r\nexport class YourModule {}\r\n\r\n// In template:\r\n<ui-footer>\r\n  <div class="custom-content" slot="content">\r\n    \x3c!-- Your footer content here --\x3e\r\n    <a href="#" (click)="handleInternalClick($event)">Link</a>\r\n  </div>\r\n</ui-footer>\r\n\r\n// In component class:\r\nhandleInternalClick(event: CustomEvent) {\r\n  console.log(\'External link clicked\', event.detail);\r\n  // Optionally prevent default and handle navigation programmatically\r\n}\r\n\r\n```\r\n\r\n### React Usage\r\n```jsx\r\nimport { ReactUiFooter } from \'your-library\';\r\n\r\nfunction App() {\r\n\r\n  return (\r\n    <ReactUiFooter>\r\n      <div className="custom-content" slot="content">\r\n        <a href="#" onClick={(e) => {\r\n          e.preventDefault();\r\n          console.log(\'Internal link clicked\');\r\n        }}>\r\n          Internal Link\r\n        </a>\r\n      </div>\r\n    </ReactUiFooter>\r\n  );\r\n}\r\n```'}}}},BasicColumns={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem 0;
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          padding: 2rem 1rem;
          gap: 1.5rem;
        }
        
        .footer-section {
          text-align: center;
        }
      }
    </style>
    
    <ui-footer>
      <div class="footer-grid" slot="">
        <div class="footer-section">
          <h4>Компания</h4>
          <div class="footer-links">
            <a href="/about">О нас</a>
            <a href="/careers">Карьера</a>
            <a href="/news">Новости</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Продукты</h4>
          <div class="footer-links">
            <a href="/features">Возможности</a>
            <a href="/pricing">Цены</a>
            <a href="/integrations">Интеграции</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Поддержка</h4>
          <div class="footer-links">
            <a href="/help">Центр помощи</a>
            <a href="/contact">Контакты</a>
            <a href="/status">Статус системы</a>
          </div>
        </div>
      </div>
    </ui-footer>
  `},Minimal={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .minimal-footer {
        text-align: center;
        padding: 1.5rem 1rem;
        font-size: 0.875rem;
        color: #666;
      }
    </style>
    
    <ui-footer>
      
    </ui-footer>
  `},BrandFooter={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .brand-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 1rem 0rem;
        text-align: center;
      }
      
      .logo {
        width: 150px;
        height: auto;
      }
      
      .social-links {
        display: flex;
        gap: 1.5rem;
      }
      
      .legal-links {
        display: flex;
        gap: 1rem;
        font-size: 0.875rem;
      }
      
      @media (max-width: 480px) {
        .legal-links {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    </style>
    
    <ui-footer>
      <div class="brand-footer" slot="">
        <img src="https://cdn.culture.ru/images/7ecb6c98-8ad0-5621-bced-2450858713ca" alt="Логотип компании" class="logo">
        
        <div class="social-links">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
        
        <div class="legal-links">
          <a href="/privacy">Конфиденциальность</a>
          <a href="/terms">Условия</a>
          <a href="/cookies">Cookies</a>
        </div>
        
      </div>
    </ui-footer>
  `},DarkWithCTA={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .dark-footer {
        --bg-color: #1a1a1a;
        --text-color: #fff;
        --link-color: #ccc;
        --link-hover: #fff;
        --cta-bg: #0066ff;
      }
      
      ui-footer::part(footer) {
        background: var(--bg-color);
        color: var(--text-color);
      }
      
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      
      .cta-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      
      .cta-button {
        background: var(--cta-bg);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        display: inline-block;
        width: fit-content;
      }
      
      .links-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      .footer-links {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
      }
        
      @media (max-width: 768px) {
        .footer-content {
          grid-template-columns: 1fr;
        }
        
        .links-grid {
          grid-template-columns: 1fr;
        }
      }
      
    </style>
    
    <ui-footer class="dark-footer">
      <div class="footer-content" slot="">
        <div class="cta-section">
          <h4>Готовы начать?</h4>
          <p>Зарегистрируйтесь сейчас и получите 14-дневный бесплатный период</p>
          <ui-button type="primary" size="medium" label="Primary Button"></ui-button>
        </div>
        
        <div class="links-grid">
          <div>
            <h4>Продукт</h4>
            <div class="footer-links">
              <a href="/features">Функции</a>
              <a href="/pricing">Цены</a>
              <a href="/demo">Демо</a>
            </div>
          </div>
          
          <div>
            <h4>Ресурсы</h4>
            <div class="footer-links">
              <a href="/blog">Блог</a>
              <a href="/guides">Гайды</a>
              <a href="/webinars">Вебинары</a>
            </div>
          </div>
          
          <div>
            <h4>Компания</h4>
            <div class="footer-links">
              <a href="/about">О нас</a>
              <a href="/careers">Карьера</a>
              <a href="/contact">Контакты</a>
            </div>
          </div>
        </div>
      </div>
    </ui-footer>
  `},SitemapFooter={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .sitemap-footer {
        max-width: 1400px;
        margin: 0 auto;
        padding: 3rem 1rem;
      }
      
      .sitemap-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
      
      .sitemap-section h3 {
        margin-bottom: 1.5rem;
      }
      
      .sitemap-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      
      .footer-bottom {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      @media (max-width: 1024px) {
        .sitemap-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 600px) {
        .sitemap-grid {
          grid-template-columns: 1fr;
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
    </style>
    
    <ui-footer>
      <div class="sitemap-footer" slot="">
        <div class="sitemap-grid">
          <div class="sitemap-section">
            <h4>Продукты</h4>
            <div class="sitemap-links">
              <a href="/product1">Продукт 1</a>
              <a href="/product2">Продукт 2</a>
              <a href="/product3">Продукт 3</a>
              <a href="/all-products">Все продукты</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Решения</h4>
            <div class="sitemap-links">
              <a href="/solution1">Для бизнеса</a>
              <a href="/solution2">Для образования</a>
              <a href="/solution3">Для госсектора</a>
              <a href="/all-solutions">Все решения</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Ресурсы</h4>
            <div class="sitemap-links">
              <a href="/blog">Блог</a>
              <a href="/case-studies">Кейсы</a>
              <a href="/webinars">Вебинары</a>
              <a href="/documentation">Документация</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Компания</h4>
            <div class="sitemap-links">
              <a href="/about">О нас</a>
              <a href="/careers">Карьера</a>
              <a href="/partners">Партнеры</a>
              <a href="/contact">Контакты</a>
            </div>
          </div>
        </div>
         
      </div>
    </ui-footer>
  `},__namedExportsOrder=["BasicColumns","Minimal","BrandFooter","DarkWithCTA","SitemapFooter"];BasicColumns.parameters={...BasicColumns.parameters,docs:{...BasicColumns.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      .footer-grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 2rem;\n        padding: 2rem 0;\n        max-width: 1200px;\n        margin: 0 auto;\n      }\n\n      .footer-section {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n      }\n\n      .footer-links {\n        display: flex;\n        flex-direction: column;\n        gap: 0.75rem;\n      }\n\n      @media (max-width: 768px) {\n        .footer-grid {\n          grid-template-columns: 1fr;\n          padding: 2rem 1rem;\n          gap: 1.5rem;\n        }\n        \n        .footer-section {\n          text-align: center;\n        }\n      }\n    </style>\n    \n    <ui-footer>\n      <div class="footer-grid" slot="">\n        <div class="footer-section">\n          <h4>Компания</h4>\n          <div class="footer-links">\n            <a href="/about">О нас</a>\n            <a href="/careers">Карьера</a>\n            <a href="/news">Новости</a>\n          </div>\n        </div>\n        \n        <div class="footer-section">\n          <h4>Продукты</h4>\n          <div class="footer-links">\n            <a href="/features">Возможности</a>\n            <a href="/pricing">Цены</a>\n            <a href="/integrations">Интеграции</a>\n          </div>\n        </div>\n        \n        <div class="footer-section">\n          <h4>Поддержка</h4>\n          <div class="footer-links">\n            <a href="/help">Центр помощи</a>\n            <a href="/contact">Контакты</a>\n            <a href="/status">Статус системы</a>\n          </div>\n        </div>\n      </div>\n    </ui-footer>\n  `\n}',...BasicColumns.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <style>\n      .minimal-footer {\n        text-align: center;\n        padding: 1.5rem 1rem;\n        font-size: 0.875rem;\n        color: #666;\n      }\n    </style>\n    \n    <ui-footer>\n      \n    </ui-footer>\n  `\n}",...Minimal.parameters?.docs?.source}}},BrandFooter.parameters={...BrandFooter.parameters,docs:{...BrandFooter.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      .brand-footer {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1.5rem;\n        padding: 2rem 1rem 0rem;\n        text-align: center;\n      }\n      \n      .logo {\n        width: 150px;\n        height: auto;\n      }\n      \n      .social-links {\n        display: flex;\n        gap: 1.5rem;\n      }\n      \n      .legal-links {\n        display: flex;\n        gap: 1rem;\n        font-size: 0.875rem;\n      }\n      \n      @media (max-width: 480px) {\n        .legal-links {\n          flex-direction: column;\n          gap: 0.5rem;\n        }\n      }\n    </style>\n    \n    <ui-footer>\n      <div class="brand-footer" slot="">\n        <img src="https://cdn.culture.ru/images/7ecb6c98-8ad0-5621-bced-2450858713ca" alt="Логотип компании" class="logo">\n        \n        <div class="social-links">\n          <a href="#" aria-label="Facebook">📘</a>\n          <a href="#" aria-label="Instagram">📷</a>\n          <a href="#" aria-label="Twitter">🐦</a>\n          <a href="#" aria-label="YouTube">▶️</a>\n        </div>\n        \n        <div class="legal-links">\n          <a href="/privacy">Конфиденциальность</a>\n          <a href="/terms">Условия</a>\n          <a href="/cookies">Cookies</a>\n        </div>\n        \n      </div>\n    </ui-footer>\n  `\n}',...BrandFooter.parameters?.docs?.source}}},DarkWithCTA.parameters={...DarkWithCTA.parameters,docs:{...DarkWithCTA.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      .dark-footer {\n        --bg-color: #1a1a1a;\n        --text-color: #fff;\n        --link-color: #ccc;\n        --link-hover: #fff;\n        --cta-bg: #0066ff;\n      }\n      \n      ui-footer::part(footer) {\n        background: var(--bg-color);\n        color: var(--text-color);\n      }\n      \n      .footer-content {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 3rem 1rem;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 2rem;\n      }\n      \n      .cta-section {\n        display: flex;\n        flex-direction: column;\n        gap: 1.5rem;\n      }\n      \n      .cta-button {\n        background: var(--cta-bg);\n        color: white;\n        padding: 0.75rem 1.5rem;\n        border-radius: 4px;\n        text-decoration: none;\n        display: inline-block;\n        width: fit-content;\n      }\n      \n      .links-grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 1rem;\n      }\n      .footer-links {\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n        gap: 1rem;\n      }\n        \n      @media (max-width: 768px) {\n        .footer-content {\n          grid-template-columns: 1fr;\n        }\n        \n        .links-grid {\n          grid-template-columns: 1fr;\n        }\n      }\n      \n    </style>\n    \n    <ui-footer class="dark-footer">\n      <div class="footer-content" slot="">\n        <div class="cta-section">\n          <h4>Готовы начать?</h4>\n          <p>Зарегистрируйтесь сейчас и получите 14-дневный бесплатный период</p>\n          <ui-button type="primary" size="medium" label="Primary Button"></ui-button>\n        </div>\n        \n        <div class="links-grid">\n          <div>\n            <h4>Продукт</h4>\n            <div class="footer-links">\n              <a href="/features">Функции</a>\n              <a href="/pricing">Цены</a>\n              <a href="/demo">Демо</a>\n            </div>\n          </div>\n          \n          <div>\n            <h4>Ресурсы</h4>\n            <div class="footer-links">\n              <a href="/blog">Блог</a>\n              <a href="/guides">Гайды</a>\n              <a href="/webinars">Вебинары</a>\n            </div>\n          </div>\n          \n          <div>\n            <h4>Компания</h4>\n            <div class="footer-links">\n              <a href="/about">О нас</a>\n              <a href="/careers">Карьера</a>\n              <a href="/contact">Контакты</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ui-footer>\n  `\n}',...DarkWithCTA.parameters?.docs?.source}}},SitemapFooter.parameters={...SitemapFooter.parameters,docs:{...SitemapFooter.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      .sitemap-footer {\n        max-width: 1400px;\n        margin: 0 auto;\n        padding: 3rem 1rem;\n      }\n      \n      .sitemap-grid {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        gap: 2rem;\n      }\n      \n      .sitemap-section h3 {\n        margin-bottom: 1.5rem;\n      }\n      \n      .sitemap-links {\n        display: flex;\n        flex-direction: column;\n        gap: 0.75rem;\n      }\n      \n      .footer-bottom {\n        margin-top: 3rem;\n        padding-top: 2rem;\n        border-top: 1px solid #eee;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      \n      @media (max-width: 1024px) {\n        .sitemap-grid {\n          grid-template-columns: repeat(2, 1fr);\n        }\n      }\n      \n      @media (max-width: 600px) {\n        .sitemap-grid {\n          grid-template-columns: 1fr;\n        }\n        \n        .footer-bottom {\n          flex-direction: column;\n          gap: 1rem;\n          text-align: center;\n        }\n      }\n    </style>\n    \n    <ui-footer>\n      <div class="sitemap-footer" slot="">\n        <div class="sitemap-grid">\n          <div class="sitemap-section">\n            <h4>Продукты</h4>\n            <div class="sitemap-links">\n              <a href="/product1">Продукт 1</a>\n              <a href="/product2">Продукт 2</a>\n              <a href="/product3">Продукт 3</a>\n              <a href="/all-products">Все продукты</a>\n            </div>\n          </div>\n          \n          <div class="sitemap-section">\n            <h4>Решения</h4>\n            <div class="sitemap-links">\n              <a href="/solution1">Для бизнеса</a>\n              <a href="/solution2">Для образования</a>\n              <a href="/solution3">Для госсектора</a>\n              <a href="/all-solutions">Все решения</a>\n            </div>\n          </div>\n          \n          <div class="sitemap-section">\n            <h4>Ресурсы</h4>\n            <div class="sitemap-links">\n              <a href="/blog">Блог</a>\n              <a href="/case-studies">Кейсы</a>\n              <a href="/webinars">Вебинары</a>\n              <a href="/documentation">Документация</a>\n            </div>\n          </div>\n          \n          <div class="sitemap-section">\n            <h4>Компания</h4>\n            <div class="sitemap-links">\n              <a href="/about">О нас</a>\n              <a href="/careers">Карьера</a>\n              <a href="/partners">Партнеры</a>\n              <a href="/contact">Контакты</a>\n            </div>\n          </div>\n        </div>\n         \n      </div>\n    </ui-footer>\n  `\n}',...SitemapFooter.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=UiFooter-stories.c3b19a37.iframe.bundle.js.map