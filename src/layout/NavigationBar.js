import { html, css } from "lit";
import IndexCSS from "../styles/indexCSS";

class NavigationBar extends IndexCSS {
  static get styles() {
    return [
      ...IndexCSS.styles,
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
