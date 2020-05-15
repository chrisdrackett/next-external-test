import React from 'react'
import { AppProps } from 'next/app'

import { CommonWrap } from 'common'


export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return <CommonWrap><Component {...pageProps} /></CommonWrap>
}

export default MyApp