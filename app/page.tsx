import HomeHero from '@/components/home/HomeHero';
import HomeContent from '@/components/home/HomeContent';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeCTA from '@/components/home/HomeCTA';
import styles from './page.module.scss';

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <HomeHero />
            <HomeFeatures />
            <HomeContent />
            <HomeCTA />
        </div>
    );
}
