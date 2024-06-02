"use client";
import React, { useMemo } from "react";
import styles from "./style.module.css";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
extend([mixPlugin]);

interface PaletteGroupProps {
  curentColor: string;
}

export default function PaletteGroup({ curentColor }: PaletteGroupProps) {
  const color = colord(curentColor);
  // Memoize shades and tints calculation
  const shadesAndTints = useMemo(() => {
    const shades = color.shades(12).slice(4); // Get shades starting from index 5
    const tints = color.tints(12);
    return [...shades.reverse(), ...tints]; // Combine reversed shades and tints
  }, [color]); // Recalculate only when accent changes
  return (
    <div className={styles.flow}>
      {shadesAndTints.map((item, index) => {
        const isShade = index < 8; // First 8 items are shades
        const adjustedIndex = isShade ? index + 6 : index - 7; // Adjust index for display
        return (
          <div
            style={{ backgroundColor: item.toHex() }}
            className={styles.inner__box}
            key={`${isShade ? "s" : "t"}-${adjustedIndex}`} // Unique key combining type and adjusted index
          ></div>
        );
      })}
    </div>
  );
}
