import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,900&display=swap');

html{
    box-sizing:border-box;
}
*,*::after,*::before{
    box-sizing: border-box;
}

body {
    font-family: 'Nunito', sans-serif;
}
a,button{
    font-family: 'Nunito', sans-serif;
    color: inherit;
    text-decoration: none;
}
 `;