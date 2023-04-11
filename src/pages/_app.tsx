import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from '../contexts/auth-context';
import { useNProgress } from '../hooks/use-nprogress';
import { createTheme } from '../theme';
import { createEmotionCache } from '../utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import { BRAND_NAME } from '../constants';
import { useEffect } from 'react';
import { createMockServer } from '../server';

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => {
  return <>
    <Typography variant="body1">Loading ...</Typography>
  </>
};

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  useEffect(() => {
    createMockServer()
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          {BRAND_NAME}
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthConsumer>
              {
                (auth: any) => auth.isLoading
                  ? <SplashScreen />
                  : getLayout(<Component {...pageProps} />)
              }
            </AuthConsumer>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
