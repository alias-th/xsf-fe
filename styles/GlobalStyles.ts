"use client";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-1: #252525;
    --color-2: #E5E3CD;
    --color-3: #D9D9D9;
    --color-4: #BCCCC3;
    --color-5: #BCBCC0; // placeholder
    --color-6: #F3F1F2; // Badge background
    --color-7: #E13B30; // Badge text
    --border-1: #D9D9D9; // input border
    --text: #000000;
  }

  html, body {
    width: 100%;
    height: 100%;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    font-family: 'Prompt', 'Poppins', sans-serif;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
