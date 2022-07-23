import { TbDownload } from 'react-icons/tb'
import tw from 'twin.macro'
import Button from './Button'

const About = tw.section`text-center max-w-2xl mx-auto py-12 md:py-16`
const Title = tw.h2`text-2xl text-neutral-800 font-semibold lg:text-3xl`
const Subtitle = tw.p`text-lg text-gray-500 font-medium mt-1`
const Description = tw.p`my-10 lg:(text-lg my-12)`
const AboutInfo = tw.div`flex flex-col justify-center gap-10 mb-12 md:flex-row`
const Info = tw.figure`text-center`
const InfoTitle = tw.span`text-2xl text-neutral-800 font-semibold`
const InfoDetails = tw.figcaption`font-medium`

export default function AboutSection() {
    return (
        <About>
            <Title>About Me</Title>
            <Subtitle>My Introduction</Subtitle>
            <Description>
                Web developer with extensive knowledge and years of experience, working with web
                technologies and UI / UX design, delivering quality work
            </Description>
            <AboutInfo>
                <Info>
                    <InfoTitle>02+</InfoTitle>
                    <InfoDetails>years experience</InfoDetails>
                </Info>
                <Info>
                    <InfoTitle>25+</InfoTitle>
                    <InfoDetails>Completed projects</InfoDetails>
                </Info>
                <Info>
                    <InfoTitle>05+</InfoTitle>
                    <InfoDetails>Completed works</InfoDetails>
                </Info>
            </AboutInfo>
            <Button icon={TbDownload}>Download CV</Button>
        </About>
    )
}
