'use client';

import Link from 'next/link';
import SignUpForm from '@/components/signup/SignUpForm';
import SocialLogin from '@/components/login/SocialLogin';
import styles from './page.module.scss';

// export const metadata = {
//     title: 'Sign Up - Upwise',
//     description:
//         'Create your Upwise account to start mastering technical interviews.'
// };

export default function SignUpPage() {
    return (
        <div className={styles.registerPage}>
            <div className={styles.container}>
                {/* Left Panel - Form */}
                <div className={styles.formPanel}>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>
                            {/* <Link href="/" className={styles.logo}>
                                Upwise
                            </Link> */}
                            <h1 className={styles.title}>Create Account</h1>
                            <p className={styles.subtitle}>
                                Join thousands of developers mastering technical
                                interviews
                            </p>
                        </div>

                        <SignUpForm />

                        <div className={styles.divider}>
                            <span>Or sign up with</span>
                        </div>

                        <SocialLogin />

                        <div className={styles.footerLinks}>
                            <p>
                                Already have an account?{' '}
                                <Link href="/login" className={styles.link}>
                                    Sign in
                                </Link>
                            </p>
                            <p className={styles.terms}>
                                By signing up, you agree to our{' '}
                                <Link href="/terms" className={styles.link}>
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy" className={styles.link}>
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Preview */}
                <div className={styles.previewPanel}>
                    <div className={styles.previewContent}>
                        <div className={styles.previewCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>🚀</div>
                                <h3 className={styles.cardTitle}>
                                    Start Your Journey
                                </h3>
                            </div>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>
                                        Free access to 100+ coding challenges
                                    </span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Personalized study roadmap</span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Community discussions & support</span>
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Progress tracking dashboard</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.testimonial}>
                            <p className={styles.testimonialText}>
                                {`"Upwise transformed my interview preparation.
                                Landed 3 offers in 2 months with their
                                structured approach."`}
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>MJ</div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>
                                        Maria Johnson
                                    </div>
                                    <div className={styles.authorRole}>
                                        Frontend Engineer @ Stripe
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
