import { css } from "lit";

export const styles = css`
  .ui-footer {
    background-color: #f2f2f2;
    padding: 1.5rem 1rem; /* Уменьшаем padding на мобильных */
    margin-top: 1.5rem; /* Меньше отступ сверху */
  }
  
  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 12px; /* Добавляем боковые отступы для маленьких экранов */
  }      
 
  .copyright {
    padding-top: 1rem; /* Используем rem вместо px для адаптивности */
    text-align: center;
    font-size: 0.875rem; /* Чуть уменьшаем текст на мобильных */
  }

  /* Адаптация для планшетов и десктопов */
  @media (min-width: 768px) {
    .ui-footer {
      padding: 2rem;
      margin-top: 2rem;
    }

    .copyright {
      padding-top: 1.125rem;
      font-size: 1rem;
    }
  }
`;