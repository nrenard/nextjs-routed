import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

	button {
		cursor: pointer;
	}

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    font-family: 'Montserrat', sans-serif;
    background-color: black;
    color: #fff;
  }
`;
