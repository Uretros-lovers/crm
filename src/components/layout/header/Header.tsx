import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./header.module.css";
import Arrow from "@assets/arrow.svg?react";
import ToggleTheme from "@/features/theme/ToggleTheme";
import NotificationAlert from "@components/ui/notificationAlert/NotificationAlert";
import Profile from "@/features/profile/ui/Profile";

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
                <Profile />
            </div>
        </header>
    );
};

export default Header;
