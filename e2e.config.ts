//npx playwright test --config=playwright.config.ts --project=W

import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig ={
    timeout: 20000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        headless: true,
        viewport: {width:1280, height: 720 },
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off'
    },
projects:[
    {
        name: "C",
        use: { browserName: 'chromium' },
    },
    {
        name: "F",
        use: { browserName: 'firefox' },
    },
    {
        name: "W",
        use: { browserName: 'webkit' },
    }
]
}

export default config
