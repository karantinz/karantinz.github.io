import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1420px;
  padding: 0 10px;

  li {
    list-style: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #191919;
    color: #fff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
