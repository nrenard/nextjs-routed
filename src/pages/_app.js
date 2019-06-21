import React from "react";
import { Container } from "next/app";

import Header from "../components/Header";

import GlobalStyle from "../styles/global";

const App = ({ Component, pageProps }) => (
  <Container>
    <GlobalStyle />

    <Header />

    <Component {...pageProps} />
  </Container>
);

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
