// useStateを使用するには、use clientを指定する必要あり
// ただ、pagesではuse clientを指定したくないので、わざわざMapTemplateを作成している
// app routerの嫌なとこその1
"use client";
import { useCallback, useState } from "react";
import {
  MapCameraChangedEvent,
  MapCameraProps,
} from "@vis.gl/react-google-maps";
import { BottomSheet } from "../BottomSheet";
import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import GoogleMap from "@/src/features/common/components/Map";
import { CardDataType } from "@/src/features/common/type";

type Props = {
  data: CardDataType;
};

export const MapTemplate = ({ data }: Props) => {
  const [mapCameraPosition, setMapCameraPosition] = useState<MapCameraProps>({
    center: { lat: 34.99682, lng: 135.759258 },
    zoom: 17,
  });
  const [selectedLatLng, setSelectedLatLng] = useState<{
    lat?: number | null;
    lng?: number | null;
  }>({ lat: null, lng: null });

  const handleCameraChange = useCallback((event: MapCameraChangedEvent) => {
    setMapCameraPosition(event.detail);
  }, []);

  return (
    <>
      <div className="md:flex w-[100vw] h-[90vh]">
        <div className="w-[40vw] overflow-y-scroll hidden md:block">
          <ResponsiveCard
            data={data}
            onClick={(value) => {
              setMapCameraPosition(value);
              setSelectedLatLng({
                lat: value.center.lat,
                lng: value.center.lng,
              });
            }}
          />
        </div>
        <GoogleMap
          data={data}
          mapCameraPosition={mapCameraPosition}
          onCameraChanged={handleCameraChange}
          onClick={(event) => {
            setSelectedLatLng({
              lat: event.latLng?.lat(),
              lng: event.latLng?.lng(),
            });
          }}
          selectedLatLng={selectedLatLng}
        />
        <div className="md:hidden">
          <BottomSheet>
            <ResponsiveCard
              data={data}
              onClick={(value) => {
                setMapCameraPosition(value);
                setSelectedLatLng({
                  lat: value.center.lat,
                  lng: value.center.lng,
                });
              }}
            />
          </BottomSheet>
        </div>
      </div>
    </>
  );
};
