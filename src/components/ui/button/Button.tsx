import cn from "classnames";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type ButtonProps = {
    type?: string;
    onClick?: () => void;
    link?: string;
    children?: ReactNode;
};

export default function Button({ type, onClick, link, children }: ButtonProps) {
    return (
        <>
            {!link ? (
                <button
                    onClick={onClick}
                    className={cn(styles.button, type && styles[type])}
                >
                    {children}
                </button>
            ) : (
                <NavLink
                    to={`${link}`}
                    className={cn(styles.button, type && styles[type])}
                >
                    {children}
                </NavLink>
            )}
        </>
    );
}
