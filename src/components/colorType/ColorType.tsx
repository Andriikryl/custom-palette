import React from "react";
import { colord } from "colord";
import styles from "./style.module.css";

interface ColorTypeProps {
  color: string;
}

export default function ColorType({ color }: ColorTypeProps) {
  return (
    <ul role="list" className={styles.list}>
      <li className={styles.list__item}>Hex: {color}</li>
      <li className={styles.list__item}>{colord(color).toRgbString()}</li>
      <li className={styles.list__item}>{colord(color).toHslString()}</li>
    </ul>
  );
}
