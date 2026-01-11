'use client';

import Link from 'next/link';
import LoginForm from '@/components/login/LoginForm';
import SocialLogin from '@/components/login/SocialLogin';
import styles from './page.module.scss';
import { FaLaptopCode } from 'react-icons/fa';

// export const metadata = {
//     title: 'Sign In - Upwise',
//     description:
//         'Sign in to your Upwise account to continue your interview preparation journey.'
// };

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                {/* Left Panel - Form */}
                <div className={styles.formPanel}>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>
                            {/* <Link href="/" className={styles.logo}>
                                Upwise
                            </Link> */}
                            <h1 className={styles.title}>Welcome Back</h1>
                            <p className={styles.subtitle}>
                                Sign in to continue your interview preparation
                                journey
                            </p>
                        </div>

                        <LoginForm />

                        <div className={styles.divider}>
                            <span>Or continue with</span>
                        </div>

                        <SocialLogin />

                        <div className={styles.footerLinks}>
                            <p>
                                {`Don't have an account?`}{' '}
                                <Link href="/signup" className={styles.link}>
                                    Sign up
                                </Link>
                            </p>
                            <Link
                                href="/forgot-password"
                                className={styles.link}
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Preview */}
                <div className={styles.previewPanel}>
                    <div className={styles.previewContent}>
                        <div className={styles.previewCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <FaLaptopCode />
                                </div>
                                <h3 className={styles.cardTitle}>
                                    Master Coding Interviews
                                </h3>
                            </div>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>1,000+ coding challenges</span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Personalized study plans</span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Mock interviews with feedback</span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Progress tracking & analytics</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.testimonial}>
                            <p className={styles.testimonialText}>
                                {`"Upwise helped me land offers from Google and
                                Meta. The mock interviews were especially
                                valuable."`}
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>AS</div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>
                                        Alex Smith
                                    </div>
                                    <div className={styles.authorRole}>
                                        Software Engineer @ Google
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
