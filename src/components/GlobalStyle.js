import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: Inter, sans-serif;
        overflow-x:hidden;
    }
    html{
        @media (max-width: 1700px) {
            font-size: 75%;
        }
       
    }   

    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        font-family: Inter, sans-serif;
        border: 3px solid #23d997;
        background:transparent;
        color:white;
        transition: all 0.5s ease;
        &:hover {
            background-color: #23d997;
            color:white;
        }
       
    }
    h2 {
            font-weight:lighter;
            font-size: 2rem;
            color:white;
        }
    h3{
        color:white;
    }
    h4 {
        font-weight:bold;
        color:white;
        font-size:1.5rem;
    }
    span{
        font-weight: bold;
        color:#32d997;
    }
    a {
        font-size:1.1rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 0.8rem;
        line-height:150%;

    }


    
`;

export default GlobalStyle;