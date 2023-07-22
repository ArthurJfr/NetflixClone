import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500&family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
body {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(8,33,33,1) 100%);

    overflow-x : hidden;
    height : 100%;
    font-family: 'Poppins', sans-serif;

}
#__next {
    height : 100%;
}
html {
    height : 100%;   
}
`;
export default GlobalStyle;