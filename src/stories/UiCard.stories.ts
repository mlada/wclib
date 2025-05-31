import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { UiCard } from '../components';

const meta: Meta<UiCard> = {
  title: 'Components/UI Card',
  component: 'ui-card',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер карточки',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    title: {
      control: 'text',
      description: 'Заголовок карточки',
    },
    description: {
      control: 'text',
      description: 'Описание карточки',
    },
    imageUrl: {
      control: 'text',
      description: 'URL изображения',
    },
    imageAlt: {
      control: 'text',
      description: 'Альтернативный текст изображения',
    },
    hoverable: {
      control: 'boolean',
      description: 'Эффект при наведении',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    title: 'Заголовок карточки',
    description: 'Это описание карточки. Оно может быть длиннее и содержать больше текста.',
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
    ></ui-card>
  `,
};

export default meta;
type Story = StoryObj<UiCard>;

// Базовые варианты по размерам
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

// Специальные варианты
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
      title="Полноэкранная карточка"
      description="Эта карточка растягивается на всю доступную ширину экрана"
      image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
      hoverable
    >
      <div slot="footer">
        <button>Основное действие</button>
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
    title='Создание сайтов с использованием современных технологий'
       description="Профессионализм и качество в каждой детали"
     >
      <div slot="content">
        <p>Мы проектируем, разрабатываем и запускаем сайты, используя HTML, CSS, JavaScript и CMS. Уделяем внимание адаптивному дизайну, SEO и безопасности.</p>
      </div>
    </ui-card>
  `,
};

export const ThreeSmallCardsInRow: Story = {
  render: () => html`
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
        title="Карточка 1"
        description="Первая маленькая карточка в ряду"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
      ></ui-card>
      
      <ui-card
        size="small"
        title="Карточка 2"
        description="Вторая карточка с более длинным описанием"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
      ></ui-card>
      
      <ui-card
        size="small"
        title="Карточка 3"
        description="Третья карточка в ряду"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
      >
        <div slot="footer">
          <ui-button
            type='secondary'
            size='small'
            label='Перейти' 
          ></ui-button>
        </div>
      </ui-card>
    </div>
  `,
  parameters: {
    layout: 'fullscreen',
  },
};

export const CardsWithDifferentContent: Story = {
  render: () => html`
    <style>
      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 32px;
        padding: 24px;
      }
    </style>
    <div class="cards-grid">
      <ui-card
        size="medium"
        title="Карточка с изображением"
        image-url="https://avatars.mds.yandex.net/get-altay/3986639/2a0000017acd45ba71bd40ef4ad1033fff0c/XXXL"
        hoverable
      >
        <div slot="content">
          <p>Дополнительный контент под описанием</p>
        </div>
      </ui-card>
      
      <ui-card
        size="medium"
        title="Текстовая карточка"
        description="Эта карточка не содержит изображения, только текстовый контент"
        hoverable
      >
        <div slot="footer">
          <ui-button
            type='primary'
            size='small'
            label='Действие 1' 
          ></ui-button>
          <ui-button
            type='secondary'
            size='small'
            label='Действие 2' 
          ></ui-button>
        </div>
      </ui-card>
      
      <ui-card
        size="medium"
        title="Особенная карточка"
        description="Специальное предложение"
        hoverable
      >
        <div slot="content" style="color: var(--theme-color, #ff5722); font-weight: bold;">
          ⭐ Эксклюзивный контент ⭐
        </div>
      </ui-card>
    </div>
  `,
};