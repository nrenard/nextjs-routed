import React from "react";
import { Container } from "next/app";

import Header from "../components/Header";

import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }) => (
  <Container>
    <GlobalStyle />

    <Header />

    <Component {...pageProps} />
  </Container>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  console.log("second");

  return { pageProps };
};

export default MyApp;
