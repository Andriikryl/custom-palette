"use client";
import { accentColor, backgroundColor } from "@/store/store";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styles from "./style.module.css";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const background = useRecoilValue(backgroundColor);
  const accent = useRecoilValue(accentColor);
  const boxStyle = {
    backgroundImage: `linear-gradient(to bottom, ${accent}, transparent)`,
  };
  return (
    <div className={styles.wrapper} style={{ backgroundColor: background }}>
      <div className={styles.box} style={boxStyle}></div>
      <div className="wrapper">{children}</div>
    </div>
  );
}
