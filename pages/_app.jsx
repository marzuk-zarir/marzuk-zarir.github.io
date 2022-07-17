import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import Layout from '../components/Layout'
import AppConfigProvider from '../contexts/AppConfigContext'
import GlobalStyles from '../styles/GlobalStyles'

export default function App({ Component, pageProps }) {
    return (
        <CacheProvider value={cache}>
            <GlobalStyles />
            <AppConfigProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppConfigProvider>
        </CacheProvider>
    )
}
