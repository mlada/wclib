
import { css } from 'lit';

export const styles = css`
  .ui-button {
    font-family: inherit;
    border: none;
    border-radius: var(--ui-button-border-radius);
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  .ui-button--primary {
    color: white;
    background-color: var(--ui-button-primary-color);
  }

  .ui-button--primary:hover {
    background-color: var(--ui-button-primary-hover-color);
  }

  .ui-button--secondary {
    color: var(--ui-button-secondary-text-color);
    background-color: transparent;
    box-shadow: var(--ui-button-secondary-border-color) 0px 0px 0px 1px inset;
  }

  .ui-button--secondary:hover {
    box-shadow: var(--ui-button-secondary-hover-border-color) 0px 0px 0px 1px inset;
  }

  .ui-button--small {
    font-size: var(--ui-button-small-font-size);
    padding: var(--ui-button-small-padding);
  }

  .ui-button--medium {
    font-size: var(--ui-button-medium-font-size);
    padding: var(--ui-button-medium-padding);
  }

  .ui-button--large {
    font-size: var(--ui-button-large-font-size);
    padding: var(--ui-button-large-padding);
  }
`;