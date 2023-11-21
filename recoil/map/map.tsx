import { atom } from "recoil";

export interface mapRegionType {
  latitude?: number;
  longitude?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export const mapRegionState = atom<mapRegionType>({
  key: "mapRegionState",
  default: {
    latitude: 37.5013,
    longitude: 127.0396781,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  },
});

export const searchResultsState = atom<mapRegionType[]>({
  key: "searchResultsState",
  default: [],
});

export const locationState = atom<mapRegionType>({
  key: "locationState",
  default: {
    latitude: 37.5013,
    longitude: 127.0396781,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const myRegionState = atom({
  key: "myRegionState",
  default: {
    latitude: 37.5013,
    longitude: 127.0397004,
    latitudeDelta: 0.0405,
    longitudeDelta: 0.0421,
  },
});
