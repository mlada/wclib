import type { Meta, StoryObj } from '@storybook/web-components';
 import { html } from 'lit';
import { UiFooter } from '../components';

const meta: Meta<UiFooter> = {
  title: 'Components/UI Footer',
  component: 'ui-footer',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-footer></ui-footer>
  `,
};

export default meta;
type Story = StoryObj<UiFooter>;

// Базовый футер
export const Basic: Story = {
  render: () => html`
    <style>
      .custom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem 0;
      }
      .custom-content section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    </style>
    
    <ui-footer>
      <div class="custom-content" slot="">
        <section>
          <h3>Компания</h3>
          <a href="#">О нас</a>
          <a href="#">Карьера</a>
          <a href="#">Контакты</a>
        </section>
        <section>
          <h3>Ресурсы</h3>
          <a href="#">Документация</a>
          <a href="#">Блог</a>
          <a href="#">Форум</a>
        </section>
        <section>
          <h3>Контакты</h3>
          <span>г. Москва, ул. Примерная, 123</span>
          <span>+7 (123) 456-78-90</span>
          <span>info@example.com</span>
        </section>
      </div>
    </ui-footer>
  `,
};

// Минималистичный футер
export const Minimal: Story = {
  render: () => html`
    <style>
      ui-footer::part(footer) {
        padding: 1rem 0;
        text-align: center;
      }
    </style>
    <ui-footer></ui-footer>
  `,
};

// Футер с социальными иконками
export const WithSocialIcons: Story = {
  render: () => html`
    <style>
      .social-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
      }
      .social-links {
        display: flex;
        gap: 1rem;
      }
      .social-links a {
        color: inherit;
        text-decoration: none;
        font-size: 1.5rem;
      }
    </style>
    
    <ui-footer>
      <div class="social-footer" slot="">
        <div>Раннева МК</div>
        <div class="social-links">
          <a href="#" aria-label="Telegram">📱</a>
          <a href="#" aria-label="VK">📘</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
      </div>
    </ui-footer>
  `,
};

// Темный футер
export const DarkTheme: Story = {
  render: () => html`
    <style>
      .dark-footer {
        --footer-bg: #333;
        --footer-text: #fff;
        --footer-link: #ccc;
      }
      
      ui-footer::part(footer) {
        background-color: var(--footer-bg);
        color: var(--footer-text);
      }
      
      .dark-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
      }
      
      .dark-content a {
        color: var(--footer-link);
        text-decoration: none;
      }
      
      .dark-content a:hover {
        text-decoration: underline;
      }
    </style>
    
    <ui-footer class="dark-footer">
      <div class="dark-content" slot="">
        <section>
          <h3>Продукты</h3>
          <a href="#">Решение 1</a>
          <a href="#">Решение 2</a>
          <a href="#">Решение 3</a>
        </section>
        <section>
          <h3>Поддержка</h3>
          <a href="#">Центр поддержки</a>
          <a href="#">Сообщить о проблеме</a>
          <a href="#">Статус системы</a>
        </section>
        <section>
          <h3>Правовая информация</h3>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
          <a href="#">Лицензии</a>
        </section>
      </div>
    </ui-footer>
  `,
};

// Футер с логотипом
export const WithLogo: Story = {
  render: () => html`
    <style>
      .logo-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;
      }
      .logo {
        width: 150px;
        height: auto;
      }
    </style>
    
    <ui-footer>
      <div class="logo-footer" slot="">
        <img src="https://via.placeholder.com/150x50?text=Логотип" alt="Логотип Раннева МК" class="logo">
        <div>Инновационные решения для вашего бизнеса</div>
      </div>
    </ui-footer>
  `,
};