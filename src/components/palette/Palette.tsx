"use client";
import React from "react";
import styles from "./style.module.css";
import { useRecoilValue } from "recoil";
import { accentColor, grayColor } from "@/store/store";
import { extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import PaletteGroup from "./paletteGroup/PaletteGroup";
extend([mixPlugin]);

export default function Palette() {
  const accent = useRecoilValue(accentColor);
  const gray = useRecoilValue(grayColor);
  return (
    <div className={styles.flow}>
      <PaletteGroup curentColor={accent} />
      <PaletteGroup curentColor={gray} />
    </div>
  );
}
