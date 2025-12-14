import styles from '@/app/page.module.scss';

const features = [
    {
        icon: '💻',
        title: 'Curated Challenges',
        description:
            'Hand-picked problems from top tech companies with detailed solutions and explanations.'
    },
    {
        icon: '📊',
        title: 'Progress Tracking',
        description:
            'Monitor your improvement with detailed analytics and personalized recommendations.'
    },
    {
        icon: '🎯',
        title: 'Mock Interviews',
        description:
            'Practice with realistic interviews and get detailed feedback from experienced engineers.'
    },
    {
        icon: '📚',
        title: 'Study Plans',
        description:
            'Structured learning paths tailored to your goals and timeline.'
    },
    {
        icon: '👥',
        title: 'Community Support',
        description:
            'Learn together with a community of developers preparing for interviews.'
    },
    {
        icon: '⚡',
        title: 'Fast Feedback',
        description:
            'Get instant feedback on your solutions with our advanced testing system.'
    }
];

export default function HomeFeatures() {
    return (
        <section className={styles.features}>
            <div className={styles.featuresContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Everything You Need to Succeed
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Comprehensive tools and resources designed to help you
                        excel in technical interviews.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                        <div key={feature.title} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>
                                {feature.title}
                            </h3>
                            <p className={styles.featureDescription}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
