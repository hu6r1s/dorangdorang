import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userId",
  storage: localStorage,
})

export const userState = atom({
  key: "userState",
  default: undefined,
  effects_UNSTABLE: [persistAtom]
});