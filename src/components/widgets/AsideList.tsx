// import { Logo, DownArrow } from "@assets";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Logo } from "@assets"; // остаётся логотип
import styles from "./asideList.module.css";
import DownArrow from "@assets/downArrow.svg?react";
import TasksIcon from "@assets/tasks.svg?react";
import StarIcon from "@assets/starIcon.svg?react";
import Messages from "@assets/messagesIcon.svg?react";
import Trash from "@assets/trashIcon.svg?react";

interface GeneralList {
    name: string;
    svg: React.ElementType;
    link: string;
}

const list: GeneralList[] = [
    {
        name: "My Tasks",
        svg: TasksIcon,
        link: "mytask",
    },
    {
        name: "Favorites",
        svg: StarIcon,
        link: "favorites",
    },
    {
        name: "DMessages",
        svg: Messages,
        link: "dm",
    },
    {
        name: "Trash",
        svg: Trash,
        link: "trash",
    },
];

function AsideList() {
    const [open, setOpen] = useState(false);
    const menuDropdown = () => {
        setOpen((v) => !v);
    };

    return (
        <div className={styles.asideList}>
            <div>
                <NavLink to="/" className={styles.logoLink}>
                    <Logo className={styles.logo} />
                </NavLink>
            </div>
            <div>
                <div className={styles.dropdown}>
                    <div onClick={menuDropdown} className={styles.title}>
                        General
                        <div className={open ? styles.arrow : styles.arrowOpen}>
                            <DownArrow />
                        </div>
                    </div>
                    <ul
                        className={
                            open ? styles.listItemsActive : styles.listItems
                        }
                    >
                        {list.map(({ name, link, svg: Svg }, i) => {
                            return (
                                <li key={i} className={styles.listItem}>
                                    <NavLink to={link} className={styles.link}>
                                        <Svg className={styles.icon} />
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AsideList;
