"use client";
import React, { useState } from "react";
import { colord, extend, Colord } from "colord";
import mixPlugin from "colord/plugins/mix";
import styles from "./style.module.css";
import AsiedeWrapper from "@/components/asideWrapper/AsiedeWrapper";
extend([mixPlugin]);

interface ColorDetailsProps {
  color: Colord;
}

const ColorDetails: React.FC<ColorDetailsProps> = ({ color }) => (
  <ul role="list" className={styles.details__list}>
    <li className={styles.details__item}>Hex: {color.toHex()}</li>
    <li className={styles.details__item}>{color.toRgbString()}</li>
    <li className={styles.details__item}>{color.toHslString()}</li>
  </ul>
);

interface Steps {
  tints: number;
  shades: number;
  tones: number;
}
const initialColors: string[] = [
  "#DB073D",
  "#DBA507",
  "#8EC7D2",
  "#0D6986",
  "#07485B",
];
const initialBtnColors: any = [
  {
    name: "Green",
    color: "#33691E",
  },
  {
    name: "Blue",
    color: "#1C3FFD",
  },
  {
    name: "Red",
    color: "#D90000",
  },
  {
    name: "Orange",
    color: "#FF5722",
  },
  {
    name: "Purple",
    color: "#420F8D",
  },
  {
    name: "Yellow",
    color: "#FFDC00",
  },
  {
    name: "Gray",
    color: "#BFBFBF",
  },
];

export default function Scheme() {
  const [colors, setColors] = useState<string[]>(initialColors);
  const [colorsBtn, setColorsBtn] = useState(initialBtnColors);
  const [color, setColor] = useState<string>(initialColors[0]);
  const [colorBtn, setColorBtn] = useState(initialBtnColors[0]);
  const [steps, setSteps] = useState<Steps>({
    tints: 10,
    shades: 10,
    tones: 10,
  });

  const handleColorChange = (newColor: string) => setColor(newColor);
  const handleColorBtnChange = (newColor: string) => setColorBtn(newColor);

  const generateRandomColor = (): string =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  const addColor = () => {
    if (colors.length < 10) {
      setColors([...colors, generateRandomColor()]);
    }
  };

  const removeColor = () => {
    if (colors.length > 1) {
      const updatedColors = colors.slice(0, -1);
      setColors(updatedColors);
      if (!updatedColors.includes(color)) {
        setColor(updatedColors[0]);
      }
    }
  };

  const incrementStep = (type: keyof Steps) =>
    setSteps({ ...steps, [type]: steps[type] + 1 });
  const decrementStep = (type: keyof Steps) => {
    if (steps[type] > 1) {
      setSteps({ ...steps, [type]: steps[type] - 1 });
    }
  };

  const tins = colord(color);
  const colorPaletes = colord(colorBtn.color);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Color Scheme Builder</h1>
      <AsiedeWrapper
        aside={
          <div className={styles.aside__box}>
            <div
              style={{ backgroundColor: color }}
              className={styles.box}
            ></div>
            <div className={styles.controls__box}>
              <button className={styles.control__btn} onClick={removeColor}>
                -
              </button>
              <p>{colors.length}</p>
              <button className={styles.control__btn} onClick={addColor}>
                +
              </button>
            </div>
            <div className={styles.buttons__group}>
              {colors.map((colorValue) => (
                <button
                  key={colorValue}
                  onClick={() => handleColorChange(colorValue)}
                  className={styles.button}
                  style={{ backgroundColor: colorValue }}
                ></button>
              ))}
            </div>
            <div>
              <ul role="list" className={styles.list__description}>
                <li className={styles.list__item}>Hex: {color}</li>
                <li className={styles.list__item}>
                  {colord(color).toRgbString()}
                </li>
                <li className={styles.list__item}>
                  {colord(color).toHslString()}
                </li>
              </ul>
            </div>
          </div>
        }
        main={
          <div className={styles.main__content}>
            <div>
              <div className={styles.palette__group}>
                {colorsBtn.map((item: any, index: any) => {
                  return (
                    <button
                      className={styles.color__btn}
                      key={index}
                      onClick={() => handleColorBtnChange(item)}
                    >
                      <div
                        className={styles.color__box}
                        style={{ backgroundColor: item.color }}
                      ></div>
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className={styles.paletes__wrapper}>
                {colorPaletes.shades(35).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.btn__colors_palett}
                      style={{ backgroundColor: item.toHex() }}
                      onClick={() => handleColorChange(item.toHex())}
                    ></div>
                  );
                })}
              </div>
            </div>
            {["tints", "shades", "tones"].map((type) => (
              <div key={type}>
                <h3 className={styles.ssheds__title}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </h3>
                <div className={styles.controls__box}>
                  <button
                    className={styles.control__btn}
                    onClick={() => decrementStep(type as keyof Steps)}
                  >
                    -
                  </button>
                  <p>{steps[type as keyof Steps]}</p>
                  <button
                    className={styles.control__btn}
                    onClick={() => incrementStep(type as keyof Steps)}
                  >
                    +
                  </button>
                </div>
                <div className={styles.flow}>
                  {(tins[type as keyof Colord] as (count?: number) => Colord[])(
                    steps[type as keyof Steps]
                  ).map((colorCur: Colord, index: number) => (
                    <div className={styles.scheme__wrapper} key={index}>
                      <div
                        className={styles.scheme__box}
                        style={{ backgroundColor: colorCur.toHex() }}
                      ></div>
                      <ColorDetails color={colorCur} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
