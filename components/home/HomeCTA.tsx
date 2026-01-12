import styles from './HomeCTA.module.scss';
import LinkButton from '../shared/LinkButton/LinkButton';

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
                <LinkButton
                    href="/signup"
                    text="Start Learning For Free"
                    variant="primary"
                />
            </div>
        </section>
    );
}
