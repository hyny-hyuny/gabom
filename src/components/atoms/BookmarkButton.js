import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/indexCSS.js";

class BookmarkButton extends LitElement {
  static properties = {
    isBookmarked: { attribute: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        .bookmark-button {
          cursor: pointer;
          color: var(--gray-100);

          &.--is-bookmarked {
            color: var(--primary);
          }
        }
      `,
    ];
  }

  toggleBookmark() {
    this.shadowRoot.querySelector(".bookmark-button").classList.toggle("--is-bookmarked");
  }

  updated() {
    if (this.isBookmarked) {
      this.shadowRoot.querySelector(".bookmark-button").classList.add("--is-bookmarked");
    }
  }

  clickBookmark() {
    this.toggleBookmark();
  }

  render() {
    return html`
      <button class="bookmark-button" type="button" @click="${this.clickBookmark}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2915_6222)">
            <path d="M6.00977 2C4.91431 2 4.00977 2.9026 4.00977 3.99805L4 22L12 19L20 22V20.5566V4C20 2.90694 19.0931 2 18 2H6.00977Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_2915_6222">
              <rect width="24" height="24" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      </button>
    `;
  }
}

customElements.define("c-bookmark-button", BookmarkButton);
