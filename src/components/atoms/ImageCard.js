import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/IndexCSS";
import "@/components/atoms/BookmarkButton";

class ImageCard extends LitElement {
  static properties = {
    img: { attribute: true },
    alt: { attribute: true },
    width: { attribute: true },
    height: { attribute: true },
    title: { attribute: true },
    description: { attribute: true },
    bookmark: { attribute: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        .img-container {
          background-color: var(--contents-content-tertiary);
          width: 4.5rem; /* 72px */
          height: 4.5rem; /* 72px */
          border-radius: 0.25rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .bookmark-container {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0.25rem;
          }

          .text-container {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            color: rgba(255, 255, 255, 0.8);

            .description {
              font-size: var(--paragraph-xs);
              font-weight: 400;
            }

            .title {
              font-size: var(--heading-md);
              font-weight: 700;
            }
          }
        }
      `,
    ];
  }

  updated(changedProperties) {
    super.update(changedProperties);

    const imgContainer = this.shadowRoot.querySelector(".img-container");
    imgContainer.style.width = this.width;
    imgContainer.style.height = this.height;
  }

  render() {
    return html`
      <figure class="img-container">
        <img src="${this.img}" alt=${this.alt} />

        ${this.bookmark &&
        html` <div class="bookmark-container">
          <c-bookmark-button />
        </div>`}

        <figcaption class="text-container">
          <span class="description">${this.description}</span>
          <span class="title">${this.title}</span>
        </figcaption>
      </figure>
    `;
  }
}

customElements.define("c-image-card", ImageCard);
