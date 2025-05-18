// @ts-nocheck
// @ts-ignore
/* eslint-disable */
import { LitElement, html, css, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./ui-footer.styles";

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

@customElement("ui-footer")
export class UiFooter extends LitElement {
  static styles: CSSResult = styles;

  @property({ type: Object })
  accessor user: { name: string } | null = null;

  @property({ type: Array })
  accessor links: FooterLinkColumn[] = [
    {
      title: "Компания",
      links: [
        { text: "О нас", url: "/about" },
        { text: "Карьера", url: "/careers" },
        { text: "Контакты", url: "/contact" },
      ],
    },
    {
      title: "Ресурсы",
      links: [
        { text: "Документация", url: "/docs" },
        { text: "Блог", url: "/blog" },
        { text: "Поддержка", url: "/support" },
      ],
    },
    {
      title: "Правовая информация",
      links: [
        { text: "Условия использования", url: "/terms" },
        { text: "Политика конфиденциальности", url: "/privacy" },
        { text: "Cookie", url: "/cookie" },
      ],
    },
  ];

  @property({ type: Array })
  accessor socialLinks: SocialLink[] = [];

  #scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const currentYear = new Date().getFullYear();

    return html`
      <footer class="ui-footer">
        <div class="footer-content">
          <div class="logo-section">
            <slot name="logo-section"></slot>
          </div>

          <div class="links-section">
            ${this.links.map(
              (column) => html`
                <div class="links-column">
                  <h3>${column.title}</h3>
                  <ul>
                    ${column.links.map(
                      (link) => html`
                        <li>
                          <a href=${link.url}>${link.text}</a>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              `
            )}
          </div>

          <div class="actions-section">
            <slot name="actions-section"></slot>
            ${this.socialLinks.length > 0
              ? html`
                  <div class="social-links">
                    ${this.socialLinks.map(
                      (social) => html`
                        <a href=${social.url} target="_blank">
                          <img
                            src=${social.icon}
                            alt=${social.name}
                            width="24"
                            height="24"
                          />
                        </a>
                      `
                    )}
                  </div>
                `
              : ""}
          </div>
        </div>

        <div class="copyright">
          <p>&copy; ${currentYear} Полет нормальный. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}
