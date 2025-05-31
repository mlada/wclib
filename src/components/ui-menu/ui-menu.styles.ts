
import { css } from "lit";

export const styles = css`
       

    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
    }

    /* Horizontal menu (default) */
    .menu.horizontal {
      flex-direction: row;
    }

    /* Vertical menu */
    .menu.vertical {
      flex-direction: column;
    }

    /* Menu sizes */
    .menu.small {
      font-size: var(--text-small);
    }

    .menu.medium {
      font-size:var(--text-medium);
    }

    .menu.large {
      font-size: var(--text-large);
    }

    .menu-item {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 4px;
    }

    .menu-item:hover {
      text-decoration: underline;
    }

    .menu-item a {
      color: inherit;
      text-decoration: none;
    }

`;
