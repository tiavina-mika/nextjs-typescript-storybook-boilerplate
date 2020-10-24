import React from 'react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { ThemeProvider } from 'react-jss';

import '../styles.css';

const theme = {
  color: {
    black: '#000000',
    primary: '#0c0c0c',
    secondary: '#898880',
    secondaryLight: '#C5C3BC',
    accent: '#80722A',
    accentMid: '#E9E7DE',
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
