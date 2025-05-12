import { UiButton } from './components/UiButton/UiButton';
import { UiCard } from './components/UiCard/UiCard';
import { UiFooter } from './components/UiFooter/UiFooter';
// import { UiHeader } from './components/UiHeader/UiHeader';
// import { UiInput } from './components/UiInput/UiInput';
// import { UiPage } from './components/UiPage/UiPage';

export {
  UiButton,
  UiCard,
  UiFooter,
//   UiHeader,
//   UiInput,
//   UiPage
};

// Register all components
if (!customElements.get('ui-button')) {
  customElements.define('ui-button', UiButton);
}
if (!customElements.get('ui-card')) {
  customElements.define('ui-card', UiCard);
}
if (!customElements.get('ui-footer')) {
  customElements.define('ui-footer', UiFooter);
}
// if (!customElements.get('ui-header')) {
//   customElements.define('ui-header', UiHeader);
// }
// if (!customElements.get('ui-input')) {
//   customElements.define('ui-input', UiInput);
// }
// if (!customElements.get('ui-page')) {
//   customElements.define('ui-page', UiPage);
// }