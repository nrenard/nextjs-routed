import React from "react";

import Link from "next/link";

// import { Container } from './styles';

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>Sobre</a>
    </Link>
  </div>
);

export default Header;
