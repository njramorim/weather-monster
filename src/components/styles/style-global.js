import { createGlobalStyle } from 'styled-components';

export const VIEWPORT_MAX_SIZE = 1000;
export const CONTAINER_MAX_WIDTH = VIEWPORT_MAX_SIZE - 100;

const StyleGlobal = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.bodyFontSize};
    background: ${({ theme }) => theme.colors.dark};
    box-sizing: border-box;
    padding: ${({ theme }) => theme.padding.max};
    min-width: 28rem;

    @media screen and (max-width: ${VIEWPORT_MAX_SIZE}px) {
      padding: calc(${({ theme }) => theme.padding.min} / 2);
    }
  }

  a, a:hover, a:visited, a:active {
    color: inherit
  }

  * {
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.cleanColor};
  }
  
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none
  }

  .contentWrapper {
    display: block;
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: ${VIEWPORT_MAX_SIZE}px) {
      max-width: ${CONTAINER_MAX_WIDTH - 300}px;
    }
  }
`;

export default StyleGlobal;
