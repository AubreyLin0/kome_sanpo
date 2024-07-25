"use client";
import { useState } from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraProps,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { CardDataType } from "../../type";
import location_pin from "@/public/location_pin.png";
import lunch_pin from "@/public/pin_icon.png";

type Props = {
  data: CardDataType;
  mapCameraPosition: MapCameraProps;
  onCameraChanged?: (event: MapCameraChangedEvent) => void;
};

export const GoogleMap = ({
  data,
  mapCameraPosition,
  onCameraChanged,
}: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const heartAnimation = useSpring({
    transform: isClicked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative h-full w-full">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <Map
          className="h-full w-full"
          defaultCenter={{ lat: 34.99682, lng: 135.759258 }}
          defaultZoom={17}
          {...mapCameraPosition}
          onCameraChanged={onCameraChanged}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string}
        >
          {data.map((item) => (
            <AdvancedMarker
              key={item.id}
              position={{ lat: item.latitude || 0, lng: item.longitude || 0 }}
              clickable={true}
              onClick={handleClick}
            >
              <animated.button style={heartAnimation}>
                {isClicked ? (
                  <button>
                    <Image
                      src={location_pin}
                      alt={`${item.name}_location_pin`}
                    />
                  </button>
                ) : (
                  <button>
                    <Image src={lunch_pin} alt={`${item.name}_lunch_pin`} />
                  </button>
                )}
              </animated.button>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
