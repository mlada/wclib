!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WCLib=e():t.WCLib=e()}(this,(()=>(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{UiButton:()=>mt,UiCard:()=>At,UiFooter:()=>wt,UiHeader:()=>kt,UiInput:()=>Ut});const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,r)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,f=globalThis,_=f.trustedTypes,y=_?_.emptyScript:"",m=f.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,m?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.0");const E=globalThis,S=E.trustedTypes,w=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,j=document,R=()=>j.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T=t=>M(t)||"function"==typeof t?.[Symbol.iterator],H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,z=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,W=/^(?:script|style|textarea|title)$/i,q=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=q(1),F=(q(2),q(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=j.createTreeWalker(j,129);function Y(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(n.lastIndex=h,c=n.exec(s),null!==c);)h=n.lastIndex,n===N?"!--"===c[1]?n=I:void 0!==c[1]?n=z:void 0!==c[2]?(W.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=r??N,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?L:'"'===c[3]?B:D):n===B||n===D?n=L:n===I||n===z?n=N:(n=L,r=void 0);const d=n===L&&t[e+1].startsWith("/>")?" ":"";o+=n===N?s+P:l>=0?(i.push(a),s.slice(0,l)+O+s.slice(l)+C+d):s+C+(-2===l?e:d)}return[Y(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=Q.createElement(c,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(O)){const e=l[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?it:"?"===n[1]?rt:"@"===n[1]?ot:st}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===F)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??j).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=j,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),U(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):T(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.O(R()),this.O(R()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===F&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ot extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??J)===F)return;const s=this._$AH,i=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==J&&(s===J||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=E.litHtmlPolyfillSupport;at?.(Q,et),(E.litHtmlVersions??=[]).push("3.3.0");const ct=globalThis;class lt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(R(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const ht=ct.litElementPolyfillSupport;ht?.({LitElement:lt});(ct.litElementVersions??=[]).push("4.2.0");const dt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},ut=(t=pt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function gt(t){return(e,s)=>"object"==typeof s?ut(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ft=a`
  .ui-button {
    font-family: inherit;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  .ui-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  .ui-button--primary:hover {
    background-color:rgb(16, 162, 253);
  }

  .ui-button--secondary {
    color: #333333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  .ui-button--secondary:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset;
  }

  .ui-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  .ui-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  .ui-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;var _t=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},yt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let mt=class extends lt{static{this.styles=ft}#t=!1;get primary(){return this.#t}set primary(t){this.#t=t}#e;get backgroundColor(){return this.#e}set backgroundColor(t){this.#e=t}#s="medium";get size(){return this.#s}set size(t){this.#s=t}#i="";get label(){return this.#i}set label(t){this.#i=t}render(){const t=this.primary?"ui-button--primary":"ui-button--secondary",e=["ui-button",`ui-button--${this.size}`,t].join(" ");return V`
      <button
        type="button"
        class=${e}
        style=${this.backgroundColor?`background-color: ${this.backgroundColor}`:""}
        @click=${t=>this.dispatchEvent(new CustomEvent("click",{detail:t}))}
      >
        ${this.label}
      </button>
    `}};_t([gt({type:Boolean}),yt("design:type",Object)],mt.prototype,"primary",null),_t([gt({type:String,attribute:"background-color"}),yt("design:type",Object)],mt.prototype,"backgroundColor",null),_t([gt({type:String}),yt("design:type",Object)],mt.prototype,"size",null),_t([gt({type:String}),yt("design:type",Object)],mt.prototype,"label",null),mt=_t([dt("ui-button")],mt);const bt=a`
 .ui-card {
       border: 1px solid #e1e1e1;
       border-radius: 8px;
       overflow: hidden;
       transition: box-shadow 0.3s ease;
     }
 
     .ui-card.hoverable:hover {
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
     }
 
     .card-header {
       padding: 1rem;
       border-bottom: 1px solid #e1e1e1;
       display: flex;
       align-items: center;
       gap: 0.5rem;
     }
 
     .card-image img {
       width: 100%;
       height: auto;
     }
 
     .card-content {
       padding: 1rem;
     }
 
     .card-actions {
       padding: 1rem;
       border-top: 1px solid #e1e1e1;
       display: flex;
       justify-content: flex-end;
       gap: 0.5rem;
     }
`;var $t=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let At=class extends lt{static{this.styles=bt}#r="";get header(){return this.#r}set header(t){this.#r=t}#o="";get icon(){return this.#o}set icon(t){this.#o=t}#n="";get imageUrl(){return this.#n}set imageUrl(t){this.#n=t}#a="";get imageAlt(){return this.#a}set imageAlt(t){this.#a=t}#c=!1;get hoverable(){return this.#c}set hoverable(t){this.#c=t}render(){return V`
      <div class="ui-card ${this.hoverable?"hoverable":""}">
        ${this.header||this.icon?V`
              <div class="card-header">
                ${this.icon?V`<span class="header-icon"><img src=${this.icon} alt=${this.header||"Card icon"} /></span>`:""}
                ${this.header?V`<h3>${this.header}</h3>`:""}
              </div>`:""}

        ${this.imageUrl?V`<div class="card-image"><img src=${this.imageUrl} alt=${this.imageAlt||"Card image"} /></div>`:""}

        <div class="card-content">
          <slot></slot>
        </div>

        <div class="card-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `}};$t([gt({type:String}),vt("design:type",Object)],At.prototype,"header",null),$t([gt({type:String}),vt("design:type",Object)],At.prototype,"icon",null),$t([gt({type:String,attribute:"image-url"}),vt("design:type",Object)],At.prototype,"imageUrl",null),$t([gt({type:String,attribute:"image-alt"}),vt("design:type",Object)],At.prototype,"imageAlt",null),$t([gt({type:Boolean}),vt("design:type",Object)],At.prototype,"hoverable",null),At=$t([dt("ui-card")],At);const xt=a`
  .ui-footer {
        background-color: #f5f5f5;
        padding: 2rem;
        margin-top: 2rem;
      }
  
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }
  
      .links-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
      }
  
      .links-column h3 {
        margin-top: 0;
      }
  
      .links-column ul {
        list-style: none;
        padding: 0;
      }
  
      .links-column a {
        color: inherit;
        text-decoration: none;
      }
  
      .copyright {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #e1e1e1;
      }
  
      .actions-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }
  
      .social-links {
        display: flex;
        gap: 1rem;
      }
`;var Et=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wt=class extends lt{static{this.styles=xt}#l=null;get user(){return this.#l}set user(t){this.#l=t}#h=[{title:"Компания",links:[{text:"О нас",url:"/about"},{text:"Карьера",url:"/careers"},{text:"Контакты",url:"/contact"}]},{title:"Ресурсы",links:[{text:"Документация",url:"/docs"},{text:"Блог",url:"/blog"},{text:"Поддержка",url:"/support"}]},{title:"Правовая информация",links:[{text:"Условия использования",url:"/terms"},{text:"Политика конфиденциальности",url:"/privacy"},{text:"Cookie",url:"/cookie"}]}];get links(){return this.#h}set links(t){this.#h=t}#d=[];get socialLinks(){return this.#d}set socialLinks(t){this.#d=t}#p(){window.scrollTo({top:0,behavior:"smooth"})}render(){const t=(new Date).getFullYear();return V`
      <footer class="ui-footer">
        <div class="footer-content">
          <div class="logo-section">
            <slot name="logo-section"></slot>
          </div>

          <div class="links-section">
            ${this.links.map((t=>V`
                <div class="links-column">
                  <h3>${t.title}</h3>
                  <ul>
                    ${t.links.map((t=>V`
                        <li>
                          <a href=${t.url}>${t.text}</a>
                        </li>
                      `))}
                  </ul>
                </div>
              `))}
          </div>

          <div class="actions-section">
            <slot name="actions-section"></slot>
            ${this.socialLinks.length>0?V`
                  <div class="social-links">
                    ${this.socialLinks.map((t=>V`
                        <a href=${t.url} target="_blank">
                          <img
                            src=${t.icon}
                            alt=${t.name}
                            width="24"
                            height="24"
                          />
                        </a>
                      `))}
                  </div>
                `:""}
          </div>
        </div>

        <div class="copyright">
          <p>&copy; ${t} Полет нормальный. Все права защищены.</p>
        </div>
      </footer>
    `}};Et([gt({type:Object}),St("design:type",Object)],wt.prototype,"user",null),Et([gt({type:Array}),St("design:type",Array)],wt.prototype,"links",null),Et([gt({type:Array}),St("design:type",Array)],wt.prototype,"socialLinks",null),wt=Et([dt("ui-footer")],wt);const Ot=a`
  :host {
    display: block;
  }

  .ui-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .auth-section {
    display: flex;
    gap: 1rem;
  }
`;var Ct=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};let kt=class extends lt{static{this.styles=Ot}render(){return V`
       <header class="ui-header">
      <div class="logo-section">
        <slot name="logo-section"></slot>
      </div>
      <div class="auth-section">
        <slot name="auth-section"></slot>
      </div>
    </header>
    `}};kt=Ct([dt("ui-header")],kt);const Pt=a`
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
        border-radius: 4px;
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
`;var jt=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ut=class extends lt{static{this.styles=Pt}#u="";get value(){return this.#u}set value(t){this.#u=t}#i="";get label(){return this.#i}set label(t){this.#i=t}#g="";get placeholder(){return this.#g}set placeholder(t){this.#g=t}#f="text";get type(){return this.#f}set type(t){this.#f=t}#_=!1;get disabled(){return this.#_}set disabled(t){this.#_=t}#y=!1;get invalid(){return this.#y}set invalid(t){this.#y=t}#m="";get errorMessage(){return this.#m}set errorMessage(t){this.#m=t}#b="";get hint(){return this.#b}set hint(t){this.#b=t}#$="";get prefixIcon(){return this.#$}set prefixIcon(t){this.#$=t}#v="";get suffixIcon(){return this.#v}set suffixIcon(t){this.#v=t}#A=!1;get clearable(){return this.#A}set clearable(t){this.#A=t}#x(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}#E(){this.value="",this.dispatchEvent(new CustomEvent("change",{detail:""})),this.shadowRoot?.querySelector("input")?.focus()}render(){return V`
      <div class="input-container ${this.disabled?"disabled":""} ${this.invalid?"invalid":""}">
        ${this.label?V`<label>${this.label}</label>`:""}
        
        <div class="input-wrapper">
          ${this.prefixIcon?V`<span class="prefix">${this.prefixIcon}</span>`:""}
          
          <input
            type=${this.type}
            placeholder=${this.placeholder}
            .value=${this.value}
            ?disabled=${this.disabled}
            @input=${this.#x}
          >
          
          ${this.suffixIcon?V`<span class="suffix">${this.suffixIcon}</span>`:""}
          
          ${this.clearable&&this.value&&!this.disabled?V`<button class="clear-btn" @click=${this.#E} type="button">×</button>`:""}
        </div>
        
        ${this.hint&&!this.invalid?V`<div class="hint">${this.hint}</div>`:""}
        ${this.invalid&&this.errorMessage?V`<div class="error">${this.errorMessage}</div>`:""}
      </div>
    `}};return jt([gt({type:String}),Rt("design:type",Object)],Ut.prototype,"value",null),jt([gt({type:String}),Rt("design:type",Object)],Ut.prototype,"label",null),jt([gt({type:String}),Rt("design:type",Object)],Ut.prototype,"placeholder",null),jt([gt({type:String}),Rt("design:type",String)],Ut.prototype,"type",null),jt([gt({type:Boolean}),Rt("design:type",Object)],Ut.prototype,"disabled",null),jt([gt({type:Boolean}),Rt("design:type",Object)],Ut.prototype,"invalid",null),jt([gt({type:String,attribute:"error-message"}),Rt("design:type",Object)],Ut.prototype,"errorMessage",null),jt([gt({type:String}),Rt("design:type",Object)],Ut.prototype,"hint",null),jt([gt({type:String,attribute:"prefix-icon"}),Rt("design:type",Object)],Ut.prototype,"prefixIcon",null),jt([gt({type:String,attribute:"suffix-icon"}),Rt("design:type",Object)],Ut.prototype,"suffixIcon",null),jt([gt({type:Boolean}),Rt("design:type",Object)],Ut.prototype,"clearable",null),Ut=jt([dt("ui-input")],Ut),customElements.get("ui-button")||customElements.define("ui-button",mt),customElements.get("ui-card")||customElements.define("ui-card",At),customElements.get("ui-footer")||customElements.define("ui-footer",wt),customElements.get("ui-header")||customElements.define("ui-header",kt),customElements.get("ui-input")||customElements.define("ui-input",Ut),e})()));