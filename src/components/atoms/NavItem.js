import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/indexCSS.js";

class NavItem extends LitElement {
  static properties = {
    label: { attribute: true },
    pageName: { attribute: true },
    pathname: { attribute: true },
    current: { state: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`

        .nav-item-wrapper {
          border-top: 4px solid transparent;

          &.--current {
            color: var(--tertairy);
            border-top: 4px solid var(--primary);
          }
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0.75rem;

        
        }

        span {
          font-size: var(--label-sm);
          font-weight: 500;
        }
      `,
    ];
  }

  checkPathnameEqual() {
    return -1 < this.pathname.indexOf(this.pageName);
  }

  connectedCallback() {
    super.connectedCallback();
    this.current = this.checkPathnameEqual();
  }

  updated() {
    if (this.current) {
      this.shadowRoot.querySelector(".nav-item-wrapper").classList.add("--current");
    }
  }

  renderNavIcon(label) {
    if (label === "전시") {
      return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2905_10292)">
          <path
            d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 11C22 14.31 19.31 17 16 17H14.23C13.95 17 13.73 17.22 13.73 17.5C13.73 17.62 13.78 17.73 13.86 17.83C14.27 18.3 14.5 18.89 14.5 19.5C14.5 20.88 13.38 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C12.28 20 12.5 19.78 12.5 19.5C12.5 19.34 12.42 19.22 12.36 19.15C11.95 18.69 11.73 18.1 11.73 17.5C11.73 16.12 12.85 15 14.23 15H16C18.21 15 20 13.21 20 11C20 7.14 16.41 4 12 4Z"
            fill="currentColor"
          />
          <path d="M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z" fill="currentColor" />
          <path d="M9.5 9C10.3284 9 11 8.32843 11 7.5C11 6.67157 10.3284 6 9.5 6C8.67157 6 8 6.67157 8 7.5C8 8.32843 8.67157 9 9.5 9Z" fill="currentColor" />
          <path d="M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z" fill="currentColor" />
          <path d="M17.5 13C18.3284 13 19 12.3284 19 11.5C19 10.6716 18.3284 10 17.5 10C16.6716 10 16 10.6716 16 11.5C16 12.3284 16.6716 13 17.5 13Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_2905_10292">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg> `;
    }
    if (label === "장소") {
      return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2968_7170)">
          <path
            d="M7.08756 11.0667H5.12264V17.6001H7.08756V11.0667ZM12.9823 11.0667H11.0174V17.6001H12.9823V11.0667ZM21.3332 19.4667H2.6665V21.3334H21.3332V19.4667ZM18.877 11.0667H16.9121V17.6001H18.877V11.0667ZM11.9998 4.77608L17.1184 7.33341H6.88124L11.9998 4.77608ZM11.9998 2.66675L2.6665 7.33341V9.20008H21.3332V7.33341L11.9998 2.66675Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2968_7170">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg> `;
    }
    if (label === "리뷰") {
      return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2905_10339)">
          <path
            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM10.5 14H18V12H12.5L10.5 14ZM14.36 8.13C14.56 7.93 14.56 7.62 14.36 7.42L12.59 5.65C12.39 5.45 12.08 5.45 11.88 5.65L6 11.53V14H8.47L14.36 8.13Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2905_10339">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg> `;
    }
    if (label === "MY") {
      return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.35 18.5C8.66 17.56 10.26 17 12 17C13.74 17 15.34 17.56 16.65 18.5C15.34 19.44 13.74 20 12 20C10.26 20 8.66 19.44 7.35 18.5ZM18.14 17.12C16.45 15.8 14.32 15 12 15C9.68 15 7.55 15.8 5.86 17.12C4.7 15.73 4 13.95 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 13.95 19.3 15.73 18.14 17.12Z"
          fill="currentColor"
        />
        <path
          d="M12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
          fill="currentColor"
        />
      </svg> `;
    }
  }

  render() {
    return html`
      <li class="nav-item-wrapper">
        <a class="nav-item" href="/src/pages/${this.pageName}/">
          ${this.renderNavIcon(this.label)}
          <span>${this.label}</span>
        </a>
      </li>
    `;
  }
}

customElements.define("c-nav-item", NavItem);
