import { html, css } from "lit";
import IndexCSS from "../../styles/indexCSS";

class BackButton extends IndexCSS {
  static get styles() {
    return [
      ...IndexCSS.styles,
      css/*css */ `
        .back {
          width: 1.5rem;
          height: 1.5rem;
          cursor: pointer;
        }
      `,
    ];
  }
  
  goBack() {
    console.log('뒤로가기');
    window.history.go(-1);
  }
  

  render() {
    return html/* html */ ` 
    <button 
      class="back" 
      type="button" 
      aria-label="뒤로가기"
      @click=${()=>this.goBack()}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g clip-path="url(#clip0_2949_6558)">
          <g filter="url(#filter0_d_2949_6558)">
            <path d="M17.5098 3.8701L15.7298 2.1001L5.83984 12.0001L15.7398 21.9001L17.5098 20.1301L9.37984 12.0001L17.5098 3.8701Z" fill="#1E1E1E" />
          </g>
        </g>
        <defs>
          <filter id="filter0_d_2949_6558" x="-10.1602" y="-5.8999" width="43.6699" height="51.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2949_6558" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2949_6558" result="shape" />
          </filter>
          <clipPath id="clip0_2949_6558">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>`;
  }
}

customElements.define("back-button", BackButton);