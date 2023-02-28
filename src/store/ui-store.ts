import { makeAutoObservable } from "mobx";
import { IRootStore } from "./index";

const getLocalStorageLanguage = () => {
  if (typeof window !== "undefined") {
    const language = localStorage.getItem("language");
    if (language) {
      return language;
    }
  }
  return "he";
};

class UIStore {
  rootStore: IRootStore;

  pageLanguage: TLanguage = getLocalStorageLanguage() as TLanguage;
  pageDirection = {
    en: "ltr" as TPageDirection,
    he: "rtl" as TPageDirection,
  }

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setLanguage = (language: TLanguage) => {
    this.pageLanguage = language;
  }
}

export default UIStore;