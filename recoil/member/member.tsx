import { atom, selector } from "recoil";

interface MemberInfoType {
  name: string;
  phoneNumber: string;
  nickname: string;
  profileImage: string;
}

export const userFcmToken = atom<string>({
  key: 'userFcmToken',
  default: ``
});

export const userAccessToken = atom<string>({
  key: 'userAccessToken',
  default: ``
});

export const userRefreshToken = atom<string>({
  key: 'userRefreshToken',
  default: ``
});

export const memberState = atom<MemberInfoType>({
  key: 'memberState',
  default: {
    name: "",
    phoneNumber: "",
    nickname: "",
    profileImage: "",
  },
});


export const editMemberState = selector<MemberInfoType>({
  key: "editMemberState",
  get: ({ get }) => {
    const editMemberState = get(memberState);
    return editMemberState;
  },
  set: ({ set }, newValue) => {
    set(memberState, newValue);
  }
})