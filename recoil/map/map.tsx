import { atom } from "recoil";

export interface mapRegionType {
  latitude?: any;
  longtitude?: any;
  latitudeDelta?: any;
  longitudeDelta?: any;
}

export const mapRegionState = atom<mapRegionType[]>({
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
