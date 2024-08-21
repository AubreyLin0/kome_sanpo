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
  // mapのカメラ位置をControlledするためのstate
  const [mapCameraPosition, setMapCameraPosition] = useState<MapCameraProps>({
    center: { lat: 34.99682, lng: 135.759258 },
    zoom: 17,
  });

  // Pinをクリックした際のLatLngを保持するstate
  const [selectedLatLng, setSelectedLatLng] = useState<{
    lat?: number | null;
    lng?: number | null;
  }>({ lat: null, lng: null });

  // sheetの開閉をControlledするstate
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCameraChange = useCallback((event: MapCameraChangedEvent) => {
    setMapCameraPosition(event.detail);
  }, []);

  return (
    <>
      <div className="grid grid-rows-[82vh,8vh] md:flex w-[100vw] md:h-[90vh] ">
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
          <BottomSheet
            isOpen={isSheetOpen}
            onOpenChange={() => setIsSheetOpen(!isSheetOpen)}
          >
            <ResponsiveCard
              data={data}
              onClick={(value) => {
                setMapCameraPosition(value);
                setSelectedLatLng({
                  lat: value.center.lat,
                  lng: value.center.lng,
                });
                setIsSheetOpen(false);
              }}
            />
          </BottomSheet>
        </div>
      </div>
    </>
  );
};
