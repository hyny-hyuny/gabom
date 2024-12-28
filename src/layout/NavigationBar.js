import { html, LitElement, css } from "lit";
import IndexCSS from "../styles/indexCSS";
import "@/components/atoms/NavItem.js";

class NavigationBar extends LitElement {
  static properties = {
    pathname: { state: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        nav {
          display: flex;
          flex-direction: column;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        ul {
          display: flex;
          flex-direction: row;
          padding: 0 0.75rem 0.5rem 0.75rem;
          justify-content: space-around; //!
        }
      `,
    ];
  }

  constructor() {
    super();
    this.pathname = this.getURLPathname();
  }

  getURLPathname() {
    return window.location.pathname;
  }

  render() {
    return html`
      <nav>
        <ul>
          <c-nav-item label="전시" pageName="artEventPage" pathname="${this.pathname}"></c-nav-item>
          <c-nav-item label="장소" pageName="placePage" pathname="${this.pathname}"></c-nav-item>
          <c-nav-item label="리뷰" pageName="reviewPage" pathname="${this.pathname}"></c-nav-item>
          <c-nav-item label="MY" pageName="myPage" pathname="${this.pathname}"></c-nav-item>
        </ul>
      </nav>
    `;
  }
}

customElements.define("c-nav-bar", NavigationBar);
