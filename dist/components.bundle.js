"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(this,(()=>(this.webpackChunkMyLibrary=this.webpackChunkMyLibrary||[]).push([[179],{606:(e,t,r)=>{r.r(t),r.d(t,{UiButton:()=>c,UiCard:()=>u,UiFooter:()=>h,UiHeader:()=>m,UiInput:()=>_,UiMenu:()=>z});var o=r(618),s=r(791),i=r(594);const a=o.AH`
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
`;var n=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.type="primary",this.size="medium",this.label=""}static{this.styles=a}render(){const e={"ui-button":!0,...this.type&&{[`ui-button--${this.type}`]:!0},...this.size&&{[`ui-button--${this.size}`]:!0}};return o.qy`
      <button
        type="button"
        class=${(0,i.H)(e)}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `}handleClick(e){this.dispatchEvent(new CustomEvent("click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}};n([(0,s.MZ)({type:String})],c.prototype,"type",void 0),n([(0,s.MZ)({type:String})],c.prototype,"size",void 0),n([(0,s.MZ)({type:String})],c.prototype,"label",void 0),c=n([(0,s.EM)("ui-button")],c);const l=o.AH`
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
`;var d=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let u=class extends o.WF{static{this.styles=l}#e="";get title(){return this.#e}set title(e){this.#e=e}#t="";get description(){return this.#t}set description(e){this.#t=e}#r="large";get size(){return this.#r}set size(e){this.#r=e}#o="vertical";get type(){return this.#o}set type(e){this.#o=e}#s="dark";get color(){return this.#s}set color(e){this.#s=e}#i="";get imageUrl(){return this.#i}set imageUrl(e){this.#i=e}#a="";get imageAlt(){return this.#a}set imageAlt(e){this.#a=e}#n=!1;get hoverable(){return this.#n}set hoverable(e){this.#n=e}render(){return o.qy`
      <div class="card card--${this.size} card--${this.type} ${this.hoverable?"hoverable":""}">            
        <div class="card-content card-content--${this.color}">
          ${this.title?o.qy`<p class="card-title">${this.title}</p>`:""}
          ${this.description?o.qy`<p class="card-description">${this.description}</p>`:""}

        </div>
        <slot name="content"></slot>
        ${this.imageUrl?o.qy`
          <img 
            class="card-image"
            src=${this.imageUrl} 
            alt=${this.imageAlt||this.title}
            loading="lazy"
          >
        `:""}
        <slot name="footer"></slot>
      </div>
    `}};d([(0,s.MZ)({type:String})],u.prototype,"title",null),d([(0,s.MZ)({type:String})],u.prototype,"description",null),d([(0,s.MZ)({type:String})],u.prototype,"size",null),d([(0,s.MZ)({type:String})],u.prototype,"type",null),d([(0,s.MZ)({type:String})],u.prototype,"color",null),d([(0,s.MZ)({type:String,attribute:"image-url"})],u.prototype,"imageUrl",null),d([(0,s.MZ)({type:String,attribute:"image-alt"})],u.prototype,"imageAlt",null),d([(0,s.MZ)({type:Boolean})],u.prototype,"hoverable",null),u=d([(0,s.EM)("ui-card")],u);const p=o.AH`
  .ui-footer {
    background-color: #f2f2f2;
    padding: 2rem;
    margin-top: 2rem;
  }
  
  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
  }      
  .copyright{
    padding-top: 18px;
    text-align: center;
  }
`;var g=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let h=class extends o.WF{static{this.styles=p}render(){const e=(new Date).getFullYear();return o.qy`
      <footer class="ui-footer">
        <div class="footer-content">
          <slot></slot>
        </div>
        <div class="copyright">
          <p>&copy; ${e} Раннева МК. Все права защищены.</p>
        </div>
      </footer>
    `}};h=g([(0,s.EM)("ui-footer")],h);const f=o.AH`
 :host {
    display: block;
    position: relative;
    z-index: 100;
  }

  .ui-header {
    position: sticky;
    top: 0;
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
 
`;var y=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let m=class extends o.WF{constructor(){super(...arguments),this.scrollHandler=()=>{const e=this.shadowRoot?.querySelector(".ui-header");e&&(window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled"))}}static{this.styles=f}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.scrollHandler)}disconnectedCallback(){window.removeEventListener("scroll",this.scrollHandler),super.disconnectedCallback()}render(){return o.qy`
      <header class="ui-header">
        <div class="header-content">
          <slot></slot>
        </div>
      </header>
    `}};m=y([(0,s.EM)("ui-header")],m);const b=o.AH`
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
`;var x=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let _=class extends o.WF{static{this.styles=b}#c="";get value(){return this.#c}set value(e){this.#c=e}#l="";get label(){return this.#l}set label(e){this.#l=e}#d="";get placeholder(){return this.#d}set placeholder(e){this.#d=e}#o="text";get type(){return this.#o}set type(e){this.#o=e}#u=!1;get disabled(){return this.#u}set disabled(e){this.#u=e}#p=!1;get invalid(){return this.#p}set invalid(e){this.#p=e}#g="";get errorMessage(){return this.#g}set errorMessage(e){this.#g=e}#h="";get hint(){return this.#h}set hint(e){this.#h=e}#f="";get prefixIcon(){return this.#f}set prefixIcon(e){this.#f=e}#y="";get suffixIcon(){return this.#y}set suffixIcon(e){this.#y=e}#m=!1;get clearable(){return this.#m}set clearable(e){this.#m=e}#b(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}#x(){this.value="",this.dispatchEvent(new CustomEvent("change",{detail:""})),this.shadowRoot?.querySelector("input")?.focus()}render(){return o.qy`
      <div class="input-container ${this.disabled?"disabled":""} ${this.invalid?"invalid":""}">
        ${this.label?o.qy`<label>${this.label}</label>`:""}
        
        <div class="input-wrapper">
          ${this.prefixIcon?o.qy`<span class="prefix">${this.prefixIcon}</span>`:""}
          
          <input
            type=${this.type}
            placeholder=${this.placeholder}
            .value=${this.value}
            ?disabled=${this.disabled}
            @input=${this.#b}
          >
          
          ${this.suffixIcon?o.qy`<span class="suffix">${this.suffixIcon}</span>`:""}
          
          ${this.clearable&&this.value&&!this.disabled?o.qy`<button class="clear-btn" @click=${this.#x} type="button">×</button>`:""}
        </div>
        
        ${this.hint&&!this.invalid?o.qy`<div class="hint">${this.hint}</div>`:""}
        ${this.invalid&&this.errorMessage?o.qy`<div class="error">${this.errorMessage}</div>`:""}
      </div>
    `}};x([(0,s.MZ)({type:String})],_.prototype,"value",null),x([(0,s.MZ)({type:String})],_.prototype,"label",null),x([(0,s.MZ)({type:String})],_.prototype,"placeholder",null),x([(0,s.MZ)({type:String})],_.prototype,"type",null),x([(0,s.MZ)({type:Boolean})],_.prototype,"disabled",null),x([(0,s.MZ)({type:Boolean})],_.prototype,"invalid",null),x([(0,s.MZ)({type:String,attribute:"error-message"})],_.prototype,"errorMessage",null),x([(0,s.MZ)({type:String})],_.prototype,"hint",null),x([(0,s.MZ)({type:String,attribute:"prefix-icon"})],_.prototype,"prefixIcon",null),x([(0,s.MZ)({type:String,attribute:"suffix-icon"})],_.prototype,"suffixIcon",null),x([(0,s.MZ)({type:Boolean})],_.prototype,"clearable",null),_=x([(0,s.EM)("ui-input")],_);const v=o.AH`
       

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
      font-size:var(--text-medium);
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

`;var w=function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let z=class extends o.WF{static{this.styles=v}#_=[];get elements(){return this.#_}set elements(e){this.#_=e}#o="horizontal";get type(){return this.#o}set type(e){this.#o=e}#r="medium";get size(){return this.#r}set size(e){this.#r=e}render(){return o.qy`
      <ul class="menu ${this.type} ${this.size}">
        ${this.elements.map((e=>o.qy`
            <li class="menu-item">
              <a href=${e.url}>${e.name}</a>
            </li>
          `))}
      </ul>
    `}};w([(0,s.MZ)({type:Array})],z.prototype,"elements",null),w([(0,s.MZ)({type:String})],z.prototype,"type",null),w([(0,s.MZ)({type:String})],z.prototype,"size",null),z=w([(0,s.EM)("ui-menu")],z),customElements.get("ui-button")||customElements.define("ui-button",c),customElements.get("ui-card")||customElements.define("ui-card",u),customElements.get("ui-footer")||customElements.define("ui-footer",h),customElements.get("ui-header")||customElements.define("ui-header",m),customElements.get("ui-input")||customElements.define("ui-input",_),customElements.get("ui-menu")||customElements.define("ui-menu",z)}},e=>(e.O(0,[195],(()=>{return t=606,e(e.s=t);var t})),e.O())])));
//# sourceMappingURL=components.bundle.js.map