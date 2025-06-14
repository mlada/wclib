"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[300],{"./src/stories/UiMenu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LargeMenu:()=>LargeMenu,MobileBurgerMenu:()=>MobileBurgerMenu,SmallMenu:()=>SmallMenu,VerticalMenu:()=>VerticalMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI Menu",component:"ui-menu",tags:["autodocs"],argTypes:{type:{control:"radio",options:["vertical","horizontal"],description:"Menu orientation (vertical or horizontal)",table:{defaultValue:{summary:"horizontal"}}},size:{control:"radio",options:["small","medium","large"],description:"Size of menu items",table:{defaultValue:{summary:"medium"}}},elements:{control:"object",description:"Array of menu items with name and url",table:{defaultValue:{summary:"[]"}}}},args:{type:"horizontal",size:"medium",elements:[{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Contact",url:"/contact"}]},render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      ui-menu::part(menu-container) {
        position: relative;
        display: inline-block;
      }
    </style>
    <ui-menu
      type=${args.type}
      size=${args.size}
      .elements=${args.elements}
    ></ui-menu>
  `},Default={},VerticalMenu={args:{type:"vertical"},decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div style="display: flex; height: 300px;">
        ${story()}
      </div>
    `]},SmallMenu={args:{size:"small"}},LargeMenu={args:{size:"large"}},MobileBurgerMenu={args:{type:"horizontal"},decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <style>
        .mobile-preview {
          position: relative;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 360px;
          height: 600px;
          resize: both;
          overflow: auto;
          background: white;
        }
        
        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #eee;
          position: relative;
        }
        
        .logo {
          font-weight: bold;
        }
        
        ui-menu::part(menu-container) {
          position: static;
        }
        
        @media (min-width: 768px) {
          .mobile-preview {
            width: 100%;
            height: auto;
            resize: none;
          }
        }
      </style>
      <div class="mobile-preview">
        <div class="mobile-header">
          ${story()}
        </div>
        <div style="padding: 1rem;">
          <p>Mobile content goes here. Resize the preview to see how the burger menu behaves.</p>
        </div>
      </div>
    `],parameters:{viewport:{defaultViewport:"mobile2"}}},__namedExportsOrder=["Default","VerticalMenu","SmallMenu","LargeMenu","MobileBurgerMenu"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},VerticalMenu.parameters={...VerticalMenu.parameters,docs:{...VerticalMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'vertical'\n  },\n  decorators: [story => html`\n      <div style=\"display: flex; height: 300px;\">\n        ${story()}\n      </div>\n    `]\n}",...VerticalMenu.parameters?.docs?.source}}},SmallMenu.parameters={...SmallMenu.parameters,docs:{...SmallMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...SmallMenu.parameters?.docs?.source}}},LargeMenu.parameters={...LargeMenu.parameters,docs:{...LargeMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...LargeMenu.parameters?.docs?.source}}},MobileBurgerMenu.parameters={...MobileBurgerMenu.parameters,docs:{...MobileBurgerMenu.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: \'horizontal\'\n  },\n  decorators: [story => html`\n      <style>\n        .mobile-preview {\n          position: relative;\n          border: 1px solid #ddd;\n          border-radius: 8px;\n          overflow: hidden;\n          width: 360px;\n          height: 600px;\n          resize: both;\n          overflow: auto;\n          background: white;\n        }\n        \n        .mobile-header {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 1rem;\n          background: #f8f9fa;\n          border-bottom: 1px solid #eee;\n          position: relative;\n        }\n        \n        .logo {\n          font-weight: bold;\n        }\n        \n        ui-menu::part(menu-container) {\n          position: static;\n        }\n        \n        @media (min-width: 768px) {\n          .mobile-preview {\n            width: 100%;\n            height: auto;\n            resize: none;\n          }\n        }\n      </style>\n      <div class="mobile-preview">\n        <div class="mobile-header">\n          ${story()}\n        </div>\n        <div style="padding: 1rem;">\n          <p>Mobile content goes here. Resize the preview to see how the burger menu behaves.</p>\n        </div>\n      </div>\n    `],\n  parameters: {\n    viewport: {\n      defaultViewport: \'mobile2\'\n    }\n  }\n}',...MobileBurgerMenu.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=UiMenu-stories.fcfc9c8a.iframe.bundle.js.map