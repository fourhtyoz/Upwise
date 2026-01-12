import s from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

export default function Button({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                s.button,
                s[variant],
                s[size],
                fullWidth && s.fullWidth,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
