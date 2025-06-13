"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[128],{"./src/stories/UiFooter.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DarkTheme:()=>DarkTheme,Minimal:()=>Minimal,WithLogo:()=>WithLogo,WithSocialIcons:()=>WithSocialIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI Footer",component:"ui-footer",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ui-footer
    ></ui-footer>
  `,parameters:{docs:{description:{component:'A flexible footer component with multiple layout options and customization features.\r\n\r\n### Angular Usage\r\n```typescript\r\nimport { UiFooterDirective } from \'your-library\';\r\n\r\n@NgModule({\r\n  declarations: [UiFooterDirective],\r\n})\r\nexport class YourModule {}\r\n\r\n// In template:\r\n<ui-footer>\r\n  <div class="custom-content" slot="content">\r\n    \x3c!-- Your footer content here --\x3e\r\n    <a href="#" (click)="handleInternalClick($event)">Link</a>\r\n  </div>\r\n</ui-footer>\r\n\r\n// In component class:\r\nhandleInternalClick(event: CustomEvent) {\r\n  console.log(\'External link clicked\', event.detail);\r\n  // Optionally prevent default and handle navigation programmatically\r\n}\r\n\r\n```\r\n\r\n### React Usage\r\n```jsx\r\nimport { ReactUiFooter } from \'your-library\';\r\n\r\nfunction App() {\r\n\r\n  return (\r\n    <ReactUiFooter>\r\n      <div className="custom-content" slot="content">\r\n        <a href="#" onClick={(e) => {\r\n          e.preventDefault();\r\n          console.log(\'Internal link clicked\');\r\n        }}>\r\n          Internal Link\r\n        </a>\r\n      </div>\r\n    </ReactUiFooter>\r\n  );\r\n}\r\n```'}}}},Basic={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .custom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem 0;
      }
      .custom-content section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .custom-content a {
        color: inherit;
        text-decoration: none;
      }
      .custom-content a:hover {
        text-decoration: underline;
      }
    </style>
    
    <ui-footer>
      <div class="custom-content" slot="content">
        <section>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </section>
        <section>
          <h3>Resources</h3>
          <a href="/docs">Documentation</a>
          <a href="/blog">Blog</a>
          <a href="/forum">Forum</a>
        </section>
        <section>
          <h3>Contact</h3>
          <span>123 Example St, City</span>
          <span>+1 (234) 567-8901</span>
          <span>info@example.com</span>
        </section>
      </div>
    </ui-footer>
  `},Minimal={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      ui-footer::part(footer) {
        padding: 1rem 0;
        text-align: center;
        font-size: 0.875rem;
      }
    </style>
    <ui-footer>
      <div slot="content">© ${(new Date).getFullYear()} Company Name. All rights reserved.</div>
    </ui-footer>
  `},WithSocialIcons={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .social-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
      }
      .social-links {
        display: flex;
        gap: 1rem;
      }
      .social-links a {
        color: inherit;
        text-decoration: none;
        font-size: 1.5rem;
        transition: opacity 0.2s;
      }
      .social-links a:hover {
        opacity: 0.8;
      }
    </style>
    
    <ui-footer >
      <div class="social-footer" slot="content">
        <div>© ${(new Date).getFullYear()} Brand Name</div>
        <div class="social-links">
          <a href="https://twitter.com" aria-label="Twitter">🐦</a>
          <a href="https://facebook.com" aria-label="Facebook">👍</a>
          <a href="https://youtube.com" aria-label="YouTube">▶️</a>
        </div>
      </div>
    </ui-footer>
  `},DarkTheme={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .dark-footer {
        --footer-bg: #333;
        --footer-text: #fff;
        --footer-link: #ccc;
        --footer-link-hover: #fff;
      }
      
      ui-footer::part(footer) {
        background-color: var(--footer-bg);
        color: var(--footer-text);
      }
      
      .dark-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
      }
      
      .dark-content a {
        color: var(--footer-link);
        text-decoration: none;
      }
      
      .dark-content a:hover {
        color: var(--footer-link-hover);
        text-decoration: underline;
      }
    </style>
    
    <ui-footer class="dark-footer" >
      <div class="dark-content" slot="content">
        <section>
          <h3>Products</h3>
          <a href="/product1">Solution 1</a>
          <a href="/product2">Solution 2</a>
          <a href="/product3">Solution 3</a>
        </section>
        <section>
          <h3>Support</h3>
          <a href="/support">Help Center</a>
          <a href="/contact">Contact Us</a>
          <a href="/status">System Status</a>
        </section>
        <section>
          <h3>Legal</h3>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/licenses">Licenses</a>
        </section>
      </div>
    </ui-footer>
  `},WithLogo={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .logo-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;
        text-align: center;
      }
      .logo {
        width: 150px;
        height: auto;
      }
      .logo-links {
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;
      }
      .logo-links a {
        color: inherit;
        text-decoration: none;
      }
      .logo-links a:hover {
        text-decoration: underline;
      }
    </style>
    
    <ui-footer >
      <div class="logo-footer" slot="content">
        <img src="https://via.placeholder.com/150x50?text=Logo" alt="Company Logo" class="logo">
        <div>Innovative solutions for your business</div>
        <div class="logo-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </ui-footer>
  `},__namedExportsOrder=["Basic","Minimal","WithSocialIcons","DarkTheme","WithLogo"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .custom-content {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 2rem;\n        padding: 2rem 0;\n      }\n      .custom-content section {\n        display: flex;\n        flex-direction: column;\n        gap: 0.5rem;\n      }\n      .custom-content a {\n        color: inherit;\n        text-decoration: none;\n      }\n      .custom-content a:hover {\n        text-decoration: underline;\n      }\n    </style>\n    \n    <ui-footer>\n      <div class="custom-content" slot="content">\n        <section>\n          <h3>Company</h3>\n          <a href="/about">About Us</a>\n          <a href="/careers">Careers</a>\n          <a href="/contact">Contact</a>\n        </section>\n        <section>\n          <h3>Resources</h3>\n          <a href="/docs">Documentation</a>\n          <a href="/blog">Blog</a>\n          <a href="/forum">Forum</a>\n        </section>\n        <section>\n          <h3>Contact</h3>\n          <span>123 Example St, City</span>\n          <span>+1 (234) 567-8901</span>\n          <span>info@example.com</span>\n        </section>\n      </div>\n    </ui-footer>\n  `\n}',...Basic.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      ui-footer::part(footer) {\n        padding: 1rem 0;\n        text-align: center;\n        font-size: 0.875rem;\n      }\n    </style>\n    <ui-footer>\n      <div slot="content">© ${new Date().getFullYear()} Company Name. All rights reserved.</div>\n    </ui-footer>\n  `\n}',...Minimal.parameters?.docs?.source}}},WithSocialIcons.parameters={...WithSocialIcons.parameters,docs:{...WithSocialIcons.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .social-footer {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 2rem 0;\n      }\n      .social-links {\n        display: flex;\n        gap: 1rem;\n      }\n      .social-links a {\n        color: inherit;\n        text-decoration: none;\n        font-size: 1.5rem;\n        transition: opacity 0.2s;\n      }\n      .social-links a:hover {\n        opacity: 0.8;\n      }\n    </style>\n    \n    <ui-footer >\n      <div class="social-footer" slot="content">\n        <div>© ${new Date().getFullYear()} Brand Name</div>\n        <div class="social-links">\n          <a href="https://twitter.com" aria-label="Twitter">🐦</a>\n          <a href="https://facebook.com" aria-label="Facebook">👍</a>\n          <a href="https://youtube.com" aria-label="YouTube">▶️</a>\n        </div>\n      </div>\n    </ui-footer>\n  `\n}',...WithSocialIcons.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .dark-footer {\n        --footer-bg: #333;\n        --footer-text: #fff;\n        --footer-link: #ccc;\n        --footer-link-hover: #fff;\n      }\n      \n      ui-footer::part(footer) {\n        background-color: var(--footer-bg);\n        color: var(--footer-text);\n      }\n      \n      .dark-content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        gap: 2rem;\n        padding: 2rem 0;\n      }\n      \n      .dark-content a {\n        color: var(--footer-link);\n        text-decoration: none;\n      }\n      \n      .dark-content a:hover {\n        color: var(--footer-link-hover);\n        text-decoration: underline;\n      }\n    </style>\n    \n    <ui-footer class="dark-footer" >\n      <div class="dark-content" slot="content">\n        <section>\n          <h3>Products</h3>\n          <a href="/product1">Solution 1</a>\n          <a href="/product2">Solution 2</a>\n          <a href="/product3">Solution 3</a>\n        </section>\n        <section>\n          <h3>Support</h3>\n          <a href="/support">Help Center</a>\n          <a href="/contact">Contact Us</a>\n          <a href="/status">System Status</a>\n        </section>\n        <section>\n          <h3>Legal</h3>\n          <a href="/privacy">Privacy Policy</a>\n          <a href="/terms">Terms of Service</a>\n          <a href="/licenses">Licenses</a>\n        </section>\n      </div>\n    </ui-footer>\n  `\n}',...DarkTheme.parameters?.docs?.source}}},WithLogo.parameters={...WithLogo.parameters,docs:{...WithLogo.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .logo-footer {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1rem;\n        padding: 2rem 0;\n        text-align: center;\n      }\n      .logo {\n        width: 150px;\n        height: auto;\n      }\n      .logo-links {\n        display: flex;\n        gap: 1.5rem;\n        margin-top: 1rem;\n      }\n      .logo-links a {\n        color: inherit;\n        text-decoration: none;\n      }\n      .logo-links a:hover {\n        text-decoration: underline;\n      }\n    </style>\n    \n    <ui-footer >\n      <div class="logo-footer" slot="content">\n        <img src="https://via.placeholder.com/150x50?text=Logo" alt="Company Logo" class="logo">\n        <div>Innovative solutions for your business</div>\n        <div class="logo-links">\n          <a href="/privacy">Privacy</a>\n          <a href="/terms">Terms</a>\n          <a href="/contact">Contact</a>\n        </div>\n      </div>\n    </ui-footer>\n  `\n}',...WithLogo.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=UiFooter-stories.98ab2293.iframe.bundle.js.map