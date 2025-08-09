import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

// - - - DEFINE ROOT COLORS - - - //
:root {
--primary-color:black;
--secondary-color:#90D5FF;
--third-color:white;
}

// <<< - - - STYLING - - - >>> //
// - - - DEFAULT TEXT STYLING - - - //
h1 {
font-size:350%;
font-weight:600;
color:var(--secondary-color);
}

h2 {
font-size:210%;
font-weight:600;
color:var(--secondary-color);
}

h3 {
font-size:200%;
font-weight:100;
color:var(--secondary-color);
}

p {
font-size:100%;
font-weight:100;
color:var(--third-color);
}

// - - - DEFAULT COMPONENT STYLING - - - //

button {
font-weight:100;
border:solid;
border-width:thin;
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

// - - - BODY - - - //
body {
background-color: var(--primary-color);
color: var(--secondary-color);
font-family: "Noto Sans", sans-serif;
font-weight:100;
}

// <<< - - - COMPONENTS - - - >>> //
// - - - LOGO - - - //

.logoWrap {
width:120px;
object-fit:contain;
}

.logoWrap2 {
width:120px;
object-fit:contain;

@media (min-width: 768px) {
 display: none;
  }
}

// - - - PROJECTCARDS - - - //

.projectImages {
border-radius:5px;
};

.projectHeader {
font-size:245%;
};

// - - - FOOTER CONTENT/SOCIAL LINKS - - - //

.footerContent {
border-radius:5px;
text-decoration:none;
color:var(--secondary-color);
cursor:pointer;
padding:10px;
transition: all 0.25s ease;
display:inline-block;
    };

.footerContent:hover {
    scale:1.1;
    text-decoration:underline;
        };

// - - - LAYOUT/NAVIGATION - - - //

.nav {
    transition: all 0.25s ease;
};

.nav:hover {
scale:1.1;
    text-decoration:underline;
};

.burgerButton {

@media (min-width: 768px) {
 display: none;
}
}

// - - - TECHNOLOGIES - - - //

// - HEADER - //
.techHeader {
color:var(--primary-color);
font-size:210%;
font-weight:600;
text-align:center;
}

.techSubHeader {
color:var(--primary-color);
font-size:200%;
font-weight:100;
text-align: center;
}

// - BODY - //

.techImageScale {
  width: 20%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.techHeaderScale {
font-size:100%;
font-weight:100;
color:var(--primary-color);
}

// <<<- - - PAGES - - ->>> //
// - - - HOME PAGE - - - //

.homeImage {
width:80%;
border-radius:10px;
border:solid;
border-color:var(--secondary-color;);
object-fit:contain;

@media (max-width: 1000px) {
  width:50%;
}
}

// - - - PROJECT PAGE - - - //

.webImage {
width: 40%;
 object-fit:contain;
}

// - - - HOME - - - //

.homeText {
width:230%;

@media (max-width: 1000px) {
  text-align:center;
  width:100%
}
}

// - - - ABOUT - - - //

.aboutText {

@media (max-width: 1100px) {
  text-align:center;
}
}

.aboutImage {
width:130%;
border-radius:10px;
border:solid;
border-color:var(--secondary-color;);
object-fit:contain;

@media (max-width: 1000px) {
  width:50%;
}
}`;

export default GlobalStyle;