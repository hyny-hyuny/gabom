import { html, LitElement, css } from "lit";
import resetCSS from "./resetCSS";
import indexCSS from "./indexCSS";
import themeCSS from "./themeCSS";

class Header extends LitElement {
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
    console.log();
    return [
      resetCSS,
      indexCSS,
      themeCSS,
      css/* css */ `
        header {
          width: 100%;
          height: 2.75rem; /* 44px */
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        header .back {
          width: 1.5rem;
          height: 1.5rem;
          border: none;
          padding: 0;
          position: absolute;
          left: 1rem;
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
        <h2>${this.pageTitle}</h2>
      `;
    } else if (pageName === Header.pageNames.DETAIL) {
      heading = html``;
    } else {
      heading = html`<h1 class="logo">
        <a href="./../index.html">
          <img src="/logo/horizontal-sm.svg" alt="가봄, 가본 사람들의 리뷰" />
        </a>
      </h1>`;
    }

    return heading;
  }

  renderBackButton(pageName) {
    if (pageName) {
      return html`<button class="back" type="button" aria-label="뒤로가기">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g clip-path="url(#clip0_2949_6558)">
            <g filter="url(#filter0_d_2949_6558)">
              <path d="M17.5098 3.8701L15.7298 2.1001L5.83984 12.0001L15.7398 21.9001L17.5098 20.1301L9.37984 12.0001L17.5098 3.8701Z" fill="#1E1E1E" />
            </g>
          </g>
          <defs>
            <filter id="filter0_d_2949_6558" x="-10.1602" y="-5.8999" width="43.6699" height="51.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2949_6558" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2949_6558" result="shape" />
            </filter>
            <clipPath id="clip0_2949_6558">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>`;
    }
  }

  render() {
    return html/* html */ `<header>${this.renderHeaderContent(this.pageName)} ${this.renderBackButton(this.pageName)}</header> `;
  }
}

customElements.define("c-header", Header);
