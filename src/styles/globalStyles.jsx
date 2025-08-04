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
font-size:350%;
font-weight:100;
}

p {
font-size:175%;
font-weight:100;
}

button {
font-weight:100;
border:solid;
padding:10px;
margin:5px;
border-radius:15px;
background-color:var(--primary-color);
border-color:var(--secondary-color);
color:var(--secondary-color);
cursor:pointer;
transition: all 0.25s ease;
}

button:hover {
background-color:var(--secondary-color);
color:var(--primary-color);
scale:1.1;
}

.projectImages {
border-radius:5px;
};

.projectDescription {
font-size:140%;
};

.projectTitle {
font-size:245%;
};

.contact {
border-radius:5px;
text-decoration:none;
color:var(--secondary-color);
cursor:pointer;
transition: all 0.25s ease;
display:inline-block;
    };

.contact:hover {
    scale:1.1;
    text-decoration:underline;
        };

.nav {
    transition: all 0.25s ease;
};

.nav:hover{
scale:1.1;
    text-decoration:underline;
};

.aboutImage {
border-radius:10px;
border:solid;
border-color:var(--secondary-color;);
object-fit:contain;
width:100%;
};

.projectsHeader {
display:flex;
flex-direction:row;
justify-content:space-between;
}`;

export default GlobalStyle;