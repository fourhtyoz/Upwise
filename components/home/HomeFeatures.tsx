import styles from './HomeFeatures.module.scss';
import { FaLaptopCode } from 'react-icons/fa';
import { GiProgression, GiArcheryTarget } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';
import { FaPeopleGroup, FaBoltLightning } from 'react-icons/fa6';

const features = [
    {
        icon: <FaLaptopCode color="black" size={30} />,
        title: 'Curated Challenges',
        description:
            'Hand-picked problems from top tech companies with detailed solutions and explanations.'
    },
    {
        icon: <GiProgression color="black" size={30} />,
        title: 'Progress Tracking',
        description:
            'Monitor your improvement with detailed analytics and personalized recommendations.'
    },
    {
        icon: <GiArcheryTarget color="black" size={30} />,
        title: 'Mock Interviews',
        description:
            'Practice with realistic interviews and get detailed feedback from experienced engineers.'
    },
    {
        icon: <ImBooks color="black" size={30} />,
        title: 'Study Plans',
        description:
            'Structured learning paths tailored to your goals and timeline.'
    },
    {
        icon: <FaPeopleGroup color="black" size={30} />,
        title: 'Community Support',
        description:
            'Learn together with a community of developers preparing for interviews.'
    },
    {
        icon: <FaBoltLightning color="black" size={30} />,
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
