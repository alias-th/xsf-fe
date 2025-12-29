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
    --color-8: #6C6C70; // Carousel active dot
    --color-9: #D70015; // Discount badge background
    --color-10: #00990D; // In stock text
    --color-11: #363638; // footer
    --color-12: #8E8E93; // footer text
    --color-13: #005FCC; // link text
    --color-14: #E04132; // red button background
    --border-1: #D9D9D9; // input border
    --white-1: #FFFFFF;
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
