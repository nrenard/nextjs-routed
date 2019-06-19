import React, { Fragment } from "react";
import Head from "next/head";

import Link from "next/link";

// import { Container } from './styles';

const pages = () => (
  <Fragment>
    <Head>
      <title>Sobre</title>
    </Head>

    <div>About</div>

    <Link href="/">
      <a>espresso product</a>
    </Link>
  </Fragment>
);

pages.getInitialProps = () => {
  console.log("first");
  return {};
};

export default pages;
