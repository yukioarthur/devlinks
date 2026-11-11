import { defineConfig } from '@playwright/test'

const port = Number(process.env.DEVLINKS_TEST_PORT || 5298)
const baseURL = `http://127.0.0.1:${port}`

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: 'list',
  use: {
    baseURL,
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
  },
  webServer: { command: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port ${port} --strictPort`, url: baseURL, reuseExistingServer: false },
})
