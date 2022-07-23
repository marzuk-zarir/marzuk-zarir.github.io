import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
import { useAppConfig } from '../../contexts/AppConfigContext'
import useMediaQuery from '../../hooks/useMediaQuery'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = styled.header(({ isScrollDown }) => [
    tw`fixed bottom-0 inset-x-0 bg-zinc-50 text-gray-500 py-2 z-30 md:(sticky top-0 inset-x-0 transition-[border-color] py-4)`,
    isScrollDown && tw`border-t border-gray-500/30 md:(border-t-0 border-b)`
])
const Container = tw.div`container flex items-center`
const Brand = tw.p`text-xl text-neutral-800 font-medium`

export default function Navbar() {
    const headerRef = useRef()
    const [isScrollDown, setIsScrollDown] = useState(false)
    const { menus } = useAppConfig()
    const { isMdScreen } = useMediaQuery()

    const handleScroll = () => {
        setIsScrollDown(
            headerRef && document.documentElement.scrollTop > headerRef.current.offsetHeight
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Header ref={headerRef} isScrollDown={isScrollDown}>
            <Container>
                <Brand>Marzuk</Brand>
                {isMdScreen ? <DesktopNav menus={menus} /> : <MobileNav menus={menus} />}
            </Container>
        </Header>
    )
}
