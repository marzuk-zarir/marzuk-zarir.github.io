import '../styles/index.css'

import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { GlobalStyles } from 'twin.macro'

export default function App({ Component, pageProps }) {
    return (
        <CacheProvider value={cache}>
            <GlobalStyles />
            <Component {...pageProps} />
        </CacheProvider>
    )
}
