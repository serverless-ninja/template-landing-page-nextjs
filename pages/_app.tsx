import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import nextI18NextConfig from '../next-i18next.config';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, nextI18NextConfig);
