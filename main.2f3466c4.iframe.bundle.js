(self.webpackChunk_mlada_wclib=self.webpackChunk_mlada_wclib||[]).push([[792],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js");const styles=lit.AH`
  .ui-button {
    font-family: inherit;
    border: none;
    border-radius: var(--ui-button-border-radius);
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  .ui-button--primary {
    color: var(--ui-button-primary-text-color);
    background-color: var(--ui-button-primary-color);
  }

  .ui-button--primary:hover {
    background-color: var(--ui-button-primary-hover-color);
  }

  .ui-button--light {
    color: var(--ui-button-light-text-color);
    background-color: var(--ui-button-light-color);
  }

  .ui-button--light:hover {
    background-color: var(--ui-button-light-hover-color);
  }

  .ui-button--secondary {
    color: var(--ui-button-secondary-text-color);
    background-color: transparent;
    box-shadow: var(--ui-button-secondary-border-color) 0px 0px 0px 1px inset;
  }

  .ui-button--secondary:hover {
    box-shadow: var(--ui-button-secondary-hover-border-color) 0px 0px 0px 1px inset;
  }

  .ui-button--small {
    font-size: var(--ui-button-small-font-size);
    padding: var(--ui-button-small-padding);
  }

  .ui-button--medium {
    font-size: var(--ui-button-medium-font-size);
    padding: var(--ui-button-medium-padding);
  }

  .ui-button--large {
    font-size: var(--ui-button-large-font-size);
    padding: var(--ui-button-large-padding);
  }
`;var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiButton=class UiButton extends lit.WF{constructor(){super(...arguments),this.type="primary",this.size="medium",this.label=""}static{this.styles=styles}render(){const classes={"ui-button":!0,...this.type&&{[`ui-button--${this.type}`]:!0},...this.size&&{[`ui-button--${this.size}`]:!0}};return lit.qy`
      <button
        type="button"
        class=${(0,class_map.H)(classes)}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `}handleClick(e){this.dispatchEvent(new CustomEvent("click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}};__decorate([(0,decorators.MZ)({type:String})],UiButton.prototype,"type",void 0),__decorate([(0,decorators.MZ)({type:String})],UiButton.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:String})],UiButton.prototype,"label",void 0),UiButton=__decorate([(0,decorators.EM)("ui-button")],UiButton);const ui_card_styles_styles=lit.AH`
  :host {
    margin: 0 auto;
  }
  
  .card {
      max-width: 1280px;
      overflow: hidden;      
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .card--small {
      max-width: 320px;
    }

    .card--xs {
      max-width: 320px;
    }

    .card--medium {
      max-width: 640px;
    }

    .card--large {
      max-width: 1280px;
      text-align: center;
    }      

    .card.hoverable {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border-radius: var(--border-radius);
      cursor: pointer;
    }

    .card.hoverable:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card--xs .card-image {
      width: 80px;
      height: auto;
      display: block;
      text-align: center;
      margin: 0 auto;
    }

    .card-content {
      padding: 16px;
      flex-grow: 1;
    }
      
    .card-content--dark{
      color: var(--theme-text-color, #333);
    }

    .card-content--light{
      color: var(--theme-text-light-color, #fff);
    }

    .card-title {
      margin: 0 0 8px 0;
      font-size: var(--text-h3);
      margin: 8px 0;
    }

    .card--large .card-title { 
      font-size: var(--text-h1);  
      font-weight: 700;  
      margin: 24px 0;
    } 

    .card--medium .card-title { 
      font-size: var(--text-h2);    
      font-weight: 700;  
      text-align: center;
      margin: 16px 0;
    }     
    .card-description {
      margin: 0;
      font-size: var(--text-small);    
      line-height: 1.5;
      margin: 0 0 8px 0;
    }

    .card--large .card-description { 
      font-size: var(--text-large);    
      margin: 0 0 24px 0;
     } 

    .card--medium .card-description { 
      font-size: var(--text-medium);    
      margin: 0 0 16px 0;
     }    

    .card--xs .card-description { 
      text-align: start;
    }    

    .card--horizontal {
      flex-direction: row;
    }

    .card--horizontal .card-content {
      width: 50%;
      padding-right: 40px;
    }

    .card--horizontal .card-title {
      text-align: start;
    }

    .card--horizontal .card-description {
      text-align: start;
    }

    .card--horizontal ::slotted([slot="content"]) {     
      width: 50%;
    }
    ::slotted([slot="content"]) {
      display: flex;
      align-items: center;
      justify-content: center; 
      text-align: start;
    }

    ::slotted([slot="footer"]) {
      padding: 12px 16px;
      border-top: 1px solid #eee;
      background: #f9f9f9;
    }
`;var ui_card_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiCard=class UiCard extends lit.WF{static{this.styles=ui_card_styles_styles}#title_accessor_storage="";get title(){return this.#title_accessor_storage}set title(value){this.#title_accessor_storage=value}#description_accessor_storage="";get description(){return this.#description_accessor_storage}set description(value){this.#description_accessor_storage=value}#size_accessor_storage="large";get size(){return this.#size_accessor_storage}set size(value){this.#size_accessor_storage=value}#type_accessor_storage="vertical";get type(){return this.#type_accessor_storage}set type(value){this.#type_accessor_storage=value}#color_accessor_storage="dark";get color(){return this.#color_accessor_storage}set color(value){this.#color_accessor_storage=value}#imageUrl_accessor_storage="";get imageUrl(){return this.#imageUrl_accessor_storage}set imageUrl(value){this.#imageUrl_accessor_storage=value}#imageAlt_accessor_storage="";get imageAlt(){return this.#imageAlt_accessor_storage}set imageAlt(value){this.#imageAlt_accessor_storage=value}#hoverable_accessor_storage=!1;get hoverable(){return this.#hoverable_accessor_storage}set hoverable(value){this.#hoverable_accessor_storage=value}render(){return lit.qy`
      <div class="card card--${this.size} card--${this.type} ${this.hoverable?"hoverable":""}">            
        <div class="card-content card-content--${this.color}">
          ${this.title?lit.qy`<p class="card-title">${this.title}</p>`:""}
          ${this.description?lit.qy`<p class="card-description">${this.description}</p>`:""}

        </div>
        <slot name="content"></slot>
        ${this.imageUrl?lit.qy`
          <img 
            class="card-image"
            src=${this.imageUrl} 
            alt=${this.imageAlt||this.title}
            loading="lazy"
          >
        `:""}
        <slot name="footer"></slot>
      </div>
    `}};ui_card_decorate([(0,decorators.MZ)({type:String})],UiCard.prototype,"title",null),ui_card_decorate([(0,decorators.MZ)({type:String})],UiCard.prototype,"description",null),ui_card_decorate([(0,decorators.MZ)({type:String})],UiCard.prototype,"size",null),ui_card_decorate([(0,decorators.MZ)({type:String})],UiCard.prototype,"type",null),ui_card_decorate([(0,decorators.MZ)({type:String})],UiCard.prototype,"color",null),ui_card_decorate([(0,decorators.MZ)({type:String,attribute:"image-url"})],UiCard.prototype,"imageUrl",null),ui_card_decorate([(0,decorators.MZ)({type:String,attribute:"image-alt"})],UiCard.prototype,"imageAlt",null),ui_card_decorate([(0,decorators.MZ)({type:Boolean})],UiCard.prototype,"hoverable",null),UiCard=ui_card_decorate([(0,decorators.EM)("ui-card")],UiCard);const ui_footer_styles_styles=lit.AH`
  .ui-footer {
    background-color: #f2f2f2;
    padding: 1.5rem 1rem; /* Уменьшаем padding на мобильных */
    margin-top: 1.5rem; /* Меньше отступ сверху */
  }
  
  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 12px; /* Добавляем боковые отступы для маленьких экранов */
  }      
 
  .copyright {
    padding-top: 1rem; /* Используем rem вместо px для адаптивности */
    text-align: center;
    font-size: 0.875rem; /* Чуть уменьшаем текст на мобильных */
  }

  /* Адаптация для планшетов и десктопов */
  @media (min-width: 768px) {
    .ui-footer {
      padding: 2rem;
      margin-top: 2rem;
    }

    .copyright {
      padding-top: 1.125rem;
      font-size: 1rem;
    }
  }
`;var ui_footer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiFooter=class UiFooter extends lit.WF{static{this.styles=ui_footer_styles_styles}render(){const currentYear=(new Date).getFullYear();return lit.qy`
      <footer class="ui-footer">
        <div class="footer-content">
          <slot></slot>
        </div>
        <div class="copyright">
          <p>&copy; ${currentYear} Раннева МК. Все права защищены.</p>
        </div>
      </footer>
    `}};UiFooter=ui_footer_decorate([(0,decorators.EM)("ui-footer")],UiFooter);const ui_header_styles_styles=lit.AH`
  :host {
    display: block;
    position: relative;
    z-index: 100;
    width: 100%;
  }

  .ui-header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    z-index: 100;
    width: 100%;
  }

  .ui-header.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height, 64px);
    padding: 0 var(--header-padding, 24px);
    max-width: var(--header-max-width, 1440px);
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .header-content {
      height: var(--header-height-mobile, 56px);
      padding: 0 var(--header-padding-mobile, 16px);
    }
  }
`;var ui_header_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiHeader=class UiHeader extends lit.WF{constructor(){super(...arguments),this.scrollHandler=()=>{const header=this.shadowRoot?.querySelector(".ui-header");if(header){const scrollContainer=this.findScrollContainer();(scrollContainer?.scrollTop||window.scrollY)>10?header.classList.add("scrolled"):header.classList.remove("scrolled")}}}static{this.styles=ui_header_styles_styles}findScrollContainer(){let el=this;for(;el;){if(el.scrollHeight>el.clientHeight&&"visible"!==getComputedStyle(el).overflowY)return el;el=el.parentElement}return null}connectedCallback(){super.connectedCallback();(this.findScrollContainer()||window).addEventListener("scroll",this.scrollHandler),setTimeout((()=>this.scrollHandler()),0)}disconnectedCallback(){(this.findScrollContainer()||window).removeEventListener("scroll",this.scrollHandler),super.disconnectedCallback()}render(){return lit.qy`
      <header class="ui-header">
        <div class="header-content">
          <slot></slot>
        </div>
      </header>
    `}};UiHeader=ui_header_decorate([(0,decorators.EM)("ui-header")],UiHeader);const ui_input_styles_styles=lit.AH`
  .input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
  
      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
  
      input {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: calc(var(--border-radius)/2);
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
  
      .prefix, .suffix {
        position: absolute;
        padding: 0 0.5rem;
      }
  
      .prefix {
        left: 0;
      }
  
      .suffix {
        right: 0;
      }
  
      .clear-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0 0.5rem;
      }
`;var ui_input_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiInput=class UiInput extends lit.WF{static{this.styles=ui_input_styles_styles}#value_accessor_storage="";get value(){return this.#value_accessor_storage}set value(value){this.#value_accessor_storage=value}#label_accessor_storage="";get label(){return this.#label_accessor_storage}set label(value){this.#label_accessor_storage=value}#placeholder_accessor_storage="";get placeholder(){return this.#placeholder_accessor_storage}set placeholder(value){this.#placeholder_accessor_storage=value}#type_accessor_storage="text";get type(){return this.#type_accessor_storage}set type(value){this.#type_accessor_storage=value}#disabled_accessor_storage=!1;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#invalid_accessor_storage=!1;get invalid(){return this.#invalid_accessor_storage}set invalid(value){this.#invalid_accessor_storage=value}#errorMessage_accessor_storage="";get errorMessage(){return this.#errorMessage_accessor_storage}set errorMessage(value){this.#errorMessage_accessor_storage=value}#hint_accessor_storage="";get hint(){return this.#hint_accessor_storage}set hint(value){this.#hint_accessor_storage=value}#prefixIcon_accessor_storage="";get prefixIcon(){return this.#prefixIcon_accessor_storage}set prefixIcon(value){this.#prefixIcon_accessor_storage=value}#suffixIcon_accessor_storage="";get suffixIcon(){return this.#suffixIcon_accessor_storage}set suffixIcon(value){this.#suffixIcon_accessor_storage=value}#clearable_accessor_storage=!1;get clearable(){return this.#clearable_accessor_storage}set clearable(value){this.#clearable_accessor_storage=value}#handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}#clearValue(){this.value="",this.dispatchEvent(new CustomEvent("change",{detail:""})),this.shadowRoot?.querySelector("input")?.focus()}render(){return lit.qy`
      <div class="input-container ${this.disabled?"disabled":""} ${this.invalid?"invalid":""}">
        ${this.label?lit.qy`<label>${this.label}</label>`:""}
        
        <div class="input-wrapper">
          ${this.prefixIcon?lit.qy`<span class="prefix">${this.prefixIcon}</span>`:""}
          
          <input
            type=${this.type}
            placeholder=${this.placeholder}
            .value=${this.value}
            ?disabled=${this.disabled}
            @input=${this.#handleChange}
          >
          
          ${this.suffixIcon?lit.qy`<span class="suffix">${this.suffixIcon}</span>`:""}
          
          ${this.clearable&&this.value&&!this.disabled?lit.qy`<button class="clear-btn" @click=${this.#clearValue} type="button">×</button>`:""}
        </div>
        
        ${this.hint&&!this.invalid?lit.qy`<div class="hint">${this.hint}</div>`:""}
        ${this.invalid&&this.errorMessage?lit.qy`<div class="error">${this.errorMessage}</div>`:""}
      </div>
    `}};ui_input_decorate([(0,decorators.MZ)({type:String})],UiInput.prototype,"value",null),ui_input_decorate([(0,decorators.MZ)({type:String})],UiInput.prototype,"label",null),ui_input_decorate([(0,decorators.MZ)({type:String})],UiInput.prototype,"placeholder",null),ui_input_decorate([(0,decorators.MZ)({type:String})],UiInput.prototype,"type",null),ui_input_decorate([(0,decorators.MZ)({type:Boolean})],UiInput.prototype,"disabled",null),ui_input_decorate([(0,decorators.MZ)({type:Boolean})],UiInput.prototype,"invalid",null),ui_input_decorate([(0,decorators.MZ)({type:String,attribute:"error-message"})],UiInput.prototype,"errorMessage",null),ui_input_decorate([(0,decorators.MZ)({type:String})],UiInput.prototype,"hint",null),ui_input_decorate([(0,decorators.MZ)({type:String,attribute:"prefix-icon"})],UiInput.prototype,"prefixIcon",null),ui_input_decorate([(0,decorators.MZ)({type:String,attribute:"suffix-icon"})],UiInput.prototype,"suffixIcon",null),ui_input_decorate([(0,decorators.MZ)({type:Boolean})],UiInput.prototype,"clearable",null),UiInput=ui_input_decorate([(0,decorators.EM)("ui-input")],UiInput);const ui_menu_styles_styles=lit.AH`
:host{
position: relative;}
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  /* Horizontal menu (default) */
  .menu.horizontal {
    flex-direction: row;
  }

  /* Vertical menu */
  .menu.vertical {
    flex-direction: column;
  }

  /* Menu sizes */
  .menu.small {
    font-size: var(--text-small);
  }

  .menu.medium {
    font-size: var(--text-medium);
  }

  .menu.large {
    font-size: var(--text-large);
  }

  .menu-item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: calc(var(--border-radius)/2);
  }

  .menu-item:hover {
    text-decoration: underline;
  }

  .menu-item a {
    color: inherit;
    text-decoration: none;
  }

  /* Mobile styles */
  .burger-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .burger-icon {
    display: block;
    width: 24px;
    height: 2px;
    background: currentColor;
    position: relative;
  }

  .burger-icon::before,
  .burger-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: currentColor;
    left: 0;
  }

  .burger-icon::before {
    top: -6px;
  }

  .burger-icon::after {
    top: 6px;
  }

 @media (max-width: 768px) {
  .burger-button {
    display: block;
    position: relative;
    z-index: 101;
  }

  .menu.horizontal {
    display: none;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    width: 200px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 0.5rem 0;
    z-index: 100;
  }

  .menu.horizontal.open {
    display: flex;
  }
}
`;var ui_menu_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let UiMenu=class UiMenu extends lit.WF{constructor(){super(...arguments),this.#elements_accessor_storage=[],this.#type_accessor_storage="horizontal",this.#size_accessor_storage="medium",this.isMenuOpen=!1}static{this.styles=ui_menu_styles_styles}#elements_accessor_storage;get elements(){return this.#elements_accessor_storage}set elements(value){this.#elements_accessor_storage=value}#type_accessor_storage;get type(){return this.#type_accessor_storage}set type(value){this.#type_accessor_storage=value}#size_accessor_storage;get size(){return this.#size_accessor_storage}set size(value){this.#size_accessor_storage=value}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}render(){return lit.qy`
      ${"horizontal"===this.type?lit.qy`
            <button 
              class="burger-button" 
              @click=${this.toggleMenu}
              aria-label="${this.isMenuOpen?"Закрыть меню":"Открыть меню"}"
            >
              <span class="burger-icon"></span>
            </button>
          `:""}
      
      <ul class="menu ${this.type} ${this.size} ${this.isMenuOpen?"open":""}">
        ${this.elements.map((element=>lit.qy`
            <li class="menu-item">
              <a href=${element.url} @click=${()=>this.isMenuOpen=!1}>
                ${element.name}
              </a>
            </li>
          `))}
      </ul>
    `}};ui_menu_decorate([(0,decorators.MZ)({type:Array})],UiMenu.prototype,"elements",null),ui_menu_decorate([(0,decorators.MZ)({type:String})],UiMenu.prototype,"type",null),ui_menu_decorate([(0,decorators.MZ)({type:String})],UiMenu.prototype,"size",null),ui_menu_decorate([(0,decorators.wk)()],UiMenu.prototype,"isMenuOpen",void 0),UiMenu=ui_menu_decorate([(0,decorators.EM)("ui-menu")],UiMenu),customElements.get("ui-button")||customElements.define("ui-button",UiButton),customElements.get("ui-card")||customElements.define("ui-card",UiCard),customElements.get("ui-footer")||customElements.define("ui-footer",UiFooter),customElements.get("ui-header")||customElements.define("ui-header",UiHeader),customElements.get("ui-input")||customElements.define("ui-input",UiInput),customElements.get("ui-menu")||customElements.define("ui-menu",UiMenu);var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),main=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/styles/main.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(main.A,options);main.A&&main.A.locals&&main.A.locals;customElements.get("ui-button")||customElements.define("ui-button",UiButton),customElements.get("ui-card")||customElements.define("ui-card",UiCard),customElements.get("ui-footer")||customElements.define("ui-footer",UiFooter),customElements.get("ui-header")||customElements.define("ui-header",UiHeader),customElements.get("ui-menu")||customElements.define("ui-menu",UiMenu);const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},actions:{argTypesRegex:"^on[A-Z].*"}}}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/styles/main.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_theme_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/styles/theme.css"),___CSS_LOADER_EXPORT___=_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_theme_css__WEBPACK_IMPORTED_MODULE_2__.A),___CSS_LOADER_EXPORT___.push([module.id,"\n","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/styles/theme.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --border-radius: 8px;\n\n  /* Цвет темы */\n  --theme-main-color: rgb(255, 85, 0);\n  --theme-main-lighter-color: rgb(255, 119, 82);\n  --theme-text-color: rgb(51, 51, 51);\n  --theme-text-light-color: rgb(253, 253, 253);\n\n\n  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n\n  /* мобильные устройства */\n\n  --header-height-mobile: 56px;\n  --header-padding-mobile: 16px;\n\n\n  /* Кнопки цвета */\n  --ui-button-primary-color: var(--theme-main-color);\n  --ui-button-primary-hover-color: var(--theme-main-lighter-color);\n  --ui-button-primary-text-color: var(--theme-text-light-color);\n  --ui-button-light-color: var(--theme-text-light-color);\n  --ui-button-light-hover-color: #ffffff;\n  --ui-button-light-text-color: var(--theme-main-color);\n  --ui-button-secondary-text-color: var(--theme-text-color);\n  --ui-button-secondary-border-color: var(--theme-main-color);\n  --ui-button-secondary-hover-border-color: var(--theme-main-lighter-color);\n\n  /* Размеры */\n  --text-small: 0.875rem;\n  --text-medium: 1rem;\n  --text-large: 1.25rem;\n  --text-x-large: 1.5rem;\n  --text-h1: 2.25rem;\n  --text-h2: 2rem;\n  --text-h3: 1.875rem;\n\n  --ui-button-small-font-size: var(--text-small);\n  --ui-button-medium-font-size: var(--text-medium);\n  --ui-button-large-font-size: var(--text-large);\n\n  --ui-button-small-padding: 10px 16px;\n  --ui-button-medium-padding: 11px 20px;\n  --ui-button-large-padding: 12px 24px;\n  --ui-button-border-radius: calc(var(--border-radius)/2);\n\n  /* Карточки */\n\n  /* Цвета */\n  --ui-card-border-color: var(--theme-text-light-color);\n  --ui-card-shadow-color: rgba(0, 0, 0, 0.1);\n  --ui-card-bg-color: #ffffff;\n\n  /* Размеры */\n  --ui-card-border-radius: var(--border-radius);\n  --ui-card-padding: 1rem;\n  --ui-card-gap: 0.5rem;\n\n  /* Эффекты */\n  --ui-card-shadow-hover: 0 4px 8px var(--ui-card-shadow-color);\n  --ui-card-transition: box-shadow 0.3s ease;\n\n  body {\n    font-family: var(--font-family);\n  }\n\n  h1 {\n    font-size: var(--text-h1);\n    text-align: center;\n  }\n\n  h2 {\n    font-size: var(--text-h2);\n    text-align: center;\n  }\n\n  h3 {\n    font-size: var(--text-h3);\n    text-align: center;\n  }\n\n  a {\n    color: var(--theme-text-color);\n    text-decoration: none;\n  }\n\n  a:active {\n    color: var(--theme-text-color);\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n\n  /* Адаптация для мобильных (до 768px) */\n  @media (max-width: 767px) {\n      --text-small: 0.8125rem;\n      /* 13px */\n      --text-medium: 0.875rem;\n      /* 14px */\n      --text-large: 0.875rem;\n      /* 18px */\n      --text-x-large: 1.125rem;\n      /* 20px */\n      --text-h3: 1.125rem;\n      /* 24px */\n      --text-h2: 1.25rem;\n      /* 28px */\n      --text-h1: 1.5rem;\n      /* 32px */\n  }\n\n}","",{version:3,sources:["webpack://./src/styles/theme.css"],names:[],mappings:"AAAA;EACE,sCAAsC;EACtC,oBAAoB;;EAEpB,cAAc;EACd,mCAAmC;EACnC,6CAA6C;EAC7C,mCAAmC;EACnC,4CAA4C;;;EAG5C,gFAAgF;;EAEhF,yBAAyB;;EAEzB,4BAA4B;EAC5B,6BAA6B;;;EAG7B,iBAAiB;EACjB,kDAAkD;EAClD,gEAAgE;EAChE,6DAA6D;EAC7D,sDAAsD;EACtD,sCAAsC;EACtC,qDAAqD;EACrD,yDAAyD;EACzD,2DAA2D;EAC3D,yEAAyE;;EAEzE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;;EAEnB,8CAA8C;EAC9C,gDAAgD;EAChD,8CAA8C;;EAE9C,oCAAoC;EACpC,qCAAqC;EACrC,oCAAoC;EACpC,uDAAuD;;EAEvD,aAAa;;EAEb,UAAU;EACV,qDAAqD;EACrD,0CAA0C;EAC1C,2BAA2B;;EAE3B,YAAY;EACZ,6CAA6C;EAC7C,uBAAuB;EACvB,qBAAqB;;EAErB,YAAY;EACZ,6DAA6D;EAC7D,0CAA0C;;EAE1C;IACE,+BAA+B;EACjC;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,8BAA8B;IAC9B,qBAAqB;EACvB;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,0BAA0B;EAC5B;;;EAGA,uCAAuC;EACvC;MACI,uBAAuB;MACvB,SAAS;MACT,uBAAuB;MACvB,SAAS;MACT,sBAAsB;MACtB,SAAS;MACT,wBAAwB;MACxB,SAAS;MACT,mBAAmB;MACnB,SAAS;MACT,kBAAkB;MAClB,SAAS;MACT,iBAAiB;MACjB,SAAS;EACb;;AAEF",sourcesContent:[":root {\r\n  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n  --border-radius: 8px;\r\n\r\n  /* Цвет темы */\r\n  --theme-main-color: rgb(255, 85, 0);\r\n  --theme-main-lighter-color: rgb(255, 119, 82);\r\n  --theme-text-color: rgb(51, 51, 51);\r\n  --theme-text-light-color: rgb(253, 253, 253);\r\n\r\n\r\n  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r\n\r\n  /* мобильные устройства */\r\n\r\n  --header-height-mobile: 56px;\r\n  --header-padding-mobile: 16px;\r\n\r\n\r\n  /* Кнопки цвета */\r\n  --ui-button-primary-color: var(--theme-main-color);\r\n  --ui-button-primary-hover-color: var(--theme-main-lighter-color);\r\n  --ui-button-primary-text-color: var(--theme-text-light-color);\r\n  --ui-button-light-color: var(--theme-text-light-color);\r\n  --ui-button-light-hover-color: #ffffff;\r\n  --ui-button-light-text-color: var(--theme-main-color);\r\n  --ui-button-secondary-text-color: var(--theme-text-color);\r\n  --ui-button-secondary-border-color: var(--theme-main-color);\r\n  --ui-button-secondary-hover-border-color: var(--theme-main-lighter-color);\r\n\r\n  /* Размеры */\r\n  --text-small: 0.875rem;\r\n  --text-medium: 1rem;\r\n  --text-large: 1.25rem;\r\n  --text-x-large: 1.5rem;\r\n  --text-h1: 2.25rem;\r\n  --text-h2: 2rem;\r\n  --text-h3: 1.875rem;\r\n\r\n  --ui-button-small-font-size: var(--text-small);\r\n  --ui-button-medium-font-size: var(--text-medium);\r\n  --ui-button-large-font-size: var(--text-large);\r\n\r\n  --ui-button-small-padding: 10px 16px;\r\n  --ui-button-medium-padding: 11px 20px;\r\n  --ui-button-large-padding: 12px 24px;\r\n  --ui-button-border-radius: calc(var(--border-radius)/2);\r\n\r\n  /* Карточки */\r\n\r\n  /* Цвета */\r\n  --ui-card-border-color: var(--theme-text-light-color);\r\n  --ui-card-shadow-color: rgba(0, 0, 0, 0.1);\r\n  --ui-card-bg-color: #ffffff;\r\n\r\n  /* Размеры */\r\n  --ui-card-border-radius: var(--border-radius);\r\n  --ui-card-padding: 1rem;\r\n  --ui-card-gap: 0.5rem;\r\n\r\n  /* Эффекты */\r\n  --ui-card-shadow-hover: 0 4px 8px var(--ui-card-shadow-color);\r\n  --ui-card-transition: box-shadow 0.3s ease;\r\n\r\n  body {\r\n    font-family: var(--font-family);\r\n  }\r\n\r\n  h1 {\r\n    font-size: var(--text-h1);\r\n    text-align: center;\r\n  }\r\n\r\n  h2 {\r\n    font-size: var(--text-h2);\r\n    text-align: center;\r\n  }\r\n\r\n  h3 {\r\n    font-size: var(--text-h3);\r\n    text-align: center;\r\n  }\r\n\r\n  a {\r\n    color: var(--theme-text-color);\r\n    text-decoration: none;\r\n  }\r\n\r\n  a:active {\r\n    color: var(--theme-text-color);\r\n  }\r\n\r\n  a:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n\r\n  /* Адаптация для мобильных (до 768px) */\r\n  @media (max-width: 767px) {\r\n      --text-small: 0.8125rem;\r\n      /* 13px */\r\n      --text-medium: 0.875rem;\r\n      /* 14px */\r\n      --text-large: 0.875rem;\r\n      /* 18px */\r\n      --text-x-large: 1.125rem;\r\n      /* 20px */\r\n      --text-h3: 1.125rem;\r\n      /* 24px */\r\n      --text-h2: 1.25rem;\r\n      /* 28px */\r\n      --text-h1: 1.5rem;\r\n      /* 32px */\r\n  }\r\n\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cts))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Main.stories":["./src/stories/Main.stories.ts",456],"./Main.stories.ts":["./src/stories/Main.stories.ts",456],"./UiButton.stories":["./src/stories/UiButton.stories.ts",85],"./UiButton.stories.ts":["./src/stories/UiButton.stories.ts",85],"./UiCard.stories":["./src/stories/UiCard.stories.ts",451],"./UiCard.stories.ts":["./src/stories/UiCard.stories.ts",451],"./UiFooter.stories":["./src/stories/UiFooter.stories.ts",128],"./UiFooter.stories.ts":["./src/stories/UiFooter.stories.ts",128],"./UiHeader.stories":["./src/stories/UiHeader.stories.ts",622],"./UiHeader.stories.ts":["./src/stories/UiHeader.stories.ts",622],"./UiMenu.stories":["./src/stories/UiMenu.stories.ts",300],"./UiMenu.stories.ts":["./src/stories/UiMenu.stories.ts",300]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cts))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),csf=__webpack_require__("./node_modules/@storybook/core/dist/csf/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src[\\/]stories(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|ts))$/.exec(path))return;const pathRemainder=path.substring(14);return __webpack_require__("./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cts))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>{const previewAnnotations=[__webpack_require__("./node_modules/@storybook/web-components/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/web-components/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./.storybook/preview.ts")],userPreview=previewAnnotations[previewAnnotations.length-1]?.default;return(0,csf.bU)(userPreview)?userPreview.composed:(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)(previewAnnotations)}));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__}},__webpack_require__=>{__webpack_require__.O(0,[388],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.2f3466c4.iframe.bundle.js.map