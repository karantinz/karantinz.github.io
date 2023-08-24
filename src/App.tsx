import { Header } from "./layout/header/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";
import styled from "styled-components";

export function App() {
  return (
    <div>
      <Particle />

      <Content>
        <Header />
        <Main />
        <Footer />
      </Content>
    </div>
  );
}

const Content = styled.div`
  position: relative;
  z-index: 1;
`