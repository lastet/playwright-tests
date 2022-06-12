import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig ={
    timeout: 5000,
    retries: 0,
    testDir: 'tests/api',
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
