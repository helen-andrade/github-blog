import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color:  ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["text"]};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6; 
  }
`;
