
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type StoryCardProps = {
  header?: string;
  icon?: string;
  imageUrl?: string;
  imageAlt?: string;
  hoverable?: boolean;
  content?: unknown;
  actions?: unknown;
};

const meta: Meta<StoryCardProps> = {
  title: 'Components/UI Card',
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    icon: { control: 'text' },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    hoverable: { control: 'boolean' },
  },
  render: (args) => html`
    <ui-card
      header=${args.header}
      icon=${args.icon}
      image-url=${args.imageUrl}
      image-alt=${args.imageAlt}
      ?hoverable=${args.hoverable}
    >
      ${args.content || 'Card content goes here'}
      ${args.actions ? html`<div slot="actions">${args.actions}</div>` : ''}
    </ui-card>
  `,
} as Meta;

export default meta;

type Story = StoryObj<StoryCardProps>;

// Примеры Story остаются аналогичными