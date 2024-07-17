"use client";
import { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { CardDataType } from "../../type";
import { Card } from "../Card";

type Props = {
  data: CardDataType;
};

export const GoogleMap = ({ data }: Props) => {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  return (
    <div className="relative h-full w-full">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <Map
          className="h-full w-full"
          defaultCenter={{ lat: 34.99682, lng: 135.759258 }}
          defaultZoom={17}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {data.map((item) => (
            <Marker
              key={item.title}
              position={{ lat: item.latitude, lng: item.longitude }}
              onClick={() => {
                setIsDetail(!isDetail);
              }}
            />
          ))}
        </Map>
        {isDetail && (
          <Card data={data} className="absolute top-0 left-0 z-10" />
        )}
      </APIProvider>
    </div>
  );
};
