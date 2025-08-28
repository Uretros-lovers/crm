import styles from "./aside.module.css";
import AsideList from "../../widgets/AsideList";

function Aside() {
    return(
      <aside className={styles.aside}>
        <AsideList />
      </aside>)
}

export default Aside;
