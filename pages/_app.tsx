/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import Authentication from '../components/authentication/Authentication';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }:AppProps):ReactElement {
  const router = useRouter();
  const { signx } = router.query;
  if (signx) {
    return (<Authentication><Component {...pageProps} /></Authentication>);
  }
  return (<Layout><Component {...pageProps} /></Layout>);
}

export default MyApp;
