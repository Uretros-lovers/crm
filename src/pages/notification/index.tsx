import styles from "./index.module.css";
import profileMock from "@assets/maria.png";
import NotificationCard from "./ui/NotificationCard";

export default function Notification() {
    const notificationMock = [
        {
            date: "12.12.12",
            unread: true,
            project: {
                name: "Syntra",
                unit: "PixelForge.io",
                task: "Make Designe",
            },
            description:
                "Design a responsive landing page with clear UX flow and prepare assets for front-end development",
            link: "anus",
            profile: {
                img: profileMock,
                name: "Maria Bryan",
                subName: "Personal comment for Steven Taylor",
                online: true,
            },
        },
        {
            date: "12.12.12",
            unread: true,
            project: {
                name: "Syntra",
                unit: "PixelForge.io",
                task: "Make Designe",
            },
            description:
                "Design a responsive landing page with clear UX flow and prepare assets for front-end development",
            link: "anus",
            profile: {
                img: profileMock,
                name: "Maria Bryan",
                subName: "Personal comment for Steven Taylor",
                online: true,
            },
        },
        {
            date: "12.12.12",
            unread: true,
            project: {
                name: "Syntra",
                unit: "PixelForge.io",
                task: "Make Designe",
            },
            description:
                "Design a responsive landing page with clear UX flow and prepare assets for front-end development",
            link: "anus",
            profile: {
                img: profileMock,
                name: "Maria Bryan",
                subName: "Personal comment for Steven Taylor",
                online: true,
            },
        },
    ];
    return (
        <>
            <div className={styles.page_title}>
                <h1>Notification</h1>
                <p className={styles.last_update}>
                    Last updated on: <span>Mart 12, 2025</span>
                </p>
            </div>
            <div className={styles.wrapper}>
                {notificationMock.map((items, i) => (
                    <NotificationCard
                        key={i}
                        date={items.date}
                        unread={items.unread}
                        link={items.link}
                        project={items.project}
                        description={items.description}
                        profile={items.profile}
                    />
                ))}
            </div>
        </>
    );
}
