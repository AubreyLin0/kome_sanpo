// useStateを使用するには、use clientを指定する必要あり
// ただ、pagesではuse clientを指定したくないので、わざわざMapTemplateを作成している
// app routerの嫌なとこその1
"use client";
import { useState } from "react";
import { MapCameraProps } from "@vis.gl/react-google-maps";
import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import { GoogleMap } from "@/src/features/common/components/Map";
import { CardDataType } from "@/src/features/common/type";

type Props = {
  data: CardDataType;
};

export const MapTemplate = ({ data }: Props) => {
  const [mapCameraPosition, setMapCameraPosition] = useState<MapCameraProps>({
    center: { lat: 34.99682, lng: 135.759258 },
    zoom: 17,
  });
  return (
    <div className="flex w-[100vw] h-[90vh]">
      <div className="w-[40vw] overflow-y-scroll">
        <ResponsiveCard
          data={data}
          onClick={(value) => setMapCameraPosition(value)}
        />
      </div>
      <GoogleMap
        data={data}
        mapCameraPosition={mapCameraPosition}
        onCameraChanged={(event) => setMapCameraPosition(event.detail)}
      />
    </div>
  );
};
