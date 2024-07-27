"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import location_pin from "@/public/location_pin.png";
import lunch_pin from "@/public/pin_icon.png";

type Props = {
  selectedLng?: number | null;
  lng: number | null;
};

export const Pin = ({ selectedLng, lng }: Props) => {
  // 一般的にpropsでstateの初期値を設定することはアンチパターンとされている
  // useStateの初期値は初回レンダリング時のみにしかセットされないから
  // 親にkeyをセットする。keyが変わるたび（再レンダリング）にstateが無理やり初期化される。今回は必要ないかもしれないけど。
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const heartAnimation = useSpring({
    transform: isClicked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const handleClick = useMemo(() => {
    setIsClicked(lng === selectedLng);
  }, [lng, selectedLng]);

  handleClick;

  return (
    <animated.button style={heartAnimation}>
      <Image
        src={isClicked ? location_pin : lunch_pin}
        alt="location_pin"
        width={32}
        height={32}
        quality={100}
      />
    </animated.button>
  );
};
