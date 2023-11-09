import { atom, selector } from "recoil";

interface MemberInfoType {
  name: string;
  phoneNumber: string;
  nickname: string;
  profileImage: string;
}

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