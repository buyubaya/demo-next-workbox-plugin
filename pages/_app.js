import React from "react";
// import { register, unregister } from 'next-offline/runtime'

class MyApp extends React.Component {

  componentDidMount(){
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js');
        }
      })

      // register("/sw.js");
      // unregister();

      // if ('serviceWorker' in navigator) {
      //   navigator.serviceWorker.ready.then(r => {
      //     console.log(22222, r);
      //     r.unregister();
      //   });
      // }
    }
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;

    return <Component {...pageProps} />
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