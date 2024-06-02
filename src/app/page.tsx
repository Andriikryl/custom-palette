import Image from "next/image";
import styles from "./page.module.css";
import Controls from "@/components/controls/Controls";
import Wrapper from "@/components/wrapper/Wrapper";
import Title from "@/components/title/Title";
import Palette from "@/components/palette/Palette";

export default function Home() {
  return (
    <Wrapper>
      <>
        <Title />
        <Controls />
        <Palette />
      </>
    </Wrapper>
  );
}
