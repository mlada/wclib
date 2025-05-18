 
import { css } from "lit";

export const styles = css`
  .ui-card {
    border: 1px solid var(--ui-card-border-color);
    border-radius: var(--ui-card-border-radius);
    overflow: hidden;
    transition: var(--ui-card-transition);
    background-color: var(--ui-card-bg-color);
  }

  .ui-card.hoverable:hover {
    box-shadow: var(--ui-card-shadow-hover);
  }

  .card-header {
    padding: var(--ui-card-padding);
    border-bottom: 1px solid var(--ui-card-border-color);
    display: flex;
    align-items: center;
    gap: var(--ui-card-gap);
  }

  .card-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  .card-content {
    padding: var(--ui-card-padding);
  }

  .card-actions {
    padding: var(--ui-card-padding);
    border-top: 1px solid var(--ui-card-border-color);
    display: flex;
    justify-content: flex-end;
    gap: var(--ui-card-gap);
  }
`;
