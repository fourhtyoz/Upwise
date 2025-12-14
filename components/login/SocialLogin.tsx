import styles from './SocialLogin.module.scss';

const socialProviders = [
    { name: 'GitHub', icon: '🐙', color: '#333' },
    { name: 'Google', icon: 'G', color: '#4285F4' },
    { name: 'LinkedIn', icon: 'in', color: '#0077B5' }
];

export default function SocialLogin() {
    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
    };

    return (
        <div className={styles.socialButtons}>
            {socialProviders.map((provider) => (
                <button
                    key={provider.name}
                    type="button"
                    className={styles.socialButton}
                    onClick={() => handleSocialLogin(provider.name)}
                    style={
                        {
                            '--social-color': provider.color
                        } as React.CSSProperties
                    }
                >
                    <span className={styles.socialIcon}>{provider.icon}</span>
                    <span>{provider.name}</span>
                </button>
            ))}
        </div>
    );
}
