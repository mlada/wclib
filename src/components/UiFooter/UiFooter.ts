import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './UiFooter.css';

interface FooterLink {
  text: string;
  url: string;
}

interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@customElement('ui-footer')
export class UiFooter extends LitElement {
  static styles = css`${styles}`;

  @property({ type: Object }) user: any = null;
  @property({ type: Array }) links: FooterLinkColumn[] = [
    {
      title: 'Компания',
      links: [
        { text: 'О нас', url: '/about' },
        { text: 'Карьера', url: '/careers' },
        { text: 'Контакты', url: '/contact' }
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { text: 'Документация', url: '/docs' },
        { text: 'Блог', url: '/blog' },
        { text: 'Поддержка', url: '/support' }
      ]
    },
    {
      title: 'Правовая информация',
      links: [
        { text: 'Условия использования', url: '/terms' },
        { text: 'Политика конфиденциальности', url: '/privacy' },
        { text: 'Cookie', url: '/cookie' }
      ]
    }
  ];
  @property({ type: Array }) socialLinks: SocialLink[] = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '/assets/icons/twitter.svg' },
    { name: 'Facebook', url: 'https://facebook.com', icon: '/assets/icons/facebook.svg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '/assets/icons/instagram.svg' }
  ];

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const currentYear = new Date().getFullYear();
    
    return html`
      <footer class="ui-footer">
        <div class="footer-content">
          <div class="logo-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64">
              <path fill="#42ade2" d="M32.9 11s-2.5-1.2-4.6-2.1c-2-.9-2.6-2.1-1.1-2.6c1.4-.5 4.7-.7 7.3-.6c1.1.1 4.6.3 4.6.3c2.6.1 2.8 1 .4 1.8L32.9 11"/>
              <path fill="#dae3ea" d="M8.3 20.4s-2.6 1-2.8 2.2c-.3 1-1.2 14.7 56.7-17.6c3.4-1.9 1.7-4-3-4.5C45-1.1 48.5 0 8.3 20.4z"/>
            </svg>
            <h2>Полет нормальный</h2>
          </div>

          <div class="links-section">
            ${this.links.map((column, index) => html`
              <div key=${index} class="links-column">
                <h3>${column.title}</h3>
                <ul>
                  ${column.links.map((link, linkIndex) => html`
                    <li key=${linkIndex}>
                      <a href=${link.url}>${link.text}</a>
                    </li>
                  `)}
                </ul>
              </div>
            `)}
          </div>

          <div class="actions-section">
            ${!this.user
              ? html`<ui-button size="small" label="Наверх" @click=${this.scrollToTop}></ui-button>`
              : ''}
            ${this.socialLinks.length > 0
              ? html`
                  <div class="social-links">
                    ${this.socialLinks.map((social, index) => html`
                      <a key=${index} href=${social.url}>
                        <img src=${social.icon} alt=${social.name} width="24" height="24" />
                      </a>
                    `)}
                  </div>
                `
              : ''}
          </div>
        </div>

        <div class="copyright">
          <p>&copy; ${currentYear} Полет нормальный. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-footer': UiFooter;
  }
}