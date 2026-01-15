import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const developmentFields = [
    {
        id: 'android',
        title: 'Android Development',
        description:
            'Build native Android apps using Kotlin and Jetpack Compose',
        icon: '📱',
        color: '#3DDC84',
        path: '/fields/android'
    },
    {
        id: 'ios',
        title: 'iOS Development',
        description: 'Create iOS apps with Swift and SwiftUI',
        icon: '🍎',
        color: '#000000',
        path: '/fields/ios'
    },
    {
        id: 'frontend',
        title: 'Frontend Development',
        description:
            'Master modern web development with React, Vue, or Angular',
        icon: '🎨',
        color: '#61DAFB',
        path: '/fields/frontend'
    },
    {
        id: 'backend',
        title: 'Backend Development',
        description: 'Build robust APIs and server-side applications',
        icon: '⚙️',
        color: '#339933',
        path: '/fields/backend'
    },
    {
        id: 'fullstack',
        title: 'Full Stack Development',
        description: 'End-to-end development from frontend to backend',
        icon: '🔄',
        color: '#F0DB4F',
        path: '/fields/fullstack'
    },
    {
        id: 'devops',
        title: 'DevOps',
        description: 'Automate deployment, scaling, and monitoring',
        icon: '🚀',
        color: '#007396',
        path: '/fields/devops'
    },
    {
        id: 'data-science',
        title: 'Data Science',
        description: 'Analyze data and build machine learning models',
        icon: '📊',
        color: '#FF6B6B',
        path: '/fields/data-science'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Protect systems and networks from digital attacks',
        icon: '🛡️',
        color: '#FF5722',
        path: '/fields/cybersecurity'
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Create intelligent systems and predictive models',
        icon: '🧠',
        color: '#8A2BE2',
        path: '/fields/ai-ml'
    },
    {
        id: 'game-dev',
        title: 'Game Development',
        description: 'Design and develop interactive games',
        icon: '🎮',
        color: '#FF9900',
        path: '/fields/game-dev'
    },
    {
        id: 'mobile',
        title: 'Cross-Platform Mobile',
        description:
            'Build apps for both iOS and Android with React Native or Flutter',
        icon: '📲',
        color: '#1389FD',
        path: '/fields/mobile'
    },
    {
        id: 'blockchain',
        title: 'Blockchain & Web3',
        description: 'Develop decentralized applications and smart contracts',
        icon: '⛓️',
        color: '#F7921B',
        path: '/fields/blockchain'
    }
];

function RoadMapPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Developer Roadmaps</h1>
                <p className={styles.subtitle}>
                    Choose a development field to explore learning paths,
                    resources, and career opportunities
                </p>
            </div>

            <div className={styles.filters}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search fields..."
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}>🔍</button>
                </div>
                {/* <div className={styles.filterTags}>
                    <button className={styles.filterTag}>All</button>
                    <button className={styles.filterTag}>Web</button>
                    <button className={styles.filterTag}>Mobile</button>
                    <button className={styles.filterTag}>Data</button>
                    <button className={styles.filterTag}>Emerging</button>
                </div> */}
            </div>

            <div className={styles.grid}>
                {developmentFields.map((field) => (
                    <Link
                        href={field.path}
                        key={field.id}
                        className={styles.cardLink}
                    >
                        <div
                            className={styles.card}
                            style={
                                {
                                    '--card-color': field.color
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>
                                    {field.icon}
                                </span>
                                <span className={styles.cardTitle}>
                                    {field.title}
                                </span>
                            </div>
                            <p className={styles.cardDescription}>
                                {field.description}
                            </p>
                            <div className={styles.cardFooter}>
                                <span className={styles.exploreText}>
                                    Explore Roadmap →
                                </span>
                                <div className={styles.stats}>
                                    <span className={styles.stat}>
                                        📚 15 Resources
                                    </span>
                                    <span className={styles.stat}>
                                        ⏱️ 6-12 Months
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RoadMapPage;
