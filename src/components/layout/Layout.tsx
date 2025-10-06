import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Aside from "./aside/Aside";

export default function Layout() {
    return (
        <>
            <Header />
            <Aside />
            <main>
                <Outlet />
            </main>
        </>
    );
}
