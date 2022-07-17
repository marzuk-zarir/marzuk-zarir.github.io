/* eslint-disable react/no-danger */

import { extractCritical } from '@emotion/server'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const critical = extractCritical(initialProps.html)

        initialProps.html = critical.html
        initialProps.styles = (
            <>
                {initialProps.styles}
                <style
                    data-emotion-css={critical.ids.join(' ')}
                    dangerouslySetInnerHTML={{ __html: critical.css }}
                />
            </>
        )

        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
