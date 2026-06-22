import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        className?: string;
        link?: {
            href: string;
            target?: React.HTMLAttributeAnchorTarget;
            rel?: string;
        }
}

export default function Button({children, className, onClick, ...props}: ButtonProps) {
    if (props.link) {
        return (
            <Link
                href={props.link.href}
                target={props.link.target}
                rel={props.link.rel ?? (props.link.target === '_blank' ? 'noopener noreferrer' : undefined)}
                className={`${styles.button} ${className}`}
                onClick={onClick}
            >
                {children}
            </Link>
        )
    }
    return (
        <button className={`${styles.button} ${className}`} {...props} onClick={onClick}>
            {children}
        </button>
    )
}