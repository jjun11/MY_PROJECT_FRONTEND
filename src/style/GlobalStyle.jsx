import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        font-family: 'Noto Sans KR', sans-serif;
    }

    html {
        font-size: 10px;   
    }

    :root {
        --maingreen: #61e6ca;
        --mainblue: #008bff;
        --mainsky: #82ccff;
        --mainolive: #97b0aa;
        --maindarkgreen: #354b45
        --darknavy: #0f222d;
    }
`;

export default GlobalStyle;
