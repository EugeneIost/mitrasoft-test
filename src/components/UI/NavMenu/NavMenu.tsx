import { Link } from "react-router-dom";
import styles from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <nav className={styles["nav-menu"]}>
      <Link to="/" className={styles["nav-menu__item"]}>
        Главная страница
      </Link>
      <Link to="/about" className={styles["nav-menu__item"]}>
        Обо мне
      </Link>
    </nav>
  );
}
