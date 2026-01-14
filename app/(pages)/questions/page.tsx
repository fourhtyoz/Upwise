'use client';

import React, { useState, useMemo } from 'react';
import styles from './page.module.scss';

const initialQuestions = [
    {
        id: '1',
        question: 'Reverse a linked list',
        answer: 'Iterative and recursive solutions...',
        level: 'medium',
        companies: ['Google', 'Amazon', 'Microsoft'],
        category: ['backend'],
        language: 'javascript'
    },
    {
        id: '2',
        question: 'Implement a debounce function',
        answer: 'Debounce delays function execution...',
        level: 'easy',
        companies: ['Google', 'Facebook'],
        category: ['frontend'],
        language: 'javascript'
    },
    {
        id: '3',
        question: 'Two Sum problem',
        answer: 'Use hashmap for O(n) solution...',
        level: 'easy',
        companies: ['Amazon', 'Microsoft', 'Apple'],
        category: ['backend', 'frontend'],
        language: 'python'
    },
    {
        id: '4',
        question: 'Design a URL shortening service',
        answer: 'Consider hash generation, storage, scaling...',
        level: 'hard',
        companies: ['Google', 'Amazon'],
        category: ['backend', 'system-design'],
        language: 'java'
    },
    {
        id: '5',
        question: 'Implement responsive image gallery',
        answer: 'Use CSS Grid/Flexbox with media queries...',
        level: 'medium',
        companies: ['Facebook', 'Netflix'],
        category: ['frontend'],
        language: 'javascript'
    },
    {
        id: '6',
        question: 'Kubernetes pod lifecycle',
        answer: 'Understand init containers, probes, restart policies...',
        level: 'hard',
        companies: ['Amazon', 'Microsoft'],
        category: ['devops'],
        language: 'python'
    },
    {
        id: '7',
        question: 'React component optimization',
        answer: 'Use React.memo, useMemo, useCallback...',
        level: 'medium',
        companies: ['Facebook', 'Airbnb'],
        category: ['frontend'],
        language: 'javascript'
    },
    {
        id: '8',
        question: 'Implement LRU Cache',
        answer: 'Use doubly linked list and hashmap...',
        level: 'hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
        category: ['backend'],
        language: 'java'
    },
    {
        id: '9',
        question: 'Android activity lifecycle',
        answer: 'Understand onCreate, onStart, onResume...',
        level: 'medium',
        companies: ['Google', 'Meta'],
        category: ['android'],
        language: 'kotlin'
    },
    {
        id: '10',
        question: 'Binary tree traversal',
        answer: 'In-order, pre-order, post-order...',
        level: 'medium',
        companies: ['Amazon', 'Microsoft'],
        category: ['backend'],
        language: 'python'
    }
];

// Filter options
const CATEGORIES = [
    'all',
    'frontend',
    'backend',
    'android',
    'devops',
    'system-design'
];
const LEVELS = ['all', 'easy', 'medium', 'hard'];
const COMPANIES = [
    'all',
    'Google',
    'Amazon',
    'Microsoft',
    'Facebook',
    'Apple',
    'Netflix',
    'Airbnb',
    'Meta'
];
const LANGUAGES = [
    'all',
    'javascript',
    'python',
    'java',
    'kotlin',
    'typescript',
    'c++',
    'go'
];

function QuestionsPage() {
    const [questions, setQuestions] = useState(initialQuestions);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [selectedCompany, setSelectedCompany] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    // Filter questions based on all criteria
    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            // Search filter
            const matchesSearch =
                searchQuery === '' ||
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase());

            // Category filter
            const matchesCategory =
                selectedCategory === 'all' ||
                q.category.includes(selectedCategory);

            // Level filter
            const matchesLevel =
                selectedLevel === 'all' || q.level === selectedLevel;

            // Company filter
            const matchesCompany =
                selectedCompany === 'all' ||
                q.companies.includes(selectedCompany);

            // Language filter
            const matchesLanguage =
                selectedLanguage === 'all' || q.language === selectedLanguage;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLevel &&
                matchesCompany &&
                matchesLanguage
            );
        });
    }, [
        questions,
        searchQuery,
        selectedCategory,
        selectedLevel,
        selectedCompany,
        selectedLanguage
    ]);

    const toggleQuestion = (id) => {
        setExpandedQuestion(expandedQuestion === id ? null : id);
    };

    const clearFilters = () => {
        setSelectedCategory('all');
        setSelectedLevel('all');
        setSelectedCompany('all');
        setSelectedLanguage('all');
        setSearchQuery('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Technical Interview Questions</h1>
                <p className={styles.subtitle}>
                    Browse and filter questions by category, difficulty,
                    company, and language
                </p>
            </div>

            {/* Search Bar */}
            <div className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <svg
                        className={styles.searchIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search questions or answers..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className={styles.clearSearch}
                            onClick={() => setSearchQuery('')}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Category</label>
                    <div className={styles.filterButtons}>
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category === 'all'
                                    ? 'All Categories'
                                    : category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>
                        Difficulty Level
                    </label>
                    <div className={styles.filterButtons}>
                        {LEVELS.map((level) => (
                            <button
                                key={level}
                                className={`${styles.filterButton} ${styles[`level-${level}`]} ${selectedLevel === level ? styles.active : ''}`}
                                onClick={() => setSelectedLevel(level)}
                            >
                                {level === 'all' ? 'All Levels' : level}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Company</label>
                    <div className={styles.filterButtons}>
                        {COMPANIES.map((company) => (
                            <button
                                key={company}
                                className={`${styles.filterButton} ${selectedCompany === company ? styles.active : ''}`}
                                onClick={() => setSelectedCompany(company)}
                            >
                                {company === 'all' ? 'All Companies' : company}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Language</label>
                    <div className={styles.filterButtons}>
                        {LANGUAGES.map((language) => (
                            <button
                                key={language}
                                className={`${styles.filterButton} ${selectedLanguage === language ? styles.active : ''}`}
                                onClick={() => setSelectedLanguage(language)}
                            >
                                {language === 'all'
                                    ? 'All Languages'
                                    : language}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterActions}>
                    <button
                        className={styles.clearButton}
                        onClick={clearFilters}
                    >
                        Clear All Filters
                    </button>
                    <div className={styles.resultsCount}>
                        {filteredQuestions.length}{' '}
                        {filteredQuestions.length === 1
                            ? 'question'
                            : 'questions'}{' '}
                        found
                    </div>
                </div>
            </div>

            {/* Questions List */}
            <div className={styles.questionsList}>
                {filteredQuestions.length === 0 ? (
                    <div className={styles.noResults}>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.5 13L11.5 15L14.5 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3>No questions found</h3>
                        <p>Try adjusting your filters or search query</p>
                        <button
                            className={styles.resetButton}
                            onClick={clearFilters}
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    filteredQuestions.map((question) => (
                        <div key={question.id} className={styles.questionCard}>
                            <div
                                className={styles.questionHeader}
                                onClick={() => toggleQuestion(question.id)}
                            >
                                <div className={styles.questionInfo}>
                                    <h3 className={styles.questionTitle}>
                                        {question.question}
                                    </h3>
                                    <div className={styles.questionMeta}>
                                        <span
                                            className={`${styles.levelBadge} ${styles[`level-${question.level}`]}`}
                                        >
                                            {question.level}
                                        </span>
                                        <span className={styles.languageBadge}>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 5H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {question.language}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.questionActions}>
                                    <div className={styles.companies}>
                                        {question.companies.map((company) => (
                                            <span
                                                key={company}
                                                className={styles.companyTag}
                                            >
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.categories}>
                                        {question.category.map((cat) => (
                                            <span
                                                key={cat}
                                                className={styles.categoryTag}
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <button className={styles.expandButton}>
                                        {expandedQuestion === question.id
                                            ? 'Hide Answer'
                                            : 'Show Answer'}
                                    </button>
                                </div>
                            </div>

                            {expandedQuestion === question.id && (
                                <div className={styles.answerSection}>
                                    <div className={styles.answerContent}>
                                        <h4 className={styles.answerTitle}>
                                            Answer
                                        </h4>
                                        <p className={styles.answerText}>
                                            {question.answer}
                                        </p>
                                    </div>
                                    <div className={styles.answerActions}>
                                        <button className={styles.actionButton}>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 12H19M12 5L19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            View Detailed Solution
                                        </button>
                                        <button className={styles.actionButton}>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682C6.07538 14.4393 8.92462 14.4393 10.682 12.682M19.682 17.682C21.4393 15.9246 21.4393 13.0754 19.682 11.318C17.9246 9.56066 15.0754 9.56066 13.318 11.318"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14 5L10 19M15 12L21 12M3 12L9 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Practice in Editor
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Stats Footer */}
            {/* <div className={styles.statsFooter}>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>{questions.length}</div>
                    <div className={styles.statLabel}>Total Questions</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                        {questions.filter((q) => q.level === 'easy').length}
                    </div>
                    <div className={styles.statLabel}>Easy</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                        {questions.filter((q) => q.level === 'medium').length}
                    </div>
                    <div className={styles.statLabel}>Medium</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                        {questions.filter((q) => q.level === 'hard').length}
                    </div>
                    <div className={styles.statLabel}>Hard</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                        {new Set(questions.flatMap((q) => q.companies)).size}
                    </div>
                    <div className={styles.statLabel}>Companies</div>
                </div>
            </div> */}
        </div>
    );
}

export default QuestionsPage;
