"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraProps,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { CardDataType } from "../../type";
import { Pin } from "../Pin";

type Props = {
  data: CardDataType;
  mapCameraPosition: MapCameraProps;
  onCameraChanged?: (event: MapCameraChangedEvent) => void;
  onClick: (e: google.maps.MapMouseEvent) => void;
  isClicked: boolean;
  selectedLatLng: { lat?: number | null; lng?: number | null };
};

const GoogleMap = ({
  data,
  mapCameraPosition,
  onCameraChanged,
  onClick,
  selectedLatLng,
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
              key={item.id}
              // なぜか緯度と経度が逆になっているので、逆に設定
              position={{ lat: item.longitude || 0, lng: item.latitude || 0 }}
              clickable={true}
              onClick={(e) => {
                onClick(e);
              }}
            >
              <Pin selectedLng={selectedLatLng.lng} lng={item.latitude} />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
