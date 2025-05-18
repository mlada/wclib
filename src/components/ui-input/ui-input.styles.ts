
import { css } from "lit";

export const styles = css`
  .input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
  
      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
  
      input {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
  
      .prefix, .suffix {
        position: absolute;
        padding: 0 0.5rem;
      }
  
      .prefix {
        left: 0;
      }
  
      .suffix {
        right: 0;
      }
  
      .clear-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0 0.5rem;
      }
`;
