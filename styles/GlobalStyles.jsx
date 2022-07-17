import { css, Global } from '@emotion/react'
import tw, { GlobalStyles as BaseStyle } from 'twin.macro'

const customStyles = css({
    html: {
        width: 'auto',
        height: 'auto',
        scrollBehavior: 'smooth'
    },
    body: tw`bg-zinc-50 text-gray-500`,
    button: tw`cursor-pointer`
})

export default function GlobalStyles() {
    return (
        <>
            <Global styles={customStyles} />
            <BaseStyle />
        </>
    )
}
