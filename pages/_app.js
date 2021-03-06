import React from 'react';
import App from 'next/app';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/shared/main.scss';
import auth0 from '../services/auth0';

const namespace = 'http://localhost:3000';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);
   
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner = user && user[namespace + '/role'] === 'siteOwner'; 
    const auth = { user, isAuthenticated: !!user, isSiteOwner };
  
    return { pageProps, auth }
  }


  render() {
    const { Component, pageProps, auth } = this.props
    return <Component {...pageProps} auth={auth}/>
  }
}

export default MyApp