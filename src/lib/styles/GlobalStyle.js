import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset} //styled-reset 설치, 추가
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Orbit', sans-serif;
    }
    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
