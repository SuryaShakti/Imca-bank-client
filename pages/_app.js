import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { useRouter } from 'next/router';
import Loader from '../src/components/Loader';
import app, { cookieStorage } from '../src/apis/index';
import { SnackbarProvider } from 'notistack';
import UserStore from '../src/store/userStore';
import DefaultLayout from '../src/Layout/Layout';
import SelectedAccountStore from '../src/store/selectedAccountStore';

const Noop = ({ children }) => children;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const Router = useRouter();

  let Layout = DefaultLayout;

  if (typeof Component.Layout !== 'undefined') {
    Layout = Component.Layout ? Component.Layout : Noop;
  }

  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    console.log('app useEffect caleled');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const token = localStorage.getItem('feathers-jwt');
    const selecteAccount = localStorage.getItem('selectedAccount');
    console.log("selected account", selecteAccount);
    if (token) {
      app
        .authenticate({
          strategy: 'jwt',
          accessToken: token
        })
        .then(response => {
          const { accessToken, user } = response;
          console.log('app accesstoken', accessToken, user);
          localStorage.setItem('feathers-jwt', accessToken);
          UserStore.set(() => ({ token: accessToken, user }), 'login');
          SelectedAccountStore.set(() => ({ account: selecteAccount }), 'account');
          if (Router.pathname === '/login') {
            if (user.role === 1) {
              Router.replace('/accountDetails').then(() => {
                setLoading(false);
              });
            } else {
              Router.replace('/admin/dashboard').then(() => {
                setLoading(false);
              });
            }
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          console.log('catch method called');
          // app.logout();
          // localStorage.removeItem('feathers-jwt');
          // Router.replace('/').then(() => {
          setLoading(false);
          // });
        });
    } else {
      if (Router.pathname === '/' || Router.pathname === '/login') {
        setLoading(false);
      } else {
        Router.replace('/login').then(() => {
          setLoading(false);
        });
      }
      // setLoading(false);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>IMCA BANK</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {
            loading ?
              <Loader /> :
              <Layout title={Component.title ? Component.title : ''}>
                <Component {...pageProps} />
              </Layout>
          }
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};