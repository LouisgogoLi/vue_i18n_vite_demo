import { defineStore, acceptHMRUpdate } from "pinia";

export const useCommonStore = defineStore({
  id: "common",
  state: () => ({
    language: "en",
  }),
  getters: {},
  actions: {
    setLanguage(languageName) {
      this.language = languageName;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
