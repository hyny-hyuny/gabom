import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/indexCSS.js";

class NavItem extends LitElement {
  static properties = {
    label: { attribute: true },
    pageName: { attribute: true },
    icon: { attribute: true },
    pathname: { attribute: true },
    current: { state: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0.75rem;
        }

        span {
          font-size: var(--label-sm);
          font-weight: 500;
        }

        .--current {
          color: var(--tertairy);
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

  render() {
    return html`
      <li>
        <a href="/src/pages/${this.pageName}/">
          <img src="${this.icon}" />
          <span class="${this.current ? "--current" : ""}">${this.label}</span>
        </a>
      </li>
    `;
  }
}

customElements.define("c-nav-item", NavItem);
