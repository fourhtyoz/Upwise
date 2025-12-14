'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Challenges', href: '/challenges' },
        { name: 'Study Plan', href: '/study-plan' },
        { name: 'Interviews', href: '/interviews' },
        { name: 'Resources', href: '/resources' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        Upwise
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.name} className={styles.navItem}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.authSection}>
                        <Link href="/login" className={styles.loginLink}>
                            Sign In
                        </Link>
                        <Link href="/signup" className={styles.getStarted}>
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}
                >
                    <ul className={styles.mobileNavList}>
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={styles.mobileNavItem}
                            >
                                <Link
                                    href={item.href}
                                    className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.mobileAuth}>
                        <Link
                            href="/login"
                            className={styles.mobileLogin}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className={styles.mobileGetStarted}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
