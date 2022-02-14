import '../styles/globals.css';
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type {
  AppProps,
  // NextWebVitalsMetric
} from 'next/app';
import type { NextPage } from 'next';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import styled from '@emotion/styled';

import { AnimatePresence } from 'framer-motion';

import { Provider } from 'react-redux';
import { store } from '@app/utils/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@app/utils/store/store';

import { DefaultSeo } from 'next-seo';
import seoConfig from '@app/utils/seo.config';

const PageWrapper = styled.div`
  padding-top: 3.5rem;
  margin-top: 0rem;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4rem;
`;

// const NavWrap = styled.div`
//   grid-row: 1 / 2;
// `;

const ContentWrap = styled.div`
  grid-row: 1 / 2;
`;

const FooterWrap = styled.div`
  place-items: center;
  grid-row: 2 / 3;
`;

function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // useEffect(() => {
  //   const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION;
  //   const REDUX_SCHEMA_VERSION = process.env.NEXT_PUBLIC_REDUX_SCHEMA_VERSION;
  //   console.log('App Version: ' + APP_VERSION);
  //   console.log('Redux Schema Version: ' + REDUX_SCHEMA_VERSION);
  //   // localStorage.clear();
  // }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
      <>
        <DefaultSeo {...seoConfig} />
        <Navbar className="h-14" />
        <PageWrapper>
          <ContentWrap>
            <main className="overflow-hidden z-0 mt-8 mb-16 max-h-full">
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <AnimatePresence
                    exitBeforeEnter={true}
                    initial={false}
                    // onExitComplete={() => window.scrollTo(0, 0)}
                  >
                    <Component {...pageProps} key={router.asPath} />
                  </AnimatePresence>
                </PersistGate>
              </Provider>
            </main>
          </ContentWrap>
          <FooterWrap>
            <Footer className="h-16" />
          </FooterWrap>
        </PageWrapper>
      </>
  );
}

export default MyApp;
