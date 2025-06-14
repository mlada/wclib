import { css } from "lit";

export const styles = css`
:host{
position: relative;}
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
    font-size: var(--text-medium);
  }

  .menu.large {
    font-size: var(--text-large);
  }

  .menu-item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: calc(var(--border-radius)/2);
  }

  .menu-item:hover {
    text-decoration: underline;
  }

  .menu-item a {
    color: inherit;
    text-decoration: none;
  }

  /* Mobile styles */
  .burger-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .burger-icon {
    display: block;
    width: 24px;
    height: 2px;
    background: currentColor;
    position: relative;
  }

  .burger-icon::before,
  .burger-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: currentColor;
    left: 0;
  }

  .burger-icon::before {
    top: -6px;
  }

  .burger-icon::after {
    top: 6px;
  }

 @media (max-width: 768px) {
  .burger-button {
    display: block;
    position: relative;
    z-index: 101;
  }

  .menu.horizontal {
    display: none;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    width: 200px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 0.5rem 0;
    z-index: 100;
  }

  .menu.horizontal.open {
    display: flex;
  }
}
`;