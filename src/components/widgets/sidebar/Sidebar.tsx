import {NavLink} from "react-router-dom";
import styles from "./sidebar.module.css";
import React, {useEffect, useState} from "react";
import { Logo } from "@assets";
import SidebarSection from "../../ui/sidebarSection/SidebarSection";
import TasksIcon from "@assets/tasks.svg?react";
import StarIcon from "@assets/starIcon.svg?react";
import Messages from "@assets/messagesIcon.svg?react";
import Trash from "@assets/trashIcon.svg?react";
import Plus from "@assets/plusIcon.svg?react";
import {fakeFetchProjects} from '../../../services/mocks/api/projects'
import {Projects} from "../../../services/mocks/api/projects";

interface GeneralItem {
    id: number;
    label: string;
    to: string;
    iconLeft: React.ElementType;
}

const list: GeneralItem[] = [
    {
        id:1,
        label: "My Tasks",
        to: "/mytask",
        iconLeft: TasksIcon,
    },
    {
        id:2,
        label: "Favorites",
        to: "/favorites",
        iconLeft: StarIcon,
    },
    {
        id:3,
        label: "DMessages",
        to: "/dm",
        iconLeft: Messages,
    },
    {
        id:4,
        label: "Trash",
        to: "/trash",
        iconLeft: Trash,
    },
];


function Sidebar(){
    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        fakeFetchProjects()
          .then((response) => setProjects(response))
    }, []);


    return (
        <>
            <div className={styles.sidebar}>
                <NavLink to="/" className={styles.logoLink}>
                    <Logo/>
                </NavLink>
            </div>
            <SidebarSection title='General' items={list}/>
            <SidebarSection title='Projects' items={projects} add={<Plus/>}/>
        </>
    )
}

export default Sidebar;