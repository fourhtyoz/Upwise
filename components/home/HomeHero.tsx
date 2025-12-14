import Link from 'next/link';
import styles from '@/app/page.module.scss';

export default function HomeHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1 className={styles.heroTitle}>
                    Master Technical Interviews
                    <br />
                    with Confidence
                </h1>
                <p className={styles.heroSubtitle}>
                    Upwise provides curated coding challenges, mock interviews,
                    and comprehensive study plans to help you land your dream
                    tech job.
                </p>

                <div className={styles.heroButtons}>
                    <Link href="/signup" className={styles.primaryButton}>
                        Start Learning Free
                    </Link>
                    <Link href="/challenges" className={styles.secondaryButton}>
                        View Challenges
                    </Link>
                </div>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>1,000+</div>
                        <div className={styles.statLabel}>Coding Problems</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>50k+</div>
                        <div className={styles.statLabel}>Developers</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>90%</div>
                        <div className={styles.statLabel}>Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
