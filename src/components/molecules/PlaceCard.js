import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/indexCSS.js";
import "@/components/atoms/ImageCard";
import "@/components/atoms/KeywordTag";
import "@/components/atoms/BookmarkButton";

class PlaceCard extends LitElement {
  static properties = {
    name: { attribute: true },
    addressKeyword: { attribute: true },
    img: { attribute: true },
    isBookmarked: { state: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        .place-card {
          display: flex;
          flex-direction: row;
          border-radius: 0.5rem;
          gap: 0.75rem;
          padding: 0.75rem;
          align-items: center;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;

          .name {
            color: var(--contents-content-primary);
            font-size: var(--label-md);
          }
        }
      `,
    ];
  }


  render() {
    return html`
      <article class="place-card">
        <c-image-card width="4rem" height="4rem" img="${this.img}"></c-image-card>

        <div class="text-container">
          <span class="name">${this.name}</span>
          <c-keyword-tag type="address" label="${this.addressKeyword}"></c-keyword-tag>
        </div>

        <c-bookmark-button isBookmarked="${this.isBookmarked}"></c-bookmark-button>
      </article>
    `;
  }
}

customElements.define("c-place-card", PlaceCard);
