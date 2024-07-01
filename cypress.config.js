const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'BpAq@auxosoftware.com',
    password: '',
    url: 'https://dev.workshop.auxosoftware.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
