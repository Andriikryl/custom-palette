"use client";
import React from "react";
import styles from "./style.module.css";
import { Input } from "../input/Input";
import { useRecoilState } from "recoil";
import { accentColor, backgroundColor, grayColor } from "@/store/store";

export default function Controls() {
  const [accColor, setAccColor] = useRecoilState(accentColor);
  const [gray, setGray] = useRecoilState(grayColor);
  const [bg, setBg] = useRecoilState(backgroundColor);

  return (
    <div className={styles.controls__box}>
      <Input
        label="Accent"
        value={accColor}
        onChange={(e) => setAccColor(e.target.value)}
        type="color"
      />
      <Input
        label="Gray"
        value={gray}
        onChange={(e) => setGray(e.target.value)}
        type="color"
      />
      <Input
        label="Background"
        value={bg}
        onChange={(e) => setBg(e.target.value)}
        type="color"
      />
    </div>
  );
}
