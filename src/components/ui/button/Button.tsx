import cn from "classnames";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type Children = {
    text?: string;
    svg?: React.ElementType;
    type?: string;
    onClick?: () => void;
    link?: string;
};

export default function Button({
    svg: Svg,
    text,
    type,
    onClick,
    link,
}: Children) {
    return (
        <>
            {!link ? (
                <button
                    onClick={onClick}
                    className={cn(styles.button, type && styles[type])}
                >
                    {Svg ? <Svg /> : text}
                </button>
            ) : (
                <NavLink
                    to={`${link}`}
                    className={cn(styles.button, type && styles[type])}
                >
                    {Svg ? <Svg /> : text}
                </NavLink>
            )}
        </>
    );
}
