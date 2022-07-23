import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import SkillsSection from '../components/SkillsSection'
import { useAppConfig } from '../contexts/AppConfigContext'

export default function Home() {
    const { socialLinks, technologies } = useAppConfig()

    return (
        <>
            <HomeSection socialLinks={socialLinks} />
            <AboutSection />
            <SkillsSection technologies={technologies} />
        </>
    )
}
