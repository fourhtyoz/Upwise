import styles from './not-found.module.scss';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className={styles.errorContainer}>
            <h1>Field Not Found</h1>
            <p>{`The pag you're looking for doesn't exist.`}</p>
            <Link href="/" className={styles.backButton}>
                ← Back to Home Page
            </Link>
        </div>
    );
}
