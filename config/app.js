import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import {
    SiCss3,
    SiExpress,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss
} from 'react-icons/si'
import { TbBooks, TbFileText, TbHome, TbPhoto, TbSend, TbUser } from 'react-icons/tb'

export default {
    menus: [
        {
            name: 'Home',
            icon: TbHome
        },
        {
            name: 'About',
            icon: TbUser
        },
        {
            name: 'Skills',
            icon: TbFileText
        },
        {
            name: 'Portfolio',
            icon: TbPhoto
        },
        {
            name: 'Blog',
            href: '/blogs',
            icon: TbBooks
        },
        {
            name: 'Contacts',
            icon: TbSend
        }
    ],
    socialLinks: [
        {
            name: 'Github',
            url: 'https://github.com',
            icon: BsGithub
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com',
            icon: BsTwitter
        },
        {
            name: 'facebook',
            url: 'https://facebook.com',
            icon: BsFacebook
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com',
            icon: BsInstagram
        }
    ],
    technologies: [
        {
            name: 'Html',
            icon: SiHtml5
        },
        {
            name: 'CSS',
            icon: SiCss3
        },
        {
            name: 'Javascript',
            icon: SiJavascript
        },
        {
            name: 'React',
            icon: SiReact
        },
        {
            name: 'Tailwindcss',
            icon: SiTailwindcss
        },
        {
            name: 'Node.js',
            icon: SiNodedotjs
        },
        {
            name: 'Express js',
            icon: SiExpress
        },
        {
            name: 'Mongodb',
            icon: SiMongodb
        },
        {
            name: 'Next.js',
            icon: SiNextdotjs
        },
        {
            name: 'Firebase',
            icon: SiFirebase
        }
    ]
}
