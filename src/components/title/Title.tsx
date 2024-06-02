import React from "react";
import styles from "./style.module.css";

export default function Title() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marquee}>
        <ul role="list" className={styles.marquee__content}>
          <li className={styles.marquee__item}>Create a custom palette</li>
          <li className={styles.marquee__item}>Create a custom palette</li>
          <li className={styles.marquee__item}>Create a custom palette</li>
        </ul>
        <ul role="list" className={styles.marquee__content} aria-hidden="true">
          <li className={styles.marquee__item}>Create a custom palette</li>
          <li className={styles.marquee__item}>Create a custom palette</li>
          <li className={styles.marquee__item}>Create a custom palette</li>
        </ul>
      </div>
      <div className={styles.box}></div>
    </div>
  );
}
