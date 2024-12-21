import { css } from "lit";

export default css`
  * {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }

  /* A11y  */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  body {
    background-color: #f8e7ff;
  }

  .app-wrapper {
    background-color: white;
    min-width: 20rem; /* 320px */
    max-width: 31.25rem; /* 500px */
    height: 100vh;
    margin: 0 auto;
  }
`;