import HomeHero from '@/components/home/HomeHero';
import HomeContent from '@/components/home/HomeContent';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeCTA from '@/components/home/HomeCTA';

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <HomeFeatures />
            {/* <HomeContent /> */}
            <HomeCTA />
        </>
    );
}
