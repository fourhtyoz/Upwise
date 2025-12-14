import styles from '@/app/page.module.scss';

export default function HomeContent() {
    return (
        <section className={styles.content}>
            <div className={styles.contentContainer}>
                <div className={styles.contentGrid}>
                    <div className={styles.contentText}>
                        <h2>Learn by Solving Real Problems</h2>
                        <p>
                            Our platform features coding challenges from actual
                            technical interviews at top companies like Google,
                            Meta, Amazon, and more.
                        </p>
                        <ul className={styles.contentList}>
                            <li>Detailed solution explanations</li>
                            <li>Multiple programming languages</li>
                            <li>Time and space complexity analysis</li>
                            <li>Pattern recognition guides</li>
                            <li>Common pitfalls to avoid</li>
                        </ul>
                    </div>

                    <div className={styles.contentVisual}>
                        <div className={styles.codeBlock}>
                            <pre>
                                <code>{`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
