import React from 'react';
import { AppProps } from 'next/app';

const CineMattApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default CineMattApp;
