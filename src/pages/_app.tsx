/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

import '@/styles/tailwind.css'

import store from '@/redux/store'

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
