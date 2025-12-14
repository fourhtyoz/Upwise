import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/ui/Navbar/Navbar';
import Footer from '@/components/ui/Footer/Footer';

// Using Inter font for better minimalism (optional - Geist is fine too)
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

// Or keep Geist if you prefer - here's a cleaner setup
export const metadata: Metadata = {
    title: 'Upwise | Master Technical Interviews',
    description:
        'Coding challenges, interview preparation, and study resources for software engineers',
    keywords: [
        'coding interviews',
        'technical interviews',
        'algorithms',
        'data structures',
        'system design'
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body>
                <div className="layout">
                    <Navbar />
                    <main className="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
