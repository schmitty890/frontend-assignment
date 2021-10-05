import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { MovieProvider } from "../contexts/movieContext";
import Header from "../components/Header/Header";
import Grid from "../components/Grid/Grid";
import Breakpoints from "../helpers/breakpoints";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }
`;

const Wrapper = styled.section`
  padding: 1em;
  @media ${Breakpoints.device.tablet} {
    padding: 4em;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MovieProvider>
        <Wrapper>
          <Header />
          <Grid />
        </Wrapper>
      </MovieProvider>
    </>
  );
};

export default App;
