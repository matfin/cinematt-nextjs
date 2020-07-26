import React, { useState } from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { components, GlobalStyle } from '../../styles';
import { Container, LayoutHeader, Main, Nav } from './layout.css';

export interface Props {
  children?: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  const [navRevealed, setNavRevealed] = useState<boolean>(false);
  const setBodyOverflow = (overflow: boolean): void => {
    document.body.style.overflow = overflow ? 'auto' : 'hidden';
  };
  const toggleNav = (): void => {
    setNavRevealed(!navRevealed);
    setBodyOverflow(!!navRevealed);
  };
  const dismissNav = (): void => {
    setNavRevealed(false);
    setBodyOverflow(true);
  };

  return (
    <>
      <Head>
        <title>Cinematt</title>
        <meta name="description" content="Personal photography website of Matt Finucane" />
        <meta name="author" content="Matt Finucane" />
      </Head>
      <MDXProvider components={components}>
        <Container>
          <LayoutHeader onMenuButtonClick={toggleNav} navRevealed={navRevealed} />
          <Nav onNavigate={dismissNav} isRevealed={navRevealed} />
          <Main>{children}</Main>
        </Container>
      </MDXProvider>
      <GlobalStyle />
    </>
  );
};

export default Layout;
