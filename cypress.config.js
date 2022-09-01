// eslint-disable-next-line no-undef
const { defineConfig } = require("cypress");
// eslint-disable-next-line no-undef
const { loadEnv } = require("vite");

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173/vue_i18n_vite_demo/",
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-undef
      const env = loadEnv("production", process.cwd(), "");
      config.baseUrl = "http://localhost:4173" + env.VITE_APP_PUBLICPATH;
      return config;
    },
  },
});
