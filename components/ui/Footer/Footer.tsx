import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const questions = [
        {
            title: 'Android',
            url: '/android'
        },
        {
            title: 'Backend',
            url: '/backend'
        },
        {
            title: 'Data Science',
            url: '/data-science'
        },
        {
            title: 'Devops',
            url: '/devops'
        },
        {
            title: 'Frontend',
            url: '/frontend'
        },
        {
            title: 'Game Development',
            url: '/game-development'
        },
        {
            title: 'Machine Learning',
            url: '/machine-learning'
        },
        {
            title: 'Testing',
            url: '/testing'
        }
    ];

    const fields = [
        {
            title: 'Android',
            url: '/fields/android'
        },
        {
            title: 'Backend',
            url: '/fields/backend'
        },
        {
            title: 'Data Science',
            url: '/fields/data-science'
        },
        {
            title: 'Devops',
            url: '/fields/devops'
        },
        {
            title: 'Frontend',
            url: '/fields/frontend'
        },
        {
            title: 'Game Development',
            url: '/fields/game-development'
        },
        {
            title: 'Machine Learning',
            url: '/fields/machine-learning'
        },
        {
            title: 'Testing',
            url: '/fields/testing'
        }
    ];

    const company = [
        {
            title: 'About Us',
            url: '/about'
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaSquareGithub className={styles.icon} size={30} />,
            url: 'https://github.com'
        },
        {
            name: 'Twitter',
            icon: <FaSquareXTwitter className={styles.icon} size={30} />,
            url: 'https://twitter.com'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Footer Content */}
                <div className={styles.mainContent}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            Upwise
                        </Link>
                        <p className={styles.tagline}>
                            Master technical interviews with curated coding
                            challenges and expert guidance.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={styles.socialIcon}>
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.linksGrid}>
                        <div className={styles.linksColumn}>
                            <h3 className={styles.columnTitle}>Questions</h3>
                            <ul className={styles.linksList}>
                                {questions.map((item) => (
                                    <li
                                        key={item.title}
                                        className={styles.linkItem}
                                    >
                                        <Link
                                            href={`${item.url}`}
                                            className={styles.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linksColumn}>
                            <h3 className={styles.columnTitle}>Road Maps</h3>
                            <ul className={styles.linksList}>
                                {fields.map((item) => (
                                    <li
                                        key={item.title}
                                        className={styles.linkItem}
                                    >
                                        <Link
                                            href={`${item.url}`}
                                            className={styles.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linksColumn}>
                            <h3 className={styles.columnTitle}>Company</h3>
                            <ul className={styles.linksList}>
                                {company.map((item) => (
                                    <li
                                        key={item.title}
                                        className={styles.linkItem}
                                    >
                                        <Link
                                            href={`${item.url}`}
                                            className={styles.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className={styles.newsletter}>
                    <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                    <p className={styles.newsletterDescription}>
                        Get weekly coding challenges and interview tips
                        delivered to your inbox.
                    </p>
                    <form className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                            aria-label="Email for newsletter subscription"
                        />
                        <button
                            type="submit"
                            className={styles.newsletterButton}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        © {currentYear} Upwise. All rights reserved.
                    </div>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <span className={styles.separator}>•</span>
                        <Link href="/terms" className={styles.legalLink}>
                            Terms of Service
                        </Link>
                        <span className={styles.separator}>•</span>
                        <Link href="/cookies" className={styles.legalLink}>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
