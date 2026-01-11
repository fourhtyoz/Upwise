'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './SignUpForm.module.scss';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function SignUpForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        agreeToTerms: false,
        receiveUpdates: true
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

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        return newErrors;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else {
            if (formData.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters';
            }
            if (!/[A-Z]/.test(formData.password)) {
                newErrors.password =
                    'Password must contain an uppercase letter';
            }
            if (!/[a-z]/.test(formData.password)) {
                newErrors.password = 'Password must contain a lowercase letter';
            }
            if (!/\d/.test(formData.password)) {
                newErrors.password = 'Password must contain a number';
            }
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms =
                'You must agree to the terms and conditions';
        }

        return newErrors;
    };

    const handleNext = () => {
        const stepErrors = validateStep1();
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const stepErrors = validateStep2();
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        setIsLoading(true);

        try {
            // In a real app, you would make an API call here
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

            // For demo purposes, we'll simulate successful registration
            router.push('/dashboard?welcome=true');
        } catch (error) {
            setErrors({ submit: 'Registration failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const checkPasswordRequirement = (requirement: string) => {
        switch (requirement) {
            case 'length':
                return formData.password.length >= 8;
            case 'uppercase':
                return /[A-Z]/.test(formData.password);
            case 'lowercase':
                return /[a-z]/.test(formData.password);
            case 'number':
                return /\d/.test(formData.password);
            default:
                return false;
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* Progress Indicator */}
            <div className={styles.progressIndicator}>
                <div
                    className={`${styles.step} ${step >= 1 ? styles.active : ''}`}
                ></div>
                <div
                    className={`${styles.step} ${step >= 2 ? styles.active : ''}`}
                ></div>
            </div>

            {errors.submit && (
                <div className={styles.errorMessage}>{errors.submit}</div>
            )}

            {step === 1 ? (
                <>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                {/* <span className={styles.inputIcon}>👤</span> */}
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.firstName && (
                                <div className={styles.errorMessage}>
                                    {errors.firstName}
                                </div>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                {/* <span className={styles.inputIcon}>👤</span> */}
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className={`${styles.input} ${errors.lastName ? styles.error : ''}`}
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.lastName && (
                                <div className={styles.errorMessage}>
                                    {errors.lastName}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            {/* <span className={styles.inputIcon}>✉️</span> */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.email && (
                            <div className={styles.errorMessage}>
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        Continue
                    </button>
                </>
            ) : (
                <>
                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            {/* <span className={styles.inputIcon}>🔒</span> */}
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create password"
                                className={`${styles.input} ${errors.password ? styles.error : ''}`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <div className={styles.errorMessage}>
                                {errors.password}
                            </div>
                        )}

                        {/* Password Requirements */}
                        <div className={styles.passwordRequirements}>
                            <div className={styles.requirementTitle}>
                                Password must contain:
                            </div>
                            <ul className={styles.requirementList}>
                                <li
                                    className={`${styles.requirementItem} ${checkPasswordRequirement('length') ? styles.valid : styles.invalid}`}
                                >
                                    <span className={styles.requirementIcon}>
                                        {checkPasswordRequirement('length')
                                            ? '✓'
                                            : '•'}
                                    </span>
                                    <span>At least 8 characters</span>
                                </li>
                                <li
                                    className={`${styles.requirementItem} ${checkPasswordRequirement('uppercase') ? styles.valid : styles.invalid}`}
                                >
                                    <span className={styles.requirementIcon}>
                                        {checkPasswordRequirement('uppercase')
                                            ? '✓'
                                            : '•'}
                                    </span>
                                    <span>One uppercase letter</span>
                                </li>
                                <li
                                    className={`${styles.requirementItem} ${checkPasswordRequirement('lowercase') ? styles.valid : styles.invalid}`}
                                >
                                    <span className={styles.requirementIcon}>
                                        {checkPasswordRequirement('lowercase')
                                            ? '✓'
                                            : '•'}
                                    </span>
                                    <span>One lowercase letter</span>
                                </li>
                                <li
                                    className={`${styles.requirementItem} ${checkPasswordRequirement('number') ? styles.valid : styles.invalid}`}
                                >
                                    <span className={styles.requirementIcon}>
                                        {checkPasswordRequirement('number')
                                            ? '✓'
                                            : '•'}
                                    </span>
                                    <span>One number</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            {/* <span className={styles.inputIcon}>🔒</span> */}
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                tabIndex={-1}
                            >
                                {showConfirmPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <div className={styles.errorMessage}>
                                {errors.confirmPassword}
                            </div>
                        )}
                    </div>

                    <div className={styles.termsAgreement}>
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <label htmlFor="agreeToTerms">
                            I agree to the{' '}
                            <Link href="/terms" target="_blank">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy" target="_blank">
                                Privacy Policy
                            </Link>
                        </label>
                    </div>
                    {errors.agreeToTerms && (
                        <div className={styles.errorMessage}>
                            {errors.agreeToTerms}
                        </div>
                    )}

                    <div className={styles.termsAgreement}>
                        <input
                            type="checkbox"
                            id="receiveUpdates"
                            name="receiveUpdates"
                            checked={formData.receiveUpdates}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <label htmlFor="receiveUpdates">
                            Send me occasional product updates, interview tips,
                            and promotions
                        </label>
                    </div>

                    <div className={styles.formActions}>
                        <button
                            type="button"
                            onClick={handleBack}
                            className={styles.backButton}
                            disabled={isLoading}
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isLoading || !formData.agreeToTerms}
                        >
                            {isLoading ? (
                                <span className={styles.loading}>
                                    <span className={styles.spinner}></span>
                                    Creating account...
                                </span>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
