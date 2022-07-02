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
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
