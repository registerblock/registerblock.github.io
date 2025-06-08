import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from "../../images/logo-header.png";
import { FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const footerLinks = [
    {
        title: 'Brickchain',
        links: [
            { name: 'NFT Trading', url: '/nft-trading' },
            { name: '1st hand trade', url: '/first-hand-trade' },
            { name: '2nd hand trade', url: '/second-hand-trade' },
            { name: 'Sell with Brickchain', url: '/sell-with-brickchain' },
            { name: 'Why brickchain', url: '/why-brickchain' },
            { name: 'Another link' }, // no URL
        ],
    },
    {
        title: 'Explore',
        links: [
            { name: 'How it works?', url: '/how-it-works' },
            { name: 'Legal', url: '/legal' },
            { name: 'Security', url: '/security' },
            { name: 'Technology', url: '/technology' },
            { name: 'Villas' },
            { name: 'Commercial properties' },
            { name: 'Apartments' },
        ],
    },
    {
        title: 'About Us',
        links: [
            { name: 'Blog', url: '/blog' },
            { name: 'Career', url: '/career' },
            { name: 'Contact', url: '/contact' },
            { name: 'Team', url: '/team' },
            { name: 'Support' },
            { name: 'Developers' },
            { name: 'Resource library' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <Image src={logo} alt="Brickchain" className={styles.logo} />
                    <div className={styles.social}>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </div>
                {footerLinks.map((group, idx) => (
                    <div key={idx} className={styles.linkGroup}>
                        <h4>{group.title}</h4>
                        <ul>
                            {group.links.map((link, i) => (
                                <li key={i}>
                                    <a href={link.url ? link.url : '#'}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}
