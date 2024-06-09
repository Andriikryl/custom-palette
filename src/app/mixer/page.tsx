"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import AsiedeWrapper from "@/components/asideWrapper/AsiedeWrapper";
import ColorType from "@/components/colorType/ColorType";

type ColorButton = {
  name: string;
  color: string;
  quantities: number;
};

type SelectedColor = {
  name: string;
  quantity: number;
};

const initialBtnColors: ColorButton[] = [
  {
    name: "Green",
    color: "#008000",
    quantities: 0,
  },
  {
    name: "Blue",
    color: "#0000ff",
    quantities: 0,
  },
  {
    name: "Red",
    color: "#ff0000",
    quantities: 0,
  },
  {
    name: "Orange",
    color: "#ffa500",
    quantities: 0,
  },
  {
    name: "Indigo",
    color: "#4b0082",
    quantities: 0,
  },
  {
    name: "Yellow",
    color: "#ffff00",
    quantities: 0,
  },
  {
    name: "Violet",
    color: "#ee82ee",
    quantities: 0,
  },
];

export default function Mixer() {
  const [selectedColors, setSelectedColors] = useState<SelectedColor[]>([]);

  const handleSelectOrIncrement = (colorName: string) => {
    const existingIndex = selectedColors.findIndex((c) => c.name === colorName);

    if (existingIndex !== -1) {
      // Increment quantity for existing color
      const updatedColors = [...selectedColors];
      updatedColors[existingIndex].quantity += 1;
      setSelectedColors(updatedColors);
    } else {
      // Add new color with quantity 1
      setSelectedColors([...selectedColors, { name: colorName, quantity: 1 }]);
    }
  };
  const handleIncrement = (colorName: string) => {
    const existingIndex = selectedColors.findIndex((c) => c.name === colorName);
    if (existingIndex !== -1) {
      const updatedColors = [...selectedColors];
      updatedColors[existingIndex].quantity += 1;
      setSelectedColors(updatedColors);
    }
  };

  const handleDecrement = (colorName: string) => {
    const existingIndex = selectedColors.findIndex((c) => c.name === colorName);
    if (existingIndex !== -1 && selectedColors[existingIndex].quantity > 1) {
      const updatedColors = [...selectedColors];
      updatedColors[existingIndex].quantity -= 1;
      setSelectedColors(updatedColors);
    }
  };

  const getTotalQuantity = () =>
    selectedColors.reduce((total, color) => total + color.quantity, 0);

  const getPercentage = (color: SelectedColor | undefined) => {
    if (!color) return 0;
    return (color.quantity / getTotalQuantity()) * 100;
  };

  const mixColors = () => {
    let totalQuantity = getTotalQuantity();
    let mixedRGB = { r: 0, g: 0, b: 0 };

    selectedColors.forEach(({ name, quantity }) => {
      // Explicitly declare the type of `color` as `ColorButton | undefined`
      let color: ColorButton | undefined = initialBtnColors.find(
        (c) => c.name === name
      );
      if (!color) return; // Skip if color is undefined

      let weight = quantity / totalQuantity;
      mixedRGB.r += parseInt(color.color.slice(1, 3), 16) * weight;
      mixedRGB.g += parseInt(color.color.slice(3, 5), 16) * weight;
      mixedRGB.b += parseInt(color.color.slice(5, 7), 16) * weight;
    });

    return `#${Math.round(mixedRGB.r)
      .toString(16)
      .padStart(2, "0")}${Math.round(mixedRGB.g)
      .toString(16)
      .padStart(2, "0")}${Math.round(mixedRGB.b)
      .toString(16)
      .padStart(2, "0")}`;
  };

  const renderColorButtons = () => {
    return initialBtnColors.map((item, index) => (
      <div key={index} className={styles.color__btn__wrapper}>
        <button
          className={styles.color__btn}
          onClick={() => handleSelectOrIncrement(item.name)}
          style={{ backgroundColor: item.color }}
        ></button>
        <div className={styles.button__info}>
          <p>{item.name}</p>
          {renderAdjustmentControls(item)}
        </div>
      </div>
    ));
  };

  const renderColorAmount = () => {
    return initialBtnColors.map((item, index) => {
      const isSelected = selectedColors.some((c) => c.name === item.name);
      if (!isSelected) return null;
      const selectedColor = selectedColors.find((c) => c.name === item.name);
      const percentage = getPercentage(selectedColor).toFixed(2);
      return (
        <div
          key={index}
          className={styles.amount__box}
          style={{ backgroundColor: item.color, width: `${percentage}%` }}
        ></div>
      );
    });
  };

  const renderAdjustmentControls = (colorItem: any) => {
    const isSelected = selectedColors.some((c) => c.name === colorItem.name);
    if (!isSelected) return null;
    const selectedColor = selectedColors.find((c) => c.name === colorItem.name);
    const percentage = getPercentage(selectedColor).toFixed(2);

    return (
      <div className={styles.flex__group}>
        <button onClick={() => handleDecrement(colorItem.name)}>-</button>
        <p>{percentage}%</p>
        <button onClick={() => handleIncrement(colorItem.name)}>+</button>
      </div>
    );
  };

  return (
    <div className={styles.mix__wrapper}>
      <AsiedeWrapper
        aside={
          <div className={styles.aside__mix}>
            <div
              style={{
                backgroundColor: mixColors(),
              }}
              className={styles.box}
            ></div>
            <div>
              <div className={styles.color__amount}>{renderColorAmount()}</div>
              <ColorType color={mixColors()} />
            </div>
          </div>
        }
        main={
          <div className={styles.main__mix}>
            <h1 className={styles.mix__title}>Color Mixer</h1>
            <div className={styles.palette__group}>{renderColorButtons()}</div>
          </div>
        }
      />
    </div>
  );
}
