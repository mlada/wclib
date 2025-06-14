import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { UiFooter } from '../components';

/** 
 * A flexible footer component with multiple layout options and customization features.
 * 
 * ### Angular Usage
 * ```typescript
 * import { UiFooterDirective } from 'your-library';
 * 
 * @NgModule({
 *   declarations: [UiFooterDirective],
 * })
 * export class YourModule {}
 * 
 * // In template:
 * <ui-footer>
 *   <div class="custom-content" slot="content">
 *     <!-- Your footer content here -->
 *     <a href="#" (click)="handleInternalClick($event)">Link</a>
 *   </div>
 * </ui-footer>
 * 
 * // In component class:
 * handleInternalClick(event: CustomEvent) {
 *   console.log('External link clicked', event.detail);
 *   // Optionally prevent default and handle navigation programmatically
 * }
 * 
 * ```
 * 
 * ### React Usage
 * ```jsx
 * import { ReactUiFooter } from 'your-library';
 * 
 * function App() {
 * 
 *   return (
 *     <ReactUiFooter>
 *       <div className="custom-content" slot="content">
 *         <a href="#" onClick={(e) => {
 *           e.preventDefault();
 *           console.log('Internal link clicked');
 *         }}>
 *           Internal Link
 *         </a>
 *       </div>
 *     </ReactUiFooter>
 *   );
 * }
 * ```
 */


const meta: Meta<UiFooter> = {
  title: 'Components/UI Footer',
  component: 'ui-footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
};

export default meta;
type Story = StoryObj<UiFooter>;

// 1. Базовый футер с колонками
export const BasicColumns: Story = {
  render: () => html`
    <style>
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem 0;
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          padding: 2rem 1rem;
          gap: 1.5rem;
        }
        
        .footer-section {
          text-align: center;
        }
      }
    </style>
    
    <ui-footer>
      <div class="footer-grid" slot="">
        <div class="footer-section">
          <h4>Компания</h4>
          <div class="footer-links">
            <a href="/about">О нас</a>
            <a href="/careers">Карьера</a>
            <a href="/news">Новости</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Продукты</h4>
          <div class="footer-links">
            <a href="/features">Возможности</a>
            <a href="/pricing">Цены</a>
            <a href="/integrations">Интеграции</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Поддержка</h4>
          <div class="footer-links">
            <a href="/help">Центр помощи</a>
            <a href="/contact">Контакты</a>
            <a href="/status">Статус системы</a>
          </div>
        </div>
      </div>
    </ui-footer>
  `
};

// 2. Минималистичный футер
export const Minimal: Story = {
  render: () => html`
    <style>
      .minimal-footer {
        text-align: center;
        padding: 1.5rem 1rem;
        font-size: 0.875rem;
        color: #666;
      }
    </style>
    
    <ui-footer>
      
    </ui-footer>
  `
};

// 3. Футер с логотипом и соцсетями
export const BrandFooter: Story = {
  render: () => html`
    <style>
      .brand-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 1rem 0rem;
        text-align: center;
      }
      
      .logo {
        width: 150px;
        height: auto;
      }
      
      .social-links {
        display: flex;
        gap: 1.5rem;
      }
      
      .legal-links {
        display: flex;
        gap: 1rem;
        font-size: 0.875rem;
      }
      
      @media (max-width: 480px) {
        .legal-links {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    </style>
    
    <ui-footer>
      <div class="brand-footer" slot="">
        <img src="https://cdn.culture.ru/images/7ecb6c98-8ad0-5621-bced-2450858713ca" alt="Логотип компании" class="logo">
        
        <div class="social-links">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
        
        <div class="legal-links">
          <a href="/privacy">Конфиденциальность</a>
          <a href="/terms">Условия</a>
          <a href="/cookies">Cookies</a>
        </div>
        
      </div>
    </ui-footer>
  `
};

// 4. Темный футер с CTA
export const DarkWithCTA: Story = {
  render: () => html`
    <style>
      .dark-footer {
        --bg-color: #1a1a1a;
        --text-color: #fff;
        --link-color: #ccc;
        --link-hover: #fff;
        --cta-bg: #0066ff;
      }
      
      ui-footer::part(footer) {
        background: var(--bg-color);
        color: var(--text-color);
      }
      
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      
      .cta-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      
      .cta-button {
        background: var(--cta-bg);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        display: inline-block;
        width: fit-content;
      }
      
      .links-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      .footer-links {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
      }
        
      @media (max-width: 768px) {
        .footer-content {
          grid-template-columns: 1fr;
        }
        
        .links-grid {
          grid-template-columns: 1fr;
        }
      }
      
    </style>
    
    <ui-footer class="dark-footer">
      <div class="footer-content" slot="">
        <div class="cta-section">
          <h4>Готовы начать?</h4>
          <p>Зарегистрируйтесь сейчас и получите 14-дневный бесплатный период</p>
          <ui-button type="primary" size="medium" label="Primary Button"></ui-button>
        </div>
        
        <div class="links-grid">
          <div>
            <h4>Продукт</h4>
            <div class="footer-links">
              <a href="/features">Функции</a>
              <a href="/pricing">Цены</a>
              <a href="/demo">Демо</a>
            </div>
          </div>
          
          <div>
            <h4>Ресурсы</h4>
            <div class="footer-links">
              <a href="/blog">Блог</a>
              <a href="/guides">Гайды</a>
              <a href="/webinars">Вебинары</a>
            </div>
          </div>
          
          <div>
            <h4>Компания</h4>
            <div class="footer-links">
              <a href="/about">О нас</a>
              <a href="/careers">Карьера</a>
              <a href="/contact">Контакты</a>
            </div>
          </div>
        </div>
      </div>
    </ui-footer>
  `
};

// 5. Футер с картой сайта
export const SitemapFooter: Story = {
  render: () => html`
    <style>
      .sitemap-footer {
        max-width: 1400px;
        margin: 0 auto;
        padding: 3rem 1rem;
      }
      
      .sitemap-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
      
      .sitemap-section h3 {
        margin-bottom: 1.5rem;
      }
      
      .sitemap-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      
      .footer-bottom {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      @media (max-width: 1024px) {
        .sitemap-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 600px) {
        .sitemap-grid {
          grid-template-columns: 1fr;
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
    </style>
    
    <ui-footer>
      <div class="sitemap-footer" slot="">
        <div class="sitemap-grid">
          <div class="sitemap-section">
            <h4>Продукты</h4>
            <div class="sitemap-links">
              <a href="/product1">Продукт 1</a>
              <a href="/product2">Продукт 2</a>
              <a href="/product3">Продукт 3</a>
              <a href="/all-products">Все продукты</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Решения</h4>
            <div class="sitemap-links">
              <a href="/solution1">Для бизнеса</a>
              <a href="/solution2">Для образования</a>
              <a href="/solution3">Для госсектора</a>
              <a href="/all-solutions">Все решения</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Ресурсы</h4>
            <div class="sitemap-links">
              <a href="/blog">Блог</a>
              <a href="/case-studies">Кейсы</a>
              <a href="/webinars">Вебинары</a>
              <a href="/documentation">Документация</a>
            </div>
          </div>
          
          <div class="sitemap-section">
            <h4>Компания</h4>
            <div class="sitemap-links">
              <a href="/about">О нас</a>
              <a href="/careers">Карьера</a>
              <a href="/partners">Партнеры</a>
              <a href="/contact">Контакты</a>
            </div>
          </div>
        </div>
         
      </div>
    </ui-footer>
  `
};