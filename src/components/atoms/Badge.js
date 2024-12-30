import { css, html } from "lit";
import IndexCSS from "@/styles/indexCSS.js";

class StateBadge extends IndexCSS {
  static properties = {
    ExhibitState: { attribute: true },
  };

  static get styles() {
    return [
      ...IndexCSS.styles,
      css/* css */ `
        .badge {
          position: absolute;
          top: 0.25rem;
          left: 0.25rem;
          padding: 0.125rem 0.375rem;
          border-radius: var(--radius-3xs);
          background-color: var(--green);
        }

        .in-progress {
          color: var(--contents-content-primary);
          background-color: var(--green);
        }

        .done {
          color: var(--white);
          background-color: var(--contents-content-tertiary);
        }

        .to-do {
          color: var(--contents-content-primary);
          background-color: var(--primary);
        }
      `,
    ];
  }

  ExhibitStateText = {
    "to-do": "전시 예정",
    "in-progress": "전시중",
    done: "전시 종료",
  };

  render() {
    return html/* html */ ` <span class="badge label-xs ${this.ExhibitState}">${this.ExhibitStateText[this.ExhibitState]}</span> `;
  }
}

customElements.define("state-badge", StateBadge);
