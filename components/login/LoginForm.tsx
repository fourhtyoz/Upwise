'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
    styles: any;
}

export default function LoginForm({ styles }: LoginFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);

        try {
            // In a real app, you would make an API call here
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

            // For demo purposes, we'll just redirect to dashboard
            router.push('/dashboard');
        } catch (error) {
            setErrors({ submit: 'Invalid email or password' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {errors.submit && (
                <div className={styles.errorMessage}>⚠️ {errors.submit}</div>
            )}

            <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                    <span className={styles.inputIcon}>✉️</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`${styles.input} ${errors.email ? styles.error : ''}`}
                        disabled={isLoading}
                    />
                </div>
                {errors.email && (
                    <div className={styles.errorMessage}>⚠️ {errors.email}</div>
                )}
            </div>

            <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                    <span className={styles.inputIcon}>🔒</span>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className={`${styles.input} ${errors.password ? styles.error : ''}`}
                        disabled={isLoading}
                    />
                </div>
                {errors.password && (
                    <div className={styles.errorMessage}>
                        ⚠️ {errors.password}
                    </div>
                )}
            </div>

            <div className={styles.rememberForgot}>
                <div className={styles.rememberMe}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
            >
                {isLoading ? (
                    <span className={styles.loading}>
                        <span className={styles.spinner}></span>
                        Signing in...
                    </span>
                ) : (
                    'Sign In'
                )}
            </button>
        </form>
    );
}
