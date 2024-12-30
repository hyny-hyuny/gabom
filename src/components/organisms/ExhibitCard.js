import { html, css } from "lit";
import IndexCSS from "@/styles/indexCSS";

import "@/components/atoms/KeywordTag.js";
import "@/components/atoms/Badge.js";
import "@/components/atoms/BookmarkButton.js";

class ExhibitCard extends IndexCSS {
  static properties = {
    pageName: { attribute: true },
    exhibitTitle: { attribute: true },
    startDate: { attribute: true },
    endDate: { attribute: true },
    exhibitPlace: { attribute: true },
    ageRange: { attribute: true }, // all, 12, 15, 19
    reviewNum: { attribute: true }, // number
  };

  static pageNames = {
    MAIN: "main",
    REVIEW_DETAIL: "review-detail",
  };

  ageRangeBadge = {
    all: "전체 연령 관람 가능",
    12: "12세 이상 관람 가능",
    15: "15세 이상 관람 가능",
    19: "19세 이상 관람 가능",
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css/* css */ `
        .exhibit-card {
          position: relative;

          figure {
            display: flex;
            gap: var(--spacing-3);
          }

          .img-wrapper {
            width: 6.25rem; /* 100px */
            max-height: 148px;
            aspect-ratio: 1 / 1.38;
            overflow: hidden;
            border-radius: var(--radius-2xs);
            display: flex;
            justify-content: center;
          }

          .exhibit-info {
            display: flex;
            flex-flow: column nowrap;
            align-items: start;
            gap: var(--spacing-3);
          }

          .review-num {
            color: var(--gray-500);
          }

          .bookmark {
            position: absolute;
            left: 0.375rem;
            bottom: 0.375rem;
          }
        }
      `,
    ];
  }

  render() {
    console.log(this.exhibitTitle);
    return html/* html */ `
      <article class="exhibit-card">
        <a href="/pages/ExhibitDetailPage/">
          <figure>
            <div class="img-wrapper">
              <img style="height: 100%" src="/src/assets/profile/juhyun_park.jpg" alt="${this.exhibitTitle}" />
            </div>
            <figcaption class="exhibit-info">
              <strong class="exhibit-title label-md">${this.exhibitTitle}</strong>

              <c-keyword-tag type="date" startDate=${this.startDate} endDate=${this.endDate}></c-keyword-tag>

              <c-keyword-tag type="address" label=${this.exhibitPlace}> </c-keyword-tag>

              <c-keyword-tag type="range" label=${this.ageRangeBadge[this.ageRange]}></c-keyword-tag>

              <state-badge ExhibitState="in-progress"></state-badge>

              <p class="review-num paragraph-xs">방문자 리뷰 ${this.reviewNum}</p>
            </figcaption>
          </figure>
        </a>
        <c-bookmark-button class="bookmark"></c-bookmark-button>
      </article>
    `;
  }
}

customElements.define("c-exhibit-card", ExhibitCard);
