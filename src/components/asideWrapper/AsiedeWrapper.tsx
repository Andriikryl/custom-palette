import React, { ReactNode } from "react";
import styles from "./style.module.css";

interface AsiedeWrapperProps {
  main: ReactNode;
  aside: ReactNode;
}

export default function AsiedeWrapper({ aside, main }: AsiedeWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>{aside}</div>
      <div className={styles.main__box}>{main}</div>
    </div>
  );
}
