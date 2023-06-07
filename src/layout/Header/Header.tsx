import styles from "./Header.module.scss";
import companyLogo from "../../assets/icons/mitrasoft-logo.png";
import BurgerButton from "../../components/UI/BurgerButton/BurgerButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavMenu from "../../components/UI/NavMenu/NavMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <header className={styles.header}>
      <img src={companyLogo} alt="MitraSoft" className={styles.header__logo} />
      <BurgerButton onClick={handleShow} />

      <Offcanvas show={showMenu} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
