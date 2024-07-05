"use client";

import { useState } from "react";
import clsx from "clsx";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useSpring, animated } from "react-spring";

type Props = {
  initialIsLiked: boolean;
};

export const LikeButton = ({ initialIsLiked }: Props) => {
  // 一般的にpropsでstateの初期値を設定することはアンチパターンとされている
  // useStateの初期値は初回レンダリング時のみにしかセットされないから
  // 親にkeyをセットする。keyが変わるたび（再レンダリング）にstateが無理やり初期化される。今回は必要ないかもしれないけど。
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const heartAnimation = useSpring({
    transform: isLiked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
    // todo:server action
  };

  const LikeButtonStyle = "w-[24px] h-[24px]";

  return (
    <div className="flex items-center justify-center pr-1">
      <animated.button style={heartAnimation} onClick={handleLike}>
        {isLiked ? (
          <IoMdHeart className={clsx("text-primary", LikeButtonStyle)} />
        ) : (
          <IoMdHeartEmpty className={clsx("text-subText", LikeButtonStyle)} />
        )}
      </animated.button>
    </div>
  );
};
