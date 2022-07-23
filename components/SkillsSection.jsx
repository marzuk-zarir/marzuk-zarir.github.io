import cuid from 'cuid'
import tw from 'twin.macro'

const Skills = tw.section`text-center py-12 md:py-16`
const Title = tw.h3`text-2xl text-neutral-800 font-semibold lg:text-3xl`
const Subtitle = tw.p`text-lg text-gray-500 font-medium mt-1`
const Technologies = tw.div`flex flex-wrap justify-center gap-y-10 gap-x-2 max-w-3xl mx-auto mt-12`
const Technology = tw.figure`flex flex-col items-center gap-2 w-4/12 text-4xl text-indigo-500 md:w-3/12 lg:w-2/12`
const TechTitle = tw.figcaption`text-base text-gray-500 font-medium`

export default function SkillsSection({ technologies }) {
    return (
        <Skills>
            <Title>Skills</Title>
            <Subtitle>Most used technologies</Subtitle>
            <Technologies>
                {technologies.map((tech) => (
                    <Technology key={cuid()}>
                        <tech.icon />
                        <TechTitle>{tech.name}</TechTitle>
                    </Technology>
                ))}
            </Technologies>
        </Skills>
    )
}
