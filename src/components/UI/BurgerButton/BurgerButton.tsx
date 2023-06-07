import * as React from "react";
import styles from "./BurgerButton.module.scss";

export interface IBurgerButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BurgerButton({ onClick }: IBurgerButtonProps) {
  return (
    <button className={styles["burger-button"]} onClick={onClick}>
      <span className={styles["burger-button__row"]} />
      <span className={styles["burger-button__row"]} />
      <span className={styles["burger-button__row"]} />
    </button>
  );
}
