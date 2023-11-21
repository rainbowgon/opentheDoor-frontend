import { atom, selector } from "recoil";

interface MemberInfoType {
  name?: null | string;
  phoneNumber?: null | string;
  nickname?: null | string;
  profileImage?: null | string;
}

interface MemberFullInfoType {
  name: null | string;
  phoneNumber: null | string;
  nickname: null | string;
  profileImage: null | string;
}

export interface LoginUserInfo {
  nickname: null | string;
  profileImage: null | string;
}

interface MemberLoginInfoType {
  nickname: string;
  profileImage: string;
  provider: string;
  providerId: string;
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

export const memberState = atom<LoginUserInfo>({
  key: 'memberState',
  default: {
    nickname: "",
    profileImage: "",
  },
});

export const memberLoginState = atom<MemberLoginInfoType>({
  key: 'memberLoginState',
  default: {
    nickname: "",
    profileImage: "",
    provider: "",
    providerId: "",
  },
});


// export const editMemberState = selector<MemberFullInfoType>({
//   key: "editMemberState",
//   get: ({ get }) => {
//     const editMemberState = get(memberState);
//     return editMemberState;
//   },
//   set: ({ set }, newValue) => {
//     set(memberState, newValue);
//   }
// })