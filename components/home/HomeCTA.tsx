import Link from 'next/link';
import styles from '@/app/page.module.scss';

export default function HomeCTA() {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaContainer}>
                <h2 className={styles.ctaTitle}>Start Your Journey Today</h2>
                <p className={styles.ctaDescription}>
                    Join thousands of developers who have successfully landed
                    their dream jobs with Upwise. No credit card required to get
                    started.
                </p>
                <Link href="/signup" className={styles.ctaButton}>
                    Get Started Free
                </Link>
            </div>
        </section>
    );
}
