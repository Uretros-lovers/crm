import {NavLink} from "react-router-dom";
import styles from "./sidebar.module.css";
import React from "react";
import { Logo } from "@assets";
import SidebarSection from "../../ui/sidebarSection/SidebarSection";
// import TasksIcon from "*.svg?react";
// import StarIcon from "*.svg?react";
// import Messages from "*.svg?react";
// import Trash from "*.svg?react";


import TasksIcon from "@assets/tasks.svg?react";
import StarIcon from "@assets/starIcon.svg?react";
import Messages from "@assets/messagesIcon.svg?react";
import Trash from "@assets/trashIcon.svg?react";
import Plus from "@assets/plusIcon.svg?react";

export interface GeneralItem {
    id: number;
    label: string;
    to: string;
    svg: React.ElementType;
}

const list: GeneralItem[] = [
    {
        id:1,
        label: "My Tasks",
        to: "mytask",
        svg: TasksIcon,
    },
    {
        id:2,
        label: "Favorites",
        to: "favorites",
        svg: StarIcon,
    },
    {
        id:3,
        label: "DMessages",
        to: "dm",
        svg: Messages,
    },
    {
        id:4,
        label: "Trash",
        to: "trash",
        svg: Trash,
    },
];

function Sidebar(){
    return (
        <>
            <div className={styles.sidebar}>
                <NavLink to="/" className={styles.logoLink}>
                    <Logo/>
                </NavLink>
            </div>
            <SidebarSection title='General' trailing={<Plus />} items={list}/>
        </>
    )
}

export default Sidebar;