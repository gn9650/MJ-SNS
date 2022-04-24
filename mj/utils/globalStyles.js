import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Cafe24Ohsquareair';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }


    body {
        font-family : 'Cafe24Ohsquareair';
    }
`;

export default GlobalStyle;
