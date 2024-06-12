"use client";
import { range } from "@/utils/range";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { getRandomHex } from "@/utils/randomHex";
import { colord } from "colord";
import { Button } from "@/components/button/Button";

export default function Random() {
  const [amount, setAmount] = useState(16);
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {
    const newColors = range(0, amount).map(() => getRandomHex());
    setColors(newColors);
  }, [amount]);
  function Increment() {
    setAmount(amount + 1);
  }
  function Dicrement() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }
  return (
    <div className={styles.random__wrapper}>
      <h1 className={styles.random__title}>Random Color Generator</h1>
      <div className={styles.controls}>
        <Button onClick={Dicrement}>-</Button>
        <p>{amount}</p>
        <Button onClick={Increment}>+</Button>
      </div>
      <div className={styles.palette__wrapper}>
        {colors.map((color, index) => (
          <div className={styles.wrapper__box} key={index}>
            <div
              className={styles.palette__box}
              style={{ backgroundColor: color }}
            ></div>
            <div className={styles.palette__values}>
              <p className={styles.hex__color}>hex:{color}</p>
              <p className={styles.hex__color}>{colord(color).toRgbString()}</p>
              <p className={styles.hex__color}>{colord(color).toHslString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
