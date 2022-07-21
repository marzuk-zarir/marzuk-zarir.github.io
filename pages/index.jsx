import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import { useAppConfig } from '../contexts/AppConfigContext'

export default function Home() {
    const { socialLinks } = useAppConfig()

    return (
        <>
            <HomeSection socialLinks={socialLinks} />
            <AboutSection />
        </>
    )
}
