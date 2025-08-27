import React from "react";
import styles from "./header.module.css";
import Arrow from "@assets/arrow.svg?react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "../../../features/theme/ToggleTheme";
import NotificationAlert from "../../ui/notificationAlert/NotificationAlert";

type Crumb = {
    label: string;
    href: string;
};

const Header = () => {
    const breadcrumbs: Crumb[] = [
        { label: "Workspace", href: "/" },
        { label: "Projects", href: "/projects" },
    ];

    return (
        <header className={styles.header}>
            <nav>
                {breadcrumbs.map((crumb, i) => (
                    <React.Fragment key={i}>
                        <NavLink to={crumb.href}>{crumb.label}</NavLink>
                        {i < breadcrumbs.length - 1 && (
                            <span>
                                <Arrow />
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
            <div className={styles.header_right}>
                <ToggleTheme />
                <NotificationAlert />
            </div>
        </header>
    );
};

export default Header;
