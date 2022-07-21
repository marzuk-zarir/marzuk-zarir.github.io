import { TbDownload } from 'react-icons/tb'
import tw from 'twin.macro'
import Button from './Button'

const About = tw.section`text-center py-12 md:py-16`

const Title = tw.h2`text-2xl text-neutral-800 font-semibold lg:text-3xl`
const Subtitle = tw.p`text-lg text-gray-500 font-medium mt-1`
const Description = tw.p`w-full mx-auto my-8 md:w-7/12 lg:(w-5/12 text-lg my-10)`
const AboutInfo = tw.div`flex flex-col justify-center gap-8 mb-10 md:flex-row`
const Info = tw.div`text-center`
const InfoTitle = tw.p`text-2xl text-neutral-800 font-semibold`
const InfoDetails = tw.p`font-medium`

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
                    <InfoDetails>Completed worked</InfoDetails>
                </Info>
            </AboutInfo>
            <Button icon={TbDownload}>Download CV</Button>
        </About>
    )
}
