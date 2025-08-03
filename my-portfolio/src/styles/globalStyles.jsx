import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
--primary-color:black;
--secondary-color:#90D5FF;
--third-color:white;
}

body {
background-color: var(--primary-color);
color: var(--secondary-color);
font-family: "Noto Sans", sans-serif;
font-weight:100;
}

h1 {
font-size:50px;
font-weight:100;
}

p {
font-size:25px;
font-weight:100;
}

button {
border:solid;
padding:5px;
border-radius:5px;
background-color:var(--primary-color);
border-color:white;
color:var(--secondary-color);
}`;

export default GlobalStyle;