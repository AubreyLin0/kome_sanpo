"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  MapCameraProps,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { CardDataType } from "../../type";

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
              key={item.title}
              position={{ lat: item.latitude, lng: item.longitude }}
            >
              <Pin
                background={"#EAC505"}
                borderColor={"black"}
                glyphColor={"black"}
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
