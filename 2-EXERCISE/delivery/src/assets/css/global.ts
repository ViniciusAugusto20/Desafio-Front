import { createGlobalStyle, css } from 'styled-components';
import { typography } from './typography';
import { color } from './color';

export const bodyStyles = css`
  html,
  body,
  figure,
  ul,
  table,
  fieldset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.body};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${color.lightSolid};
    color: ${color.lightHight};
  }
  body {
    overflow: hidden;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
