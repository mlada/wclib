
import { css } from "lit";

export const styles = css`
   .card {
      overflow: hidden;      
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card--small {
      max-width: 320px;
    }

    .card--xs {
      max-width: 320px;
    }

    .card--medium {
      max-width: 640px;
    }

    .card--large {
      max-width: 1280px;
      text-align: center;
    }      

    .card.hoverable {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border-radius: 8px;
      cursor: pointer;
    }

    .card.hoverable:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card--xs .card-image {
      width: 80px;
      height: auto;
      display: block;
      text-align: center;
      margin: 0 auto;
    }

    .card-content {
      padding: 16px;
      flex-grow: 1;
    }
      
    .card-content--dark{
      color: var(--theme-text-color, #333);
    }

    .card-content--light{
      color: var(--theme-text-light-color, #fff);
    }

    .card-title {
      margin: 0 0 8px 0;
      font-size: var(--text-h3);
      margin: 8px 0;
    }

    .card--large .card-title { 
      font-size: var(--text-h1);  
      font-weight: 700;  
      margin: 24px 0;
    } 

    .card--medium .card-title { 
      font-size: var(--text-h2);    
      font-weight: 700;  
      text-align: center;
      margin: 16px 0;
    }     
    .card-description {
      margin: 0;
      font-size: var(--text-small);    
      line-height: 1.5;
      margin: 0 0 8px 0;
    }

    .card--large .card-description { 
      font-size: var(--text-large);    
      margin: 0 0 24px 0;
     } 

    .card--medium .card-description { 
      font-size: var(--text-medium);    
      margin: 0 0 16px 0;
     }    

    .card--xs .card-description { 
      text-align: start;
    }    

    .card--horizontal {
      flex-direction: row;
    }

    .card--horizontal .card-content {
      width: 50%;
      padding-right: 40px;
    }

    .card--horizontal .card-title {
      text-align: start;
    }

    .card--horizontal .card-description {
      text-align: start;
    }

    .card--horizontal ::slotted([slot="content"]) {     
      width: 50%;
    }
    ::slotted([slot="content"]) {
      display: flex;
      align-items: center;
      justify-content: center; 
      text-align: start;
    }

    ::slotted([slot="footer"]) {
      padding: 12px 16px;
      border-top: 1px solid #eee;
      background: #f9f9f9;
    }
`;
