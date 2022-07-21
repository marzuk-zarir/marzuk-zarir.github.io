import tw from 'twin.macro'
import { useAppConfig } from '../../contexts/AppConfigContext'
import useMediaQuery from '../../hooks/useMediaQuery'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = tw.header`fixed bottom-0 inset-x-0 bg-zinc-50 text-gray-500 py-2 z-30 md:(static py-4)`
const Container = tw.div`container flex items-center`
const Brand = tw.p`text-xl text-neutral-800 font-medium`

export default function Navbar() {
    const { menus } = useAppConfig()
    const { isMdScreen } = useMediaQuery()

    return (
        <Header>
            <Container>
                <Brand>Marzuk</Brand>
                {isMdScreen ? <DesktopNav menus={menus} /> : <MobileNav menus={menus} />}
            </Container>
        </Header>
    )
}
