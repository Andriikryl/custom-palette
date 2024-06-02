import { atom, selector } from "recoil";

const accentColor = atom({
    key: "accent",
    default: "#3D63DD",
  });
  const grayColor = atom({
    key: "gray",
    default: "#7F8190",
  });
  const backgroundColor = atom({
    key: "background",
    default: "#111111",
  });

  export {
    accentColor,
    grayColor,
    backgroundColor,
  };