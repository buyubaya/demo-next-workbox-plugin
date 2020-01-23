import React from "react";
import Head from "next/head";

class MyApp extends React.Component {

  componentDidMount(){
    if (typeof window !== "undefined") {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
      }
    }
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;

    return (
      <>
        <Head>
          <title>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#317EFB"/>
          <link rel="apple-touch-icon" href="/static/icons-192.png"></link>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp