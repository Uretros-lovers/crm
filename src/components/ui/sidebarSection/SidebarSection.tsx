import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebarSection.module.css";
import DownArrow from "@assets/downArrow.svg?react";

interface SidebarSectionProps  {
    title?: string;
    add?: React.ReactNode;
    items: SidebarItem[];
    defaultOpen?: boolean;
}
interface SidebarItem{
    id: number;
    label: string;
    to: string;
    iconLeft?: React.ElementType;
    colorDot?: string;
    group?:[];
}

function SidebarSection({title,add,items}:SidebarSectionProps ) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.asideList}>
            <div>
                <div className={styles.dropdown}>
                    <div  className={styles.title}>
                        {title}
                        <div className={styles.icons}>
                            {add && <button type='button' className={styles.plus}>
                                {add}
                            </button>}
                            <button type='button' onClick={() => setOpen(v => !v)}  className={styles.arrow + (open ? " " + styles.open : "")}>
                                <DownArrow />
                            </button>
                        </div>
                    </div>
                    <ul
                      className={open ? styles.listItemsActive : styles.listItems}
                    >
                        {items.map(({id, label, to, iconLeft: IconLeft, colorDot: ColorDot}) => {
                            return (
                                <li key={id} className={styles.listItem}>
                                    <NavLink  to={to}
                                              className={({ isActive }) =>
                                                  isActive ? `${styles.link} ${styles.activeLink}` : styles.link
                                              }
                                              >
                                        {IconLeft && <IconLeft className={styles.icon} />}
                                        {ColorDot && <span
                                          className={styles.dot}
                                          style={{backgroundColor: ColorDot}}
                                        />}
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

export default SidebarSection;
