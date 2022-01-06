import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import {nonEscalatorMenu} from '../utils/store/questions';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Provider } from 'react-redux';
import {store} from '@app/utils/store/store';
import Head from 'next/head';
import styled from '@emotion/styled';

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

function MyApp({ Component, pageProps }: AppProps) {
  // const ContextProvider = Component.provider || Noop;
  const testFormId = nonEscalatorMenu.formId;
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <Navbar className="h-14" />
      <PageWrapper>
        <ContentWrap>
        <main className="z-0 mb-16 mt-8 max-h-full overflow-hidden">
        <Component {...pageProps} />
      </main>
        </ContentWrap>
        <FooterWrap>
        <Footer className="h-16" />

        </FooterWrap>
      </PageWrapper>
     
    </Provider>
    </>
   )
}

export default MyApp
