import { html } from 'lit';
import '../components/UiButton/UiButton'; // Импорт веб-компонента

export default {
  title: 'Components/UI Button',
  component: 'ui-button', // Важно: имя тега компонента
  argTypes: {
    primary: { control: 'boolean' },
    size: { 
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    label: { control: 'text' }
  },
  render: (args: any) => html`
    <ui-button
      ?primary=${args.primary}
      size=${args.size}
    >
      ${args.label}
    </ui-button>
  `
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'medium'
  }
};