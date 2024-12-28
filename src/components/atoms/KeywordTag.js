import { css, html, LitElement } from "lit";
import IndexCSS from "@/styles/indexCSS.js";

class KeywordTag extends LitElement {
  static properties = {
    label: { attribute: true },
    startDate: { attribute: true }, // 2024-12-25
    endDate: { attribute: true }, // 2024-12-26
    type: { attribute: true }, // date, address, range
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css`
        .keyword-tag {
          display: inline;
          background-color: var(--gray-50);
          border-radius: var(--radius-2xs);
          padding: 0.375rem 0.5rem;
          font-size: var(--paragraph-xs);

          .keyword {
            display: inline;
          }
        }
      `,
    ];
  }

  createTimeTag(date) {
    return html` <time datetime=${date}>${date.replaceAll("-", ". ")}</time> `;
  }

  iconByType = {
    date: "🗓️",
    address: "📍",
    range: "👥",
  };

  render() {
    const { iconByType, type, startDate, endDate, label, createTimeTag } = this;

    return html/* html */ `
      <div class="keyword-tag">
        <span class="keyword-emoji">${iconByType[type]}</span>
        <p class="keyword">${type === "date" ? html`${createTimeTag(startDate)}<span> ~ </span>${createTimeTag(endDate)}</time>` : html`<span>${label}</span>`}</p>
      </div>
    `;
  }
}

customElements.define("c-keyword-tag", KeywordTag);
