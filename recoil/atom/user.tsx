import { atom } from "recoil";

interface MemberInfoType {
  name: string;
  phoneNumber: number;
  nickname: string;
}

const memberState = atom<MemberInfoType>({
  key: 'memberState',
  default: {
    name: "",
    phoneNumber: NaN,
    nickname: "",
  },
});