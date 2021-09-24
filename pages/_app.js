import { NextIntlProvider } from 'next-intl';
import '../styles/global.css'
import Layout from '../layouts-v1';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  )
}

export default MyApp
