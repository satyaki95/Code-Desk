import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;
    }

    a, button, svg {
        cursor: pointer !important;
        transition: all 0.1s ease;
    }

    a:hover, button:hover, svg:hover {
        opacity: 0.8;
    }
`;
