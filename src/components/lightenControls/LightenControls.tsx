"use client";
import { backgroundColor } from "@/store/store";
import React from "react";
import { colord } from "colord";
import { useRecoilState } from "recoil";
import styles from "./style.module.css";

export default function LightenControls() {
  const [bg, setBg] = useRecoilState(backgroundColor);
  function handelClickLight() {
    setBg((bg) => colord(bg).lighten(1).toHex());
  }
  function handelClickDarck() {
    setBg((bg) => colord(bg).darken(1).toHex());
  }
  return (
    <div className={styles.button__group}>
      <button className={styles.button} onClick={handelClickLight}>
        Light
      </button>
      <button className={styles.button} onClick={handelClickDarck}>
        Darck
      </button>
    </div>
  );
}
