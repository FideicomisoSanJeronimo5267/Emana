import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        className?: string;
        link?: {
            href: string;
        }
}

export default function Button({children, className, ...props}: ButtonProps) {
    if (props.link) {
        return (
            <Link href={props.link.href} className={`${styles.button} ${className}`}>
                {children}
            </Link>
        )
    }
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    )
}