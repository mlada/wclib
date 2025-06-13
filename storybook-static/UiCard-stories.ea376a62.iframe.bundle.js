"use strict";(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[451],{"./src/stories/UiCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWidthCard:()=>FullWidthCard,Horizontal:()=>Horizontal,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,ThreeSmallCardsInRow:()=>ThreeSmallCardsInRow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI Card",component:"ui-card",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Card size variant",table:{defaultValue:{summary:"large"}}},title:{control:"text",description:"Card header text"},description:{control:"text",description:"Card description text"},imageUrl:{control:"text",description:"Image URL for card"},imageAlt:{control:"text",description:"Alt text for card image"},hoverable:{control:"boolean",description:"Enable hover effects",table:{defaultValue:{summary:"false"}}},onclick:{action:"clicked",description:"Card click event handler"}},args:{title:"Card Title",description:"This is a card description. It can contain more detailed text content.",size:"medium",hoverable:!0},render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ui-card
      title=${args.title}
      description=${args.description}
      size=${args.size}
      image-url=${args.imageUrl}
      image-alt=${args.imageAlt}
      ?hoverable=${args.hoverable}
      @click=${args.onclick}
    ></ui-card>
  `,parameters:{docs:{description:{component:'A versatile card component with multiple layout options and customization features.\r\n\r\n### Angular Usage\r\n```typescript\r\nimport { UiCardDirective } from \'your-library\';\r\n\r\n@NgModule({\r\n  declarations: [UiCardDirective],\r\n})\r\nexport class YourModule {}\r\n\r\n// In template:\r\n<ui-card \r\n  [title]="\'Card Title\'"\r\n  [description]="\'Card description\'"\r\n  [size]="\'medium\'"\r\n  [imageUrl]="\'path/to/image.jpg\'"\r\n  [hoverable]="true"\r\n>\r\n  <div slot="content">Additional content</div>\r\n  <div slot="footer">\r\n    <button (click)="handleButtonClick($event)">Action</button>\r\n  </div>\r\n</ui-card>\r\n\r\n\r\nhandleButtonClick(event: Event) {\r\n  event.stopPropagation();\r\n  console.log(\'Button clicked\', event);\r\n}\r\n```\r\n\r\n### React Usage\r\n```jsx\r\nimport { ReactUiCard } from \'your-library\';\r\n\r\nfunction App() {\r\n\r\n  return (\r\n    <ReactUiCard\r\n      title="Card Title"\r\n      description="Card description"\r\n      size="medium"\r\n      imageUrl="path/to/image.jpg"\r\n      hoverable\r\n    >\r\n      <div slot="content">Additional content</div>\r\n      <div slot="footer">\r\n        <button onClick={(e) => {\r\n          e.stopPropagation();\r\n          console.log(\'Button clicked\');\r\n        }}>\r\n          Action\r\n        </button>\r\n      </div>\r\n    </ReactUiCard>\r\n  );\r\n}\r\n```'}}}},Small={args:{size:"small",imageUrl:"https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"}},Medium={args:{size:"medium",imageUrl:"https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"}},Large={args:{size:"large",imageUrl:"https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"}},FullWidthCard={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .full-width-card {
        width: 100%;
        max-width: none;
      }
    </style>
    <ui-card
      class="full-width-card"
      title="Full Width Card"
      description="This card stretches to full available width"
      image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
      hoverable
      @click=${args.onclick}
    >
      <div slot="footer">
        <button @click=${e=>{e.stopPropagation(),console.log("Button clicked")}}>Primary Action</button>
      </div>
    </ui-card>
  `,parameters:{layout:"fullscreen"}},Horizontal={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy` 
    <ui-card
      size='medium'
      type='horizontal'
      title='Modern Website Development'
      description="Professionalism and quality in every detail"
      @click=${args.onclick}
    >
      <div slot="content">
        <p>We design, develop and launch websites using HTML, CSS, JavaScript and CMS. We focus on responsive design, SEO and security.</p>
      </div>
    </ui-card>
  `},ThreeSmallCardsInRow={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 24px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
    </style>
    <div class="cards-container">
      <ui-card
        size="small"
        title="Card 1"
        description="First small card in row"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
        @click=${args.onclick}
      ></ui-card>
      
      <ui-card
        size="small"
        title="Card 2"
        description="Second card with longer description"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
        @click=${args.onclick}
      ></ui-card>
      
      <ui-card
        size="small"
        title="Card 3"
        description="Third card in row"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
        @click=${args.onclick}
      >
        <div slot="footer">
          <ui-button
            type='secondary'
            size='small'
            label='Go to'
            @click=${e=>{e.stopPropagation(),console.log("Button clicked")}}
          ></ui-button>
        </div>
      </ui-card>
    </div>
  `,parameters:{layout:"fullscreen"}},__namedExportsOrder=["Small","Medium","Large","FullWidthCard","Horizontal","ThreeSmallCardsInRow"];Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'medium',\n    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL'\n  }\n}",...Large.parameters?.docs?.source}}},FullWidthCard.parameters={...FullWidthCard.parameters,docs:{...FullWidthCard.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .full-width-card {\n        width: 100%;\n        max-width: none;\n      }\n    </style>\n    <ui-card\n      class="full-width-card"\n      title="Full Width Card"\n      description="This card stretches to full available width"\n      image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"\n      hoverable\n      @click=${args.onclick}\n    >\n      <div slot="footer">\n        <button @click=${(e: Event) => {\n    e.stopPropagation();\n    console.log(\'Button clicked\');\n  }}>Primary Action</button>\n      </div>\n    </ui-card>\n  `,\n  parameters: {\n    layout: \'fullscreen\'\n  }\n}',...FullWidthCard.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"{\n  render: args => html` \n    <ui-card\n      size='medium'\n      type='horizontal'\n      title='Modern Website Development'\n      description=\"Professionalism and quality in every detail\"\n      @click=${args.onclick}\n    >\n      <div slot=\"content\">\n        <p>We design, develop and launch websites using HTML, CSS, JavaScript and CMS. We focus on responsive design, SEO and security.</p>\n      </div>\n    </ui-card>\n  `\n}",...Horizontal.parameters?.docs?.source}}},ThreeSmallCardsInRow.parameters={...ThreeSmallCardsInRow.parameters,docs:{...ThreeSmallCardsInRow.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <style>\n      .cards-container {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n        gap: 24px;\n        padding: 20px;\n        max-width: 1200px;\n        margin: 0 auto;\n      }\n    </style>\n    <div class="cards-container">\n      <ui-card\n        size="small"\n        title="Card 1"\n        description="First small card in row"\n        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"\n        hoverable\n        @click=${args.onclick}\n      ></ui-card>\n      \n      <ui-card\n        size="small"\n        title="Card 2"\n        description="Second card with longer description"\n        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"\n        hoverable\n        @click=${args.onclick}\n      ></ui-card>\n      \n      <ui-card\n        size="small"\n        title="Card 3"\n        description="Third card in row"\n        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"\n        hoverable\n        @click=${args.onclick}\n      >\n        <div slot="footer">\n          <ui-button\n            type=\'secondary\'\n            size=\'small\'\n            label=\'Go to\'\n            @click=${(e: Event) => {\n    e.stopPropagation();\n    console.log(\'Button clicked\');\n  }}\n          ></ui-button>\n        </div>\n      </ui-card>\n    </div>\n  `,\n  parameters: {\n    layout: \'fullscreen\'\n  }\n}',...ThreeSmallCardsInRow.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=UiCard-stories.ea376a62.iframe.bundle.js.map