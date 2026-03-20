import React from 'react';
import styles from './button.module.css';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        className?: string;
}

export default function Button({children, className, ...props}: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    )
}