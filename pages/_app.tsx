import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import 'sanitize.css'
import { theme } from 'theme'
import { GlobalStyle } from 'theme/globalStyle'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import Web3ConnectionProvider from '@/utils/web3Connection'

function App({ Component, pageProps }: AppProps) {
  const { hostname, port, protocol } =
    typeof window !== 'undefined'
      ? window.location
      : { hostname: 'localhost', port: 3000, protocol: 'http:' }
  const portString = port ? `:${port}` : ''
  const siteURL = typeof window !== 'undefined' ? `${protocol}//${hostname}${portString}` : ''
  const title = 'Bootnode - Frontend Starter Kit'
  const description = 'Bootnode - Frontend Starter Kit'
  const twitterHandle = '@'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={title} property="og:title" />
        <meta content={siteURL} property="og:url" />
        <meta content={`${siteURL}/shareable/ogImage.jpg`} property="og:image" />
        <meta content="website" property="og:type" />
        <meta content={description} property="og:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:site" />
        <meta content={twitterHandle} name="twitter:creator" />
      </Head>
      <ThemeProvider theme={theme}>
        <Web3ConnectionProvider>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Web3ConnectionProvider>
      </ThemeProvider>
    </>
  )
}
export default App
