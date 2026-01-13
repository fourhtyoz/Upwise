import Link from 'next/link';
import cn from 'classnames';
import s from './LinkButton.module.scss';

interface LinkProps {
    href: string;
    text: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

export default function LinkButton({
    variant = 'primary',
    fullWidth = false,
    size = 'medium',
    href,
    className,
    text
}: LinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                s.link,
                s[variant],
                s[size],
                fullWidth && s.fullWidth,
                className
            )}
        >
            {text}
        </Link>
    );
}
