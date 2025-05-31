
import { css } from "lit";

export const styles = css`
 :host {
    display: block;
    position: relative;
    z-index: 100;
  }

  .ui-header {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    z-index: 100;
    width: 100%;
  }

  .ui-header.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height, 64px);
    padding: 0 var(--header-padding, 24px);
    max-width: var(--header-max-width, 1440px);
    margin: 0 auto;
  }
 
`;
