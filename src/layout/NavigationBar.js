import { html, LitElement, css } from "lit";
import resetCSS from "./resetCSS";
import "@/components/atoms/NavItem.js";

class NavigationBar extends LitElement {
  static get styles() {
    return [
      resetCSS,
      css`
        nav {
          display: flex;
          flex-direction: column;
          position: fixed;
          bottom: 0;
          width: 100vw;
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

  render() {
    return html`
      <nav>
        <ul>
          <c-nav-item label="전시" pageName="artEventPage" icon="/src/assets/icons/exhibition.svg"></c-nav-item>
          <c-nav-item label="장소" pageName="placePage" icon="/src/assets/icons/place.svg"></c-nav-item>
          <c-nav-item label="리뷰" pageName="reviewPage" icon="/src/assets/icons/review.svg"></c-nav-item>
          <c-nav-item label="MY" pageName="myPage" icon="/src/assets/icons/my.svg"></c-nav-item>
        </ul>
      </nav>
    `;
  }
}

customElements.define("c-nav-bar", NavigationBar);
