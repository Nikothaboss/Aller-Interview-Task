// ! Styles for hele appen
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colors = {};

export const fonts = {
  lato: "'Lato', sans-serif",
  poppins: "'Poppins', sans-serif",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: ${fonts.lato};
    }
`;

export const AppWrapper = styled.div`
  /* max-width: 1023px; */
  border: 1px solid red;
  /* margin: auto; */

  .row {
    display: flex;
    justify-content: space-between;
  }
`;
