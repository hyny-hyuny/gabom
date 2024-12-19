import { css, html, LitElement } from "lit";
import resetCSS from "../../Layout/resetCSS";

class NavItem extends LitElement {
  static properties = {
    label: { attribute: true },
    pageName: { attribute: true },
    icon: { attribute: true },
  };

  static get styles() {
    return [
      resetCSS,
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
      `,
    ];
  }

  render() {
    return html`
      <li>
        <a href="/src/pages/${this.pageName}/">
          <img src="${this.icon}" />
          <span>${this.label}</span>
        </a>
      </li>
    `;
  }
}

customElements.define("c-nav-item", NavItem);
