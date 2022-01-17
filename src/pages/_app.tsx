import '../styles/globals.css';
import React from 'react';
import type {ReactElement, ReactNode} from 'react';
import type {
  AppProps,
  // NextWebVitalsMetric
} from 'next/app';
import type {NextPage} from 'next';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import Head from 'next/head';
import styled from '@emotion/styled';

import {AnimatePresence} from 'framer-motion';

import {Provider} from 'react-redux';
import {store} from '@app/utils/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
const persister = persistStore(store);

// import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';


// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

const PageWrapper = styled.div`
  padding-top: 3.5rem;
  margin-top: 0rem;
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

// const Noop = ({children}: {children: React.ReactNode}) => <>{children}</>

function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // const ContextProvider = Component.provider || Noop;
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar className="h-14" />
        <PageWrapper>
          <ContentWrap>
            <main className="z-0 mb-16 mt-8 max-h-full overflow-hidden">
              <Provider store={store}>
                <PersistGate loading={null} persistor={persister}>
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
