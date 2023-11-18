import { atom } from "recoil";

export interface bottomBarStateType {
  isBottomBar: "TRUE" | "FALSE";
}

export const BottomBarState = atom<bottomBarStateType>({
  key: "BottomBarState",
  default: {
    isBottomBar: "TRUE"
  }
})