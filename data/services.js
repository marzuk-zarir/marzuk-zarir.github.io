import { FcBarChart, FcEngineering, FcLinux, FcLock, FcServices, FcSupport } from 'react-icons/fc'

const services = [
    {
        title: 'Web Design & Development',
        description:
            'Transform any design into a unique, professional website. My designs are fully responsive and SEO optimize.',
        icon: FcServices
    },
    {
        title: 'Backend Solutions',
        description:
            'Need a scalable CMS or REST API? I create fully customizable headless CMS or REST APIs using Node.js',
        icon: FcSupport
    },
    {
        title: 'FullStack Solutions',
        description:
            'Build complete web applications, such as e-commerce stores, blogging platforms, and chat applications, using the MERN stack',
        icon: FcEngineering
    },
    {
        title: 'Web Scraping',
        description:
            'Looking to analyze competitor data for your business? I develop web scrapers tailored to your needs',
        icon: FcBarChart
    },
    {
        title: 'Bug Fixing & Security',
        description:
            'Facing issues with your React or Node.js website? I specialize in fixing bugs and enhancing the security of your existing site',
        icon: FcLock
    },
    {
        title: 'Cloud Deployment',
        description:
            'Deploy or migrate your website to any shared or Linux VPS hosting and configure it for production-ready performance',
        icon: FcLinux
    }
]

export default services
