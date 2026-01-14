import styles from './page.module.scss';

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Get in Touch</h1>
                    <p className={styles.heroSubtitle}>
                        {`We'd love to hear from you. Send us a message and we'll
                        respond as soon as possible.`}
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contactForm}>
                    <h2 className={styles.sectionTitle}>Send us a Message</h2>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className={styles.input}
                                placeholder="What is this regarding?"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>
                                Message *
                            </label>
                            <textarea
                                id="message"
                                className={styles.textarea}
                                rows={6}
                                placeholder="Enter your message here..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
