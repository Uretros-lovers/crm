import { NavLink } from "react-router-dom";
import styles from "./notificatonCard.module.css";
import classNames from "classnames";

interface notificationItem {
    date: string;
    unread: boolean;
    link: string;
    project: Project;
    profile: Profile;
    description: string;
}
interface Project {
    name: string;
    unit: string;
    task: string;
}
interface Profile {
    img: string;
    name: string;
    subName: string;
    online: boolean;
}

export default function NotificationCard({ ...props }: notificationItem) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <NavLink to={`${props.link}`}>
                    {Object.values(props.project).map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </NavLink>
                <p>{props.date}</p>
            </div>
            <div className={styles.profile}>
                <div
                    className={classNames(
                        props.profile.online && styles.profile_online
                    )}
                >
                    <img
                        loading="eager"
                        fetchPriority="high"
                        src={props.profile.img}
                        alt={props.profile.name}
                    />
                </div>
                <div>
                    <p>{props.profile.name}</p>
                    <p>{props.profile.subName}</p>
                </div>
            </div>
            <div className={styles.message}>
                <h2>{props.project.unit}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
