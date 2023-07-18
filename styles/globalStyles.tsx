import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
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
export default GlobalStyle