import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
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
    ]
}
