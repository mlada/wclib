import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { UiCard } from '../components';

/**
 * A versatile card component with multiple layout options and customization features.
 * 
 * ### Angular Usage
 * ```typescript
 * import { UiCardDirective } from 'your-library';
 * 
 * @NgModule({
 *   declarations: [UiCardDirective],
 * })
 * export class YourModule {}
 * 
 * // In template:
 * <ui-card 
 *   [title]="'Card Title'"
 *   [description]="'Card description'"
 *   [size]="'medium'"
 *   [imageUrl]="'path/to/image.jpg'"
 *   [hoverable]="true"
 * >
 *   <div slot="content">Additional content</div>
 *   <div slot="footer">
 *     <button (click)="handleButtonClick($event)">Action</button>
 *   </div>
 * </ui-card>
 * 
 * 
 * handleButtonClick(event: Event) {
 *   event.stopPropagation();
 *   console.log('Button clicked', event);
 * }
 * ```
 * 
 * ### React Usage
 * ```jsx
 * import { ReactUiCard } from 'your-library';
 * 
 * function App() {
 * 
 *   return (
 *     <ReactUiCard
 *       title="Card Title"
 *       description="Card description"
 *       size="medium"
 *       imageUrl="path/to/image.jpg"
 *       hoverable
 *     >
 *       <div slot="content">Additional content</div>
 *       <div slot="footer">
 *         <button onClick={(e) => {
 *           e.stopPropagation();
 *           console.log('Button clicked');
 *         }}>
 *           Action
 *         </button>
 *       </div>
 *     </ReactUiCard>
 *   );
 * }
 * ```
 */
const meta: Meta<UiCard> = {
  title: 'Components/UI Card',
  component: 'ui-card',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Card size variant',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    title: {
      control: 'text',
      description: 'Card header text',
    },
    description: {
      control: 'text',
      description: 'Card description text',
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL for card',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for card image',
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable hover effects',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onclick: {
      action: 'clicked',
      description: 'Card click event handler',
    },
  },
  args: {
    title: 'Card Title',
    description: 'This is a card description. It can contain more detailed text content.',
    size: 'medium',
    hoverable: true,
  },
  render: (args) => html`
    <ui-card
      title=${args.title}
      description=${args.description}
      size=${args.size}
      image-url=${args.imageUrl}
      image-alt=${args.imageAlt}
      ?hoverable=${args.hoverable}
      @click=${args.onclick}
    ></ui-card>
  `,
};

export default meta;
type Story = StoryObj<UiCard>;

// Size variants
export const Small: Story = {
  args: {
    size: 'small',
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL',
  },
};

// Special variants
export const FullWidthCard: Story = {
  render: (args) => html`
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
        <button @click=${(e: Event) => {
          e.stopPropagation();
          console.log('Button clicked');
        }}>Primary Action</button>
      </div>
    </ui-card>
  `,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Horizontal: Story = {
  render: (args) => html` 
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
  `,
};

export const ThreeSmallCardsInRow: Story = {
  render: (args) => html`
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
            @click=${(e: Event) => {
              e.stopPropagation();
              console.log('Button clicked');
            }}
          ></ui-button>
        </div>
      </ui-card>
    </div>
  `,
  parameters: {
    layout: 'fullscreen',
  },
};