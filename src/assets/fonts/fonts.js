import DongleBold from "assets/fonts/Dongle-Bold.woff2";
import DongleRegular from "assets/fonts/Dongle-Regular.woff2";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Dongle-Regular";
    font-style: normal;
    font-weight: 400;
    /* font-display: fallback; */
    src: local("Dongle"), url(${DongleRegular}) format("woff2");
  }

  @font-face {
    font-family: "Dongle-Bold";
    font-style: bold;
    font-weight: 700;
    /* font-display: fallback; */
    src: local("Dongle"), url(${DongleBold}) format("woff2");
  }
`;

