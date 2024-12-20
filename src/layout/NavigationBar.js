import { html, LitElement, css } from "lit";
import resetCSS from "./resetCSS";

class NavigationBar extends LitElement {
  static get styles() {
    return [
      resetCSS,
      css`
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        li {
          padding: 1rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/src/pages/artEventPage/">전시</a></li>
          <li><a href="/src/pages/placePage/">장소</a></li>
          <li><a href="/src/pages/reviewPage/">리뷰</a></li>
          <li><a href="/src/pages/myPage/">저장</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("c-nav-bar", NavigationBar);
