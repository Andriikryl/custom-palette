"use client";
import React from "react";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import styles from "./style.module.css";

extend([mixPlugin]);

export default function Mixer() {
  const mixColor = colord("#FFFF00").mix("#008000").mix("#0000FF").toHex();
  return (
    <div>
      <h1>Color Mixer</h1>
      <div style={{ backgroundColor: mixColor }} className={styles.box}>
        {mixColor}
      </div>
    </div>
  );
}
