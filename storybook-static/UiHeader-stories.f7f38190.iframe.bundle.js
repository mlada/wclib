"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[622],{"./src/stories/UiHeader.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkTheme:()=>DarkTheme,Default:()=>Default,Sticky:()=>Sticky,WithCustomLogo:()=>WithCustomLogo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const elements=[{name:"Услуги",url:"/services"},{name:"Портфолио",url:"/portfolio"},{name:"О компании",url:"/about"}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/UI Header",component:"ui-header",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ui-header
      style="--header-height: 80px;"
    >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <h1>РАЗРАБОТЧИК</h1>
      <ui-button
        type="primary"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `,parameters:{docs:{description:{component:"A customizable header component with navigation menu and call-to-action buttons.\r\n\r\n### Angular Usage\r\n```typescript\r\nimport { UiHeaderDirective, UiMenuDirective, UiButtonDirective } from 'your-library';\r\n\r\n@NgModule({\r\n  declarations: [UiHeaderDirective, UiMenuDirective, UiButtonDirective],\r\n})\r\nexport class YourModule {}\r\n\r\n// In template:\r\n<ui-header [sticky]=\"true\">\r\n  <ui-menu\r\n    [type]=\"'horizontal'\"\r\n    [size]=\"'medium'\"\r\n    [elements]=\"menuItems\"\r\n  ></ui-menu>\r\n  <h1>РАЗРАБОТЧИК</h1>\r\n  <ui-button\r\n    [type]=\"'primary'\"\r\n    [size]=\"'medium'\"\r\n    [label]=\"'Заказать сайт'\"\r\n    (click)=\"handleButtonClick($event)\"\r\n  ></ui-button>\r\n</ui-header>\r\n\r\n// In component class:\r\nmenuItems = [\r\n  { name: 'Услуги', url: '/services' },\r\n  { name: 'Портфолио', url: '/portfolio' },\r\n  { name: 'О компании', url: '/about' }\r\n];\r\n\r\n\r\nhandleButtonClick(event: Event) {\r\n  console.log('Order button clicked');\r\n  // Open order form\r\n}\r\n```\r\n\r\n### React Usage\r\n```jsx\r\nimport { ReactUiHeader, ReactUiMenu, ReactUiButton } from 'your-library';\r\n\r\nfunction App() {\r\n  const menuItems = [\r\n    { name: 'Услуги', url: '/services' },\r\n    { name: 'Портфолио', url: '/portfolio' },\r\n    { name: 'О компании', url: '/about' }\r\n  ];\r\n\r\n\r\n  const handleOrderClick = () => {\r\n    console.log('Order button clicked');\r\n    // Open order form\r\n  };\r\n\r\n  return (\r\n    <ReactUiHeader sticky >\r\n      <ReactUiMenu\r\n        type=\"horizontal\"\r\n        size=\"medium\"\r\n        elements={menuItems}\r\n      />\r\n      <h1>РАЗРАБОТЧИК</h1>\r\n      <ReactUiButton\r\n        type=\"primary\"\r\n        size=\"medium\"\r\n        label=\"Заказать сайт\"\r\n        onClick={handleOrderClick}\r\n      />\r\n    </ReactUiHeader>\r\n  );\r\n}\r\n```"}}}},Default={},Sticky={parameters:{layout:"fullscreen",docs:{description:{story:"This header sticks to the top when scrolling. Try scrolling the preview area."}}},decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div style="height: 200vh; position: relative;">
        ${story()}
        <div style="padding: 20px; margin-top: 100px;">
          <h2>Scroll down to see sticky behavior</h2>
          <p>Page content...</p>
        </div>
      </div>
    `]},WithCustomLogo={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ui-header
      style="--header-height: 80px;"
    >
      <img 
        slot="logo" 
        src="https://via.placeholder.com/150x50?text=Логотип" 
        alt="Логотип компании"
        style="height: 40px;"
      >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <ui-button
        type="primary"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `},DarkTheme={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .dark-header {
        --header-bg: #222;
        --header-text: #fff;
        --header-link: #ddd;
        --header-link-hover: #fff;
        --header-border: #444;
      }
    </style>
    <ui-header
      class="dark-header"
      style="--header-height: 80px;"
    >
      <ui-menu
        type="horizontal"
        size="medium"
        .elements=${elements}
      ></ui-menu>
      <h1>РАЗРАБОТЧИК</h1>
      <ui-button
        type="light"
        size="medium"
        label="Заказать сайт"
      ></ui-button>
    </ui-header>
  `,parameters:{backgrounds:{default:"dark"}}},__namedExportsOrder=["Default","Sticky","WithCustomLogo","DarkTheme"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Sticky.parameters={...Sticky.parameters,docs:{...Sticky.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    layout: 'fullscreen',\n    docs: {\n      description: {\n        story: 'This header sticks to the top when scrolling. Try scrolling the preview area.'\n      }\n    }\n  },\n  decorators: [story => html`\n      <div style=\"height: 200vh; position: relative;\">\n        ${story()}\n        <div style=\"padding: 20px; margin-top: 100px;\">\n          <h2>Scroll down to see sticky behavior</h2>\n          <p>Page content...</p>\n        </div>\n      </div>\n    `]\n}",...Sticky.parameters?.docs?.source}}},WithCustomLogo.parameters={...WithCustomLogo.parameters,docs:{...WithCustomLogo.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <ui-header\n      style="--header-height: 80px;"\n    >\n      <img \n        slot="logo" \n        src="https://via.placeholder.com/150x50?text=Логотип" \n        alt="Логотип компании"\n        style="height: 40px;"\n      >\n      <ui-menu\n        type="horizontal"\n        size="medium"\n        .elements=${elements}\n      ></ui-menu>\n      <ui-button\n        type="primary"\n        size="medium"\n        label="Заказать сайт"\n      ></ui-button>\n    </ui-header>\n  `\n}',...WithCustomLogo.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .dark-header {\n        --header-bg: #222;\n        --header-text: #fff;\n        --header-link: #ddd;\n        --header-link-hover: #fff;\n        --header-border: #444;\n      }\n    </style>\n    <ui-header\n      class="dark-header"\n      style="--header-height: 80px;"\n    >\n      <ui-menu\n        type="horizontal"\n        size="medium"\n        .elements=${elements}\n      ></ui-menu>\n      <h1>РАЗРАБОТЧИК</h1>\n      <ui-button\n        type="light"\n        size="medium"\n        label="Заказать сайт"\n      ></ui-button>\n    </ui-header>\n  `,\n  parameters: {\n    backgrounds: {\n      default: \'dark\'\n    }\n  }\n}',...DarkTheme.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=UiHeader-stories.f7f38190.iframe.bundle.js.map