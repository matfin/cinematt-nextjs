import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { colours, components, GlobalStyle } from 'styles';
import { Container, LayoutHeader, Main, Nav } from './layout.css';

export interface Props {
  children?: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' 'unsafe-eval'; style-src 'unsafe-inline'; img-src 'self' *.cloudinary.com;"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content={colours.secondary} />
        <meta name="description" content="Personal photography website of Matt Finucane" />
        <meta name="author" content="Matt Finucane" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`https://cinematt.photography${asPath}`} />
        <meta property="og:url" content={`https://cinematt.photography${asPath}`} />
        <meta property="og:site_name" content="cinematt.photography" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en-IE" />
        <meta property="og:title" content="Cinematt" />
        <meta property="og:description" content="Personal photography website of Matt Finucane" />

        <meta name="twitter:site" content="@matfinucane" />
        <meta name="twitter:creator" content="@matfinucane" />
        <meta name="twitter:title" content="Cinematt" />
        <meta name="twitter:url" content={`https://cinematt.photography${asPath}`} />
        <meta name="twitter:description" content="Personal photography website of Matt Finucane" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/icons/logo-32.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/icons/logo-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/icons/logo-128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="/icons/logo-192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/icons/logo-196.png" sizes="196x196" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
