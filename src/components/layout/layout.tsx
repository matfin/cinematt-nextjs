import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Photo } from 'models/interfaces';
import { components, GlobalStyle } from 'styles';
import Meta from 'components/meta/meta';
import { Container, LayoutHeader, Main, Nav } from './layout.css';

export interface Props {
  children?: JSX.Element;
  titlePhoto?: Photo;
}

const setBodyOverflow = (overflow: boolean): void => {
  document.body.style.overflow = overflow ? 'auto' : 'hidden';
};

const Layout = ({ children, titlePhoto }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const [navRevealed, setNavRevealed] = useState<boolean>(false);
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
        <Meta titlePhoto={titlePhoto} currentPath={asPath} />
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
