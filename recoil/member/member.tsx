import { atom } from "recoil";

interface MemberInfoType {
  name: string;
  phoneNumber: number;
  nickname: string;
  profileImage: string;
}

export const memberState = atom<MemberInfoType>({
  key: 'memberState',
  default: {
    name: "",
    phoneNumber: NaN,
    nickname: "",
    profileImage: "",
  },
});