import cuid from 'cuid'
import Link from 'next/link'
import { TbSend } from 'react-icons/tb'
import tw from 'twin.macro'
import Typewriter from 'typewriter-effect'

const Home = tw.section`flex flex-wrap items-center justify-between overflow-hidden py-10 md:py-16`
const SocialIcons = tw.div`flex flex-col items-center gap-4 order-1 w-1/12`
const SocialIcon = tw.a`text-xl text-indigo-500 drop-shadow-2xl transition-colors hover:text-indigo-600`
const Introduction = tw.div`order-3 mt-8 md:(order-2 w-5/12 mt-0)`
const Title = tw.h1`flex text-2xl text-neutral-800 font-semibold md:text-[28px] lg:text-4xl`
const Subtitle = tw.p`text-lg text-gray-500 font-medium my-2 md:my-3 lg:text-xl`
const Description = tw.p`mb-8 md:mb-10 lg:text-lg`
const ContactLink = tw.a`inline-flex items-center gap-1 bg-indigo-500 text-sm text-zinc-50 font-medium p-3 rounded-lg drop-shadow-md  transition-colors hover:bg-indigo-600`
const ContactIcon = tw(TbSend)`text-lg`
const ImgWrapper = tw.div`flex justify-center items-center order-2 w-10/12 drop-shadow-md md:(order-3 w-5/12)`
const Img = tw.img`w-72 md:w-96`

export default function HomeSection({ socialLinks }) {
    return (
        <Home>
            <SocialIcons>
                {socialLinks.map((socialLink) => (
                    <SocialIcon href={socialLink.url} key={cuid()}>
                        <socialLink.icon />
                    </SocialIcon>
                ))}
            </SocialIcons>
            <Introduction>
                <Title>
                    Hi, I am
                    <Typewriter
                        options={{
                            strings: 'Matt James',
                            autoStart: true,
                            loop: true,
                            pauseFor: 2500,
                            wrapperClassName: 'typewriter-text',
                            cursorClassName: 'typewriter-cursor'
                        }}
                    />
                </Title>
                <Subtitle>Fullstack Developer</Subtitle>
                <Description>
                    High level experience in web design and development knowledge, producting
                    quality work
                </Description>
                <Link href="/" passHref>
                    <ContactLink>
                        Contact Me <ContactIcon />
                    </ContactLink>
                </Link>
            </Introduction>
            <ImgWrapper>
                <Img src="images/profile/matt.png" alt="matt" />
            </ImgWrapper>
        </Home>
    )
}
