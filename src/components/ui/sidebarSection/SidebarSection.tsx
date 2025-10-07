import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebarSection.module.css";
import DownArrow from "@assets/downArrow.svg?react";

interface Props {
    title?: string;
    trailing?: React.ReactNode;
    items: {
        id: number;
        label: string;
        to: string;
        svg?: React.ElementType;
        colorDot?: string;
    }[];
}

function Sidebar({title,trailing,items}:Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.asideList}>
            <div>
                <div className={styles.dropdown}>
                    <div  className={styles.title}>
                        {title}
                        <div className={styles.icons}>
                            <div className={styles.plus}>
                                {trailing}
                            </div>
                            <div className={open ? styles.arrow : styles.arrowOpen}>
                                <DownArrow onClick={()=>setOpen((v) => !v)}/>
                            </div>
                        </div>
                    </div>
                    <ul
                        className={open ? styles.listItemsActive : styles.listItems}
                    >
                        {items.map(({id, label, to, svg: Svg, colorDot: ColorDot}) => {
                            return (
                                <li key={id} className={styles.listItem}>
                                    <NavLink  to={to}
                                              className={({ isActive }) =>
                                                  isActive ? `${styles.link} ${styles.activeLink}` : styles.link
                                              }
                                              >
                                        {Svg && <Svg className={styles.icon} />}
                                        {ColorDot && <ColorDot />}
                                        {label}
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

export default Sidebar;
