import { html, css } from "lit";
import IndexCSS from "../styles/indexCSS";

import "../components/atoms/BackButton";

class Header extends IndexCSS {
  static properties = {
    pageName: { attribute: true },
    pageTitle: { attribute: true },
  };

  static pageNames = {
    MAIN_DEPTH: "main-depth",
    DEPTH: "depth",
    DETAIL: "detail",
  };

  constructor() {
    super();
    this.pageName = "";
    this.pageTitle = "";
  }

  static get styles() {
    
    console.log(...IndexCSS.styles);
    return [
      ...IndexCSS.styles,
      css/* css */ `
        header {
          width: 100%;
          height: 2.75rem; /* 44px */
          padding: 0 var(--spacing-6); /* 0 16px */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        back-button {
          width: 100%;
          position: absolute;
          left: var(--spacing-6); /* 16px */
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      `,
    ];
  }

  renderHeaderContent(pageName) {
    let heading;

    if (pageName === Header.pageNames.DEPTH) {
      heading = html`
        <h1 class="sr-only">가봄</h1>
        <h2 class="label-md">${this.pageTitle}</h2>
      `;
    } else if (pageName === Header.pageNames.DETAIL) {
      heading = html``;
    } else {
      heading = html` <h1 class="logo">
        <a href="./../index.html">
          <img src="/logo/horizontal-sm.svg" alt="가봄, 가본 사람들의 리뷰" />
        </a>
      </h1>`;
    }

    return heading;
  }

  renderBackButton(pageName) {
    if (pageName) {
      return html` <back-button></back-button> `;
    }
  }

  render() {
    return html/* html */ ` <header>${this.renderHeaderContent(this.pageName)} ${this.renderBackButton(this.pageName)}</header> `;
  }
}

customElements.define("c-header", Header);
