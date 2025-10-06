import { useState } from "react";

import styles from "./toggleTheme.module.css";
import Button from "../../components/ui/button/Button";
import Sun from "@assets/sun.svg?react";
import Moon from "@assets/moon.svg?react";

export default function ToggleTheme() {
    const [active, setActive] = useState<boolean>(true);

    return (
        <div className={styles.toggleTheme}>
            <Button
                svg={Sun}
                type={active ? "accent" : ""}
                onClick={() => setActive(true)}

            />
            <Button
                svg={Moon}
                type={active ? "" : "accent"}
                onClick={() => setActive(false)}
            />
        </div>
    );
}
