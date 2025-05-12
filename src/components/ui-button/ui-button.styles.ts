// ui-button.styles.ts
import { css } from 'lit';

export const buttonStyles = css`
  .ui-button {
    font-family: inherit;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  .ui-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  .ui-button--primary:hover {
    background-color:rgb(16, 162, 253);
  }

  .ui-button--secondary {
    color: #333333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  .ui-button--secondary:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset;
  }

  .ui-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  .ui-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  .ui-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;