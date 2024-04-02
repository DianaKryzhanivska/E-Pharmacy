import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-style: normal;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const CommonContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 96px;
    padding-right: 96px;
  }
`;
