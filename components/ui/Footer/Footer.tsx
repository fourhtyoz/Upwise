import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const blogCategories = [
        'Algorithms',
        'Data Structures',
        'System Design',
        'Interview Tips',
        'Coding Challenges',
        'Career Advice'
    ];

    const resources = [
        'Study Guides',
        'Practice Problems',
        'Interview Questions',
        'Code Examples',
        'Video Tutorials',
        'Community Forum'
    ];

    const company = [
        'About Us',
        'Blog',
        'Careers',
        'Contact',
        'Privacy Policy',
        'Terms of Service'
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaSquareGithub color="white" size={30} />,
            url: 'https://github.com'
        },
        {
            name: 'Twitter',
            icon: <FaSquareXTwitter color="white" size={30} />,
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
                            <h3 className={styles.columnTitle}>Categories</h3>
                            <ul className={styles.linksList}>
                                {blogCategories.map((category) => (
                                    <li
                                        key={category}
                                        className={styles.linkItem}
                                    >
                                        <Link
                                            href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={styles.link}
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linksColumn}>
                            <h3 className={styles.columnTitle}>Resources</h3>
                            <ul className={styles.linksList}>
                                {resources.map((resource) => (
                                    <li
                                        key={resource}
                                        className={styles.linkItem}
                                    >
                                        <Link
                                            href={`/resources/${resource.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={styles.link}
                                        >
                                            {resource}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linksColumn}>
                            <h3 className={styles.columnTitle}>Company</h3>
                            <ul className={styles.linksList}>
                                {company.map((item) => (
                                    <li key={item} className={styles.linkItem}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={styles.link}
                                        >
                                            {item}
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
