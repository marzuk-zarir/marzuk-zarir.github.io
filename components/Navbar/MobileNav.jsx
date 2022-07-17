import styled from '@emotion/styled'
import cuid from 'cuid'
import Link from 'next/link'
import { useState } from 'react'
import { BsGridFill, BsMoonStars, BsSun } from 'react-icons/bs'
import tw from 'twin.macro'

const Nav = styled.nav(({ isOpen }) => [
    tw`fixed bottom-0 inset-x-0 bg-zinc-50 text-gray-500 rounded-t-2xl transition-transform z-20`,
    isOpen ? tw`translate-y-0` : tw`translate-y-full`
])
const ButtonGroup = tw.div`flex items-center gap-1 ml-auto`
const Button = tw.button`text-xl p-2 rounded text-indigo-500`
const Backdrop = tw.div`fixed inset-0 bg-black/60 transition-colors z-10`
const Menu = tw.ul`flex flex-wrap flex-grow justify-center items-center gap-3 my-4`
const MenuItem = tw.li`text-sm font-medium p-2`
const MenuLink = tw.a`flex flex-col items-center gap-1 p-2`

export default function MobileNav({ menus }) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)

    const handleDarkMode = () => {
        setIsDark((dark) => !dark)
    }

    return (
        <>
            <ButtonGroup>
                <Button onClick={handleDarkMode}>{isDark ? <BsSun /> : <BsMoonStars />}</Button>
                <Button onClick={() => setIsNavOpen(true)}>
                    <BsGridFill />
                </Button>
            </ButtonGroup>

            {isNavOpen && <Backdrop onClick={() => setIsNavOpen(false)} />}

            <Nav isOpen={isNavOpen}>
                <Menu>
                    {menus.map((menu) => (
                        <MenuItem key={cuid()}>
                            <Link href={menu.href || '/'} passHref>
                                <MenuLink>
                                    <menu.icon fontSize={22} />
                                    {menu.name}
                                </MenuLink>
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Nav>
        </>
    )
}
