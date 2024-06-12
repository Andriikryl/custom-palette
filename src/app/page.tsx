import Controls from "@/components/controls/Controls";
import Wrapper from "@/components/wrapper/Wrapper";
import Title from "@/components/title/Title";
import Palette from "@/components/palette/Palette";
import LightenControls from "@/components/lightenControls/LightenControls";

export default function Home() {
  return (
    <Wrapper>
      <>
        <Title />
        <LightenControls />
        <Controls />
        <Palette />
      </>
    </Wrapper>
  );
}
