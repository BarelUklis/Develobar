import rootStore from "@/store";

export const getAppDirection = () => {
  const { uiStore } = rootStore;
  const { pageDirection, pageLanguage } = uiStore;

  return pageDirection[pageLanguage];
}