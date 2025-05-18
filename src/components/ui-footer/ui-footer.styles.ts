
import { css } from "lit";

export const styles = css`
  .ui-footer {
        background-color: #f5f5f5;
        padding: 2rem;
        margin-top: 2rem;
      }
  
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }
  
      .links-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
      }
  
      .links-column h3 {
        margin-top: 0;
      }
  
      .links-column ul {
        list-style: none;
        padding: 0;
      }
  
      .links-column a {
        color: inherit;
        text-decoration: none;
      }
  
      .copyright {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #e1e1e1;
      }
  
      .actions-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }
  
      .social-links {
        display: flex;
        gap: 1rem;
      }
`;
