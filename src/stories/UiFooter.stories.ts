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
  render: (args) => html`
    <ui-footer
    ></ui-footer>
  `,
};

export default meta;
type Story = StoryObj<UiFooter>;

// Basic footer
export const Basic: Story = {
  render: (args) => html`
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
      .custom-content a {
        color: inherit;
        text-decoration: none;
      }
      .custom-content a:hover {
        text-decoration: underline;
      }
    </style>
    
    <ui-footer>
      <div class="custom-content" slot="content">
        <section>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </section>
        <section>
          <h3>Resources</h3>
          <a href="/docs">Documentation</a>
          <a href="/blog">Blog</a>
          <a href="/forum">Forum</a>
        </section>
        <section>
          <h3>Contact</h3>
          <span>123 Example St, City</span>
          <span>+1 (234) 567-8901</span>
          <span>info@example.com</span>
        </section>
      </div>
    </ui-footer>
  `,
};

// Minimal footer
export const Minimal: Story = {
  render: (args) => html`
    <style>
      ui-footer::part(footer) {
        padding: 1rem 0;
        text-align: center;
        font-size: 0.875rem;
      }
    </style>
    <ui-footer>
      <div slot="content">© ${new Date().getFullYear()} Company Name. All rights reserved.</div>
    </ui-footer>
  `,
};

// Footer with social icons
export const WithSocialIcons: Story = {
  render: (args) => html`
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
        transition: opacity 0.2s;
      }
      .social-links a:hover {
        opacity: 0.8;
      }
    </style>
    
    <ui-footer >
      <div class="social-footer" slot="content">
        <div>© ${new Date().getFullYear()} Brand Name</div>
        <div class="social-links">
          <a href="https://twitter.com" aria-label="Twitter">🐦</a>
          <a href="https://facebook.com" aria-label="Facebook">👍</a>
          <a href="https://youtube.com" aria-label="YouTube">▶️</a>
        </div>
      </div>
    </ui-footer>
  `,
};

// Dark theme footer
export const DarkTheme: Story = {
  render: (args) => html`
    <style>
      .dark-footer {
        --footer-bg: #333;
        --footer-text: #fff;
        --footer-link: #ccc;
        --footer-link-hover: #fff;
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
        color: var(--footer-link-hover);
        text-decoration: underline;
      }
    </style>
    
    <ui-footer class="dark-footer" >
      <div class="dark-content" slot="content">
        <section>
          <h3>Products</h3>
          <a href="/product1">Solution 1</a>
          <a href="/product2">Solution 2</a>
          <a href="/product3">Solution 3</a>
        </section>
        <section>
          <h3>Support</h3>
          <a href="/support">Help Center</a>
          <a href="/contact">Contact Us</a>
          <a href="/status">System Status</a>
        </section>
        <section>
          <h3>Legal</h3>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/licenses">Licenses</a>
        </section>
      </div>
    </ui-footer>
  `,
};

// Footer with logo
export const WithLogo: Story = {
  render: (args) => html`
    <style>
      .logo-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;
        text-align: center;
      }
      .logo {
        width: 150px;
        height: auto;
      }
      .logo-links {
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;
      }
      .logo-links a {
        color: inherit;
        text-decoration: none;
      }
      .logo-links a:hover {
        text-decoration: underline;
      }
    </style>
    
    <ui-footer >
      <div class="logo-footer" slot="content">
        <img src="https://via.placeholder.com/150x50?text=Logo" alt="Company Logo" class="logo">
        <div>Innovative solutions for your business</div>
        <div class="logo-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </ui-footer>
  `,
};