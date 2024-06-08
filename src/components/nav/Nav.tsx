import React from "react";
import styles from "./style.module.css";
import Eye from "@/icons/Eye";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon__box}>
        <Eye size={50} />
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/scheme"}>Scheme</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
