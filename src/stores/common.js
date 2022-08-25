import { defineStore } from "pinia";

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
