import cuid from 'cuid'
import { useMemo } from 'react'
import tw from 'twin.macro'
import { useAppConfig } from '../contexts/AppConfigContext'
import useMount from '../hooks/useMount'

const FooterWrapper = tw.footer`bg-neutral-800 text-gray-400 py-5`
const Container = tw.div`container flex flex-col items-center gap-4 md:(flex-row gap-0)`
const Text = tw.p`text-sm font-medium order-2 md:(text-base order-1)`
const SocialIcons = tw.div`flex flex-wrap order-1 gap-5 md:(order-2 ml-auto)`
const SocialIcon = tw.a`text-xl transition-colors hover:text-gray-500`

export default function Footer() {
    const isMount = useMount()
    const { socialLinks } = useAppConfig()
    const date = useMemo(() => new Date(), [])

    return (
        <FooterWrapper>
            <Container>
                <Text>&copy; {isMount && date.getFullYear()} Marzuk. All rights reserved.</Text>
                <SocialIcons>
                    {socialLinks.map((social) => (
                        <SocialIcon key={cuid()} href={social.url} target="__blank">
                            <social.icon />
                        </SocialIcon>
                    ))}
                </SocialIcons>
            </Container>
        </FooterWrapper>
    )
}
