'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';

// Define the field data structure
interface FieldData {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    overview: string;
    duration: string;
    demand: string;
    salary: string;
    resources: Array<{
        title: string;
        type: string;
        link: string;
    }>;
    roadmap: Array<{
        step: number;
        title: string;
        description: string;
    }>;
}

// Mock data - replace with actual database/API call
const fieldsData: Record<string, FieldData> = {
    android: {
        id: 'android',
        title: 'Android Development',
        description:
            'Build native Android apps using Kotlin and Jetpack Compose',
        icon: '📱',
        color: '#3DDC84',
        overview:
            'Android development involves creating applications for devices running the Android operating system. Modern Android development primarily uses Kotlin and Jetpack Compose.',
        duration: '6-9 months',
        demand: 'High demand in job market',
        salary: '$85k - $150k',
        resources: [
            {
                title: 'Android Developer Documentation',
                type: '📚 Official Docs',
                link: '#'
            },
            {
                title: 'Kotlin Programming Language',
                type: '📖 Language Guide',
                link: '#'
            }
        ],
        roadmap: [
            {
                step: 1,
                title: 'Learn Kotlin Basics',
                description: 'Master Kotlin syntax and OOP concepts'
            },
            {
                step: 2,
                title: 'Understand Android Components',
                description: 'Activities, Fragments, Services, etc.'
            }
        ]
    },
    frontend: {
        id: 'frontend',
        title: 'Frontend Development',
        description:
            'Master modern web development with React, Vue, or Angular',
        icon: '🎨',
        color: '#61DAFB',
        overview:
            'Frontend development focuses on creating user interfaces and experiences for web applications using HTML, CSS, and JavaScript.',
        duration: '4-8 months',
        demand: 'Very high demand',
        salary: '$70k - $140k',
        resources: [
            {
                title: 'React Documentation',
                type: '📚 Official Docs',
                link: '#'
            },
            { title: 'MDN Web Docs', type: '📖 Learning Resource', link: '#' }
        ],
        roadmap: [
            {
                step: 1,
                title: 'HTML & CSS Fundamentals',
                description: 'Learn the building blocks of the web'
            },
            {
                step: 2,
                title: 'JavaScript Mastery',
                description: 'Master modern JavaScript (ES6+)'
            }
        ]
    },
    backend: {
        id: 'backend',
        title: 'Backend Development',
        description: 'Build robust APIs and server-side applications',
        icon: '⚙️',
        color: '#339933',
        overview:
            'Backend development involves server-side programming, database management, and API creation to support frontend applications.',
        duration: '6-12 months',
        demand: 'High demand',
        salary: '$90k - $160k',
        resources: [
            {
                title: 'Node.js Documentation',
                type: '📚 Official Docs',
                link: '#'
            },
            { title: 'Express.js Guide', type: '📖 Framework Guide', link: '#' }
        ],
        roadmap: [
            {
                step: 1,
                title: 'Server-Side Programming',
                description: 'Learn Node.js, Python, or Java'
            },
            {
                step: 2,
                title: 'Database Fundamentals',
                description: 'SQL and NoSQL databases'
            }
        ]
    }
    // Add more fields as needed
};

function FieldPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [field, setField] = useState<FieldData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API/database fetch
        const fetchFieldData = async () => {
            setLoading(true);

            // In a real app, you would fetch from an API:
            // const response = await fetch(`/api/fields/${slug}`);
            // const data = await response.json();

            // For now, use mock data
            const data = fieldsData[slug];

            setTimeout(() => {
                setField(data || null);
                setLoading(false);
            }, 300); // Simulate network delay
        };

        fetchFieldData();
    }, [slug]);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Loading field information...</p>
            </div>
        );
    }

    if (!field) {
        return (
            <div className={styles.errorContainer}>
                <h1>Field Not Found</h1>
                <p>{`The field you're looking for doesn't exist.`}</p>
                <a href="/fields" className={styles.backButton}>
                    ← Back to All Fields
                </a>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <a href="/fields" className={styles.backLink}>
                    ← Back to All Fields
                </a>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>
                        <span
                            className={styles.titleIcon}
                            style={{ color: field.color }}
                        >
                            {field.icon}
                        </span>
                        {field.title} Roadmap
                    </h1>
                    <p className={styles.subtitle}>{field.description}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div
                    className={styles.overviewCard}
                    style={{ borderTopColor: field.color }}
                >
                    <h2>Overview</h2>
                    <p>{field.overview}</p>
                    <div className={styles.metadata}>
                        <span
                            style={{
                                color: field.color,
                                borderColor: `${field.color}20`
                            }}
                        >
                            ⏱️ {field.duration} to proficiency
                        </span>
                        <span
                            style={{
                                color: field.color,
                                borderColor: `${field.color}20`
                            }}
                        >
                            💼 {field.demand}
                        </span>
                        <span
                            style={{
                                color: field.color,
                                borderColor: `${field.color}20`
                            }}
                        >
                            💰 {field.salary} average salary
                        </span>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Learning Path</h2>
                    <div className={styles.roadmap}>
                        {field.roadmap.map((item) => (
                            <div
                                key={item.step}
                                className={styles.roadmapStep}
                                style={
                                    {
                                        '--step-color': field.color
                                    } as React.CSSProperties
                                }
                            >
                                <div
                                    className={styles.stepNumber}
                                    style={{ background: field.color }}
                                >
                                    {item.step}
                                </div>
                                <div className={styles.stepContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Recommended Resources</h2>
                    <div className={styles.resources}>
                        {field.resources.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.link}
                                className={styles.resourceCard}
                                style={
                                    {
                                        '--resource-color': field.color
                                    } as React.CSSProperties
                                }
                            >
                                <div
                                    className={styles.resourceType}
                                    style={{
                                        background: `${field.color}15`,
                                        color: field.color
                                    }}
                                >
                                    {resource.type}
                                </div>
                                <h3>{resource.title}</h3>
                                <div className={styles.resourceLink}>
                                    View Resource →
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <h2>Ready to start your journey?</h2>
                    <p>Begin with the first step and track your progress</p>
                    <button
                        className={styles.ctaButton}
                        style={{ background: field.color }}
                    >
                        Start Learning Path
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FieldPage;
