import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'abcde1',
  retries: {
    runMode: 3,
    openMode: 0,
  },
  videoUploadOnPasses: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://prod.foo.redhat.com:1337/ansible/seats-administration',
  },
});
