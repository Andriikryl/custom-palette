import React from "react";
import styles from "./style.module.css";
import Eye from "@/icons/Eye";
import Link from "next/link";
import { range } from "@/utils/range";

export default function Nav() {
  const generateRandomColor = (): string =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  return (
    <div className={styles.nav__wrapper}>
      <div className={styles.palete__box}>
        {range(1, 20).map((item, index) => {
          return (
            <div
              style={{ backgroundColor: generateRandomColor() }}
              className={styles.inner__box}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className={styles.flow}>
        <nav>
          <ul role="list">
            <li>
              <Link className={styles.link} href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/scheme"}>
                Color Scheme Builder
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/random"}>
                Random Color Generator
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/mixer"}>
                Color Mixer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
