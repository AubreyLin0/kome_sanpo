import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function handleCalculateDistance({
  targetLatitude,
  targetLongitude,
}: {
  targetLatitude: number;
  targetLongitude: number;
}) {
  const defaultPosition = { latitude: 34.9968489, longitude: 135.7593823 };
  const { latitude, longitude } = defaultPosition;

  function convertDegreesToRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  let earthRadiusKm = 6371; // 地球半径，单位公里
  let deltaLatitudeRadians = convertDegreesToRadians(targetLatitude - latitude);
  let deltaLongitudeRadians = convertDegreesToRadians(
    targetLongitude - longitude
  );
  let haversineFormula =
    Math.sin(deltaLatitudeRadians / 2) * Math.sin(deltaLatitudeRadians / 2) +
    Math.cos(convertDegreesToRadians(latitude)) *
      Math.cos(convertDegreesToRadians(targetLatitude)) *
      Math.sin(deltaLongitudeRadians / 2) *
      Math.sin(deltaLongitudeRadians / 2);
  let angularDistanceRadians =
    2 *
    Math.atan2(Math.sqrt(haversineFormula), Math.sqrt(1 - haversineFormula));
  let distanceKm = earthRadiusKm * angularDistanceRadians;
  return distanceKm;
}

export function handleCheckIfOpen({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) {
  const [openHour, openMinute] = openTime.split(":").map(Number);
  const [closeHour, closeMinute] = closeTime.split(":").map(Number);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const openTotalMinutes = openHour * 60 + openMinute;
  const closeTotalMinutes = closeHour * 60 + closeMinute;
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  return (
    currentTotalMinutes >= openTotalMinutes &&
    currentTotalMinutes < closeTotalMinutes
  );
}
