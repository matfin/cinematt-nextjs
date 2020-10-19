import React from 'react';
import Head from 'next/head';
import { resourceBaseUrl } from 'config';
import { Photo } from 'models/interfaces';
import { colours } from 'styles';

export interface Props {
  currentPath: string;
  titlePhoto?: Photo;
}

export const socialImagePath = ({ public_id, version }: Photo): string =>
  `${resourceBaseUrl}/w_1280/v${version}/${public_id}.jpg`;

const siteVersion: string = process.env.version;

const Meta = ({ currentPath, titlePhoto }: Props): JSX.Element => (
  <Head>
    <title>Cinematt</title>
    <meta
      httpEquiv="Content-Security-Policy"
      content="default-src 'self' 'unsafe-eval'; style-src 'unsafe-inline'; img-src 'self' *.cloudinary.com;"
    />
    <meta name="apple-mobile-web-app-title" content="Cinematt" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
    <meta name="theme-color" content={colours.secondary} />

    <meta name="description" content="Personal photography website of Matt Finucane" />
    <meta name="author" content="Matt Finucane" />
    <meta name="version" content={siteVersion} />

    <meta property="og:url" content={`https://cinematt.photography${currentPath}`} />
    <meta property="og:site_name" content="cinematt.photography" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en-IE" />
    <meta property="og:title" content="Cinematt" />
    <meta property="og:description" content="Personal photography website of Matt Finucane" />
    {titlePhoto && <meta property="og:image" content={socialImagePath(titlePhoto)} />}

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@matfinucane" />
    <meta name="twitter:creator" content="@matfinucane" />
    <meta name="twitter:title" content="Cinematt" />
    <meta name="twitter:url" content={`https://cinematt.photography${currentPath}`} />
    <meta name="twitter:description" content="Personal photography website of Matt Finucane" />
    {titlePhoto && (
      <>
        <meta name="twitter:image" content={socialImagePath(titlePhoto)} />
        <meta name="twitter:image-alt" content="cinematt.photography" />
      </>
    )}
    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

    <meta name="msapplication-TileColor" content={colours.secondary} />
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
    <meta name="theme-color" content={colours.secondary} />

    <link rel="shortcut icon" href="/favicon.ico" />

    <link rel="manifest" href="/manifest.json" />
    <link rel="canonical" href={`https://cinematt.photography${currentPath}`} />
  </Head>
);

export default Meta;
