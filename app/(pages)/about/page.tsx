import styles from './page.module.scss';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Master Technical Interviews with Confidence
                    </h1>
                    <p className={styles.heroSubtitle}>
                        At Upwise, we're on a mission to help software engineers
                        excel in technical interviews and build successful
                        careers in tech.
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                {/* Our Mission */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Mission</h2>
                        <p className={styles.sectionDescription}>
                            We believe that technical interviews should be a
                            fair assessment of skills, not a memorization test.
                            Our goal is to demystify the interview process and
                            provide the tools every engineer needs to succeed.
                        </p>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            {/* <div className={styles.featureIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.4 15C19.2668 15.3054 19.1304 15.6089 18.9909 15.9105C18.6211 16.7063 18.1959 17.475 17.719 18.2103C16.7809 19.7112 15.4044 20.896 13.7767 21.6001C12.149 22.3042 10.3474 22.4965 8.60078 22.1537C6.85412 21.8109 5.24718 20.9474 4 19.6775"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.60078 8.99999C4.73402 8.69457 4.87038 8.39111 5.00992 8.08955C5.37968 7.29368 5.8049 6.52501 6.28178 5.78973C7.21992 4.28883 8.5964 3.10405 10.2241 2.39995C11.8518 1.69585 13.6534 1.50352 15.4001 1.84634C17.1467 2.18916 18.7537 3.05262 20.0008 4.32253"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div> */}
                            <h3 className={styles.featureTitle}>
                                Comprehensive Preparation
                            </h3>
                            <p className={styles.featureDescription}>
                                Cover all aspects of technical interviews:
                                algorithms, data structures, system design,
                                behavioral questions, and domain-specific
                                topics.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            {/* <div className={styles.featureIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div> */}
                            <h3 className={styles.featureTitle}>
                                Real Interview Experience
                            </h3>
                            <p className={styles.featureDescription}>
                                Learn from actual interview questions asked by
                                top tech companies, with detailed explanations
                                and optimal solutions.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            {/* <div className={styles.featureIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div> */}
                            <h3 className={styles.featureTitle}>
                                Proven Strategies
                            </h3>
                            <p className={styles.featureDescription}>
                                Master problem-solving patterns, time management
                                techniques, and communication skills that
                                successful candidates use.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className={styles.section}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.sectionDescription}>
                                Upwise was founded by a group of senior
                                engineers from FAANG companies who experienced
                                firsthand the challenges and frustrations of
                                technical interviews.
                            </p>
                            <p className={styles.sectionDescription}>
                                We realized that while there were many resources
                                available, most focused solely on coding
                                problems without addressing the holistic
                                interview experience. That's why we created
                                Upwise - a comprehensive platform that prepares
                                you for the entire interview journey.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>
                                        10,000+
                                    </div>
                                    <div className={styles.statLabel}>
                                        Engineers Helped
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>
                                        500+
                                    </div>
                                    <div className={styles.statLabel}>
                                        Interview Questions
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>50+</div>
                                    <div className={styles.statLabel}>
                                        Companies Covered
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.storyImage}>
                            <div className={styles.imagePlaceholder}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17 8H19C20.6569 8 22 9.34315 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11C2 9.34315 3.34315 8 5 8H7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17 10V6C17 4.34315 15.6569 3 14 3H10C8.34315 3 7 4.34315 7 6V10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className={styles.imageText}>
                                    Our team at work
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>What We Offer</h2>
                        <p className={styles.sectionDescription}>
                            Everything you need to prepare for technical
                            interviews at top tech companies.
                        </p>
                    </div>

                    <div className={styles.offerings}>
                        <div className={styles.offeringCard}>
                            <h3 className={styles.offeringTitle}>
                                Coding Challenges
                            </h3>
                            <ul className={styles.offeringList}>
                                <li>Curated problems by difficulty</li>
                                <li>Multiple language support</li>
                                <li>Step-by-step solutions</li>
                                <li>Time and space complexity analysis</li>
                            </ul>
                        </div>

                        <div className={styles.offeringCard}>
                            <h3 className={styles.offeringTitle}>
                                System Design
                            </h3>
                            <ul className={styles.offeringList}>
                                <li>Real-world design problems</li>
                                <li>Scalability patterns</li>
                                <li>Database design principles</li>
                                <li>API design best practices</li>
                            </ul>
                        </div>

                        <div className={styles.offeringCard}>
                            <h3 className={styles.offeringTitle}>
                                Interview Prep
                            </h3>
                            <ul className={styles.offeringList}>
                                <li>Mock interview simulations</li>
                                <li>Behavioral question guides</li>
                                <li>Company-specific preparation</li>
                                <li>Negotiation strategies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Start Your Journey Today
                        </h2>
                        <p className={styles.ctaDescription}>
                            Join thousands of engineers who have successfully
                            navigated technical interviews with Upwise. Your
                            next career opportunity awaits.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.ctaButtonPrimary}>
                                Explore Resources
                            </button>
                            <button className={styles.ctaButtonSecondary}>
                                View Pricing
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
