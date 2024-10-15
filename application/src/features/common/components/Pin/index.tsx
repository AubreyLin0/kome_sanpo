"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import location_pin from "@/public/location_pin.svg";
import lunch_pin from "@/public/pin_icon.svg";

type Props = {
  selectedLng?: number | null;
  lng: number | null;
};

export const Pin = ({ selectedLng, lng }: Props) => {
  //　よく考えたらuseMemoの使い方違うし、そもそもいらないので削除
  const isClicked = lng === selectedLng;

  const heartAnimation = useSpring({
    transform: isClicked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.button style={heartAnimation}>
      <Image
        src={isClicked ? location_pin : lunch_pin}
        alt="location_pin"
        width={30}
        height={30}
        quality={100}
      />
    </animated.button>
  );
};
