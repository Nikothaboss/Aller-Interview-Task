// ! Styles for hele appen
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
    }

    a{
      text-decoration: none;
      color: white;
    }
`;

export const width = {
  large: 1023,
};

export const AppWrapper = styled.div`
  border: 1px solid red;
  max-width: 1023px;
  margin: auto;
  padding: 0.4rem;

  .row {
    display: flex;
    justify-content: space-between;
  }

  .article {
    height: 380px;
    overflow: hidden;
    /* margin-bottom: 1rem; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0 1 auto;
    margin: 0.1rem;
    img {
      width: 100%;
      object-fit: cover;
    }

    .title {
      background: black;
      color: white;
      height: 100%;
      padding: 1rem;

      h2 {
        font-size: 1.5rem;
      }
    }
  }

  textarea {
    height: 90%;
  }
`;
