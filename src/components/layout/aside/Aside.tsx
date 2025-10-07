import styles from "./aside.module.css";
import Sidebar from "../../widgets/sidebar/Sidebar";

function Aside() {
    return(
      <aside className={styles.aside}>
        <Sidebar />
      </aside>)
}

export default Aside;
