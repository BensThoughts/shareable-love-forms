import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import {nonEscalatorMenu} from '../utils/store/questions';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Provider } from 'react-redux';
import {store} from '@app/utils/store/store';
// const Noop = ({children}: {children: React.ReactNode}) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  // const ContextProvider = Component.provider || Noop;
  const testFormId = nonEscalatorMenu.formId;
  return (
    <Provider store={store}>
        <Navbar className="h-14" />
        <main className="z-0 mb-16 mt-8 max-h-full overflow-hidden">
          <Component {...pageProps} />
        </main>
        <Footer className="h-16" />
    </Provider>
   )
}

export default MyApp
