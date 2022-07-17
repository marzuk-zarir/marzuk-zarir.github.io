import cuid from 'cuid'
import Link from 'next/link'
import { useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import tw from 'twin.macro'

const Nav = tw.nav`ml-auto`
const Menu = tw.ul`flex items-center md:gap-3`
const MenuItem = tw.li`font-medium`
const MenuLink = tw.a`p-2 transition-colors hover:(text-neutral-800)`
const Button = tw.button`bg-indigo-500/30 text-indigo-600 text-xl ml-2 p-2 rounded-xl`

export default function DesktopNav({ menus }) {
    const [isDark, setIsDark] = useState(false)

    const handleDarkMode = () => {
        setIsDark((dark) => !dark)
    }

    return (
        <Nav>
            <Menu>
                {menus.map((menu) => (
                    <MenuItem key={cuid()}>
                        <Link href={menu.href || '/'} passHref>
                            <MenuLink>{menu.name}</MenuLink>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem>
                    <Button onClick={handleDarkMode}>{isDark ? <BsSun /> : <BsMoonStars />}</Button>
                </MenuItem>
            </Menu>
        </Nav>
    )
}
