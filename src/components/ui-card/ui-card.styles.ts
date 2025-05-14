import { css } from "lit";

export const styles = css`
 .ui-card {
       border: 1px solid #e1e1e1;
       border-radius: 8px;
       overflow: hidden;
       transition: box-shadow 0.3s ease;
     }
 
     .ui-card.hoverable:hover {
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
     }
 
     .card-header {
       padding: 1rem;
       border-bottom: 1px solid #e1e1e1;
       display: flex;
       align-items: center;
       gap: 0.5rem;
     }
 
     .card-image img {
       width: 100%;
       height: auto;
     }
 
     .card-content {
       padding: 1rem;
     }
 
     .card-actions {
       padding: 1rem;
       border-top: 1px solid #e1e1e1;
       display: flex;
       justify-content: flex-end;
       gap: 0.5rem;
     }
`;
