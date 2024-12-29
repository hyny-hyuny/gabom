import { html, css } from "lit";
import IndexCSS from "../../styles/indexCSS";

class ExhibitCard extends IndexCSS {
  static proterties = {
    pageName: { attribute: true },
  };

  static pageNames = {
    REVIEW_DETAIL: "review-detail",
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
          }

          .exhibit-info {
            display: flex;
            flex-flow: column nowrap;
            align-items: start;
            gap: var(--spacing-3);
          }

          .keyword-wrapper {
            background-color: var(--gray-50);
            border-radius: var(--radius-2xs);
            padding: 0.125rem 0.5rem;

            .keyword {
              display: inline;
              margin-left: 0.5rem;
            }
          }

          .badge {
            position: absolute;
            top: 0.25rem;
            left: 0.25rem;
            padding: 0.25rem 0.375rem;
            background-color: var(--green);
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
    return html/* html */ `
      <article class="exhibit-card">
        <a href="/pages/ExhibitDetailPage/">
          <figure>
            <div class="img-wrapper">
              <img style="height: 100%" src="/src/assets/profile/juhyun_park.jpg" alt="전시 이름" />
            </div>
            <figcaption class="exhibit-info">
              <strong class="exhibit-title label-md">소행성이 빛을 내는 방법</strong>

              <div class="keyword-wrapper paragraph-xs">
                <span class="emoji">🗓️</span>
                <p class="keyword">
                  <time datetime="2024-12-01">2024.12.1</time> ~
                  <time datetime="2024-12-24">2024.12.24</time>
                </p>
              </div>

              <div class="keyword-wrapper paragraph-xs">
                <span class="emoji">📍</span>
                <p class="keyword">갤러리헬렌에이</p>
              </div>

              <div class="keyword-wrapper paragraph-xs">
                <span class="emoji">👥</span>
                <p class="keyword">모든 연령 관람 가능</p>
              </div>

              <div class="badge label-xs">전시중</div>

              <p class="review-num paragraph-xs">방문자 리뷰 33</p>
            </figcaption>
          </figure>
        </a>
        <button class="bookmark" type="button" aria-label="북마크 추가" aria-pressed="false">
          <img src="/src/assets/icons/bookmark.svg" alt="" aria-hidden="true" />
        </button>
      </article>
    `;
  }
}

customElements.define("c-exhibit-card", ExhibitCard);
