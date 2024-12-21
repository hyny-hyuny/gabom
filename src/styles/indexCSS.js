import { LitElement } from "lit";
import resetCSS from "./resetCSS";
import baseCSS from "./baseCSS";
import themeCSS from "./themeCSS";

class IndexCSS extends LitElement {
  static get styles() {
    return [resetCSS, baseCSS, themeCSS];
  }
}

export default IndexCSS;
