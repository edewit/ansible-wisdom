import { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: 3,
    openMode: 0,
  },
  videoUploadOnPasses: false,  
  viewportWidth: 1600,
  viewportHeight: 1000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://prod.foo.redhat.com:1337/ansible/seats-administration',
  },
});
