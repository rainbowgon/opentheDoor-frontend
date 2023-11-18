import { atom, selector } from "recoil";

interface MemberInfoType {
  name: string;
  phoneNumber: string;
  nickname: string;
  profileImage: string;
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

export const memberState = atom<MemberInfoType>({
  key: 'memberState',
  default: {
    name: "",
    phoneNumber: "",
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