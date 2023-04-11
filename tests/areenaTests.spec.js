const {test, expect} = require("@playwright/test");
test('has title', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Yle Areena – Enemmän kuin ehdit katsoa ja kuunnella | TV | Areena | yle.fi/);
});


test('register', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv');
    if ((await page.$('button:text("Vain välttämättömät")')) !== null){
        await page.click('button:text("Vain välttämättömät")')
    }

    await page.locator('.yle-header-tunnus-login').click();
    const loginForm = await page.frameLocator('.tunnus-sdk__iframe').getByRole('button', {name:'Luo Yle Tunnus'});
    await loginForm.click();
    const registerForm = await page.frameLocator('.tunnus-sdk__iframe');
    await registerForm.getByRole('textbox', {name:'Sähköposti'}).fill('asdsadsadsadjkl');
    await registerForm.getByRole('button', { name: 'Luo Tunnus' }).click();
    await expect (registerForm.getByText("Tarkista sähköpostiosoitteen muoto.")).toBeVisible();

});

test('check channel labels', async ({ page }) => {
    await page.goto("https://areena.yle.fi/tv/opas");

    if ((await page.$('button:text("Vain välttämättömät")')) !== null){
        await page.click('button:text("Vain välttämättömät")')
    }

    const channelLogos = await page.$$('.channel-header__logo');

    for (const logo of channelLogos) {
        const label = await logo.getAttribute('aria-label');
        // expect(label).toBeDefined(); // This is to check the label attribute is not empty
        const styleAttribute = await logo.getAttribute('style');
        const backgroundImageUrl = styleAttribute.match(/background-image: url\(['"]?([^'"]+)['"]?\)/i)[1];
        if (backgroundImageUrl.includes(label)){
            console.log("MATCH!")
        }
    }
});

test('season 3 ep 5 date and name',
    async ({page}) => {
        await page.goto("https://areena.yle.fi/1-3339547");

        if ((await page.$('button:text("Vain välttämättömät")')) !== null) {
            await page.click('button:text("Vain välttämättömät")')
        }

        await page.click('button:text("Kausi 3")');
        await page.getByText("5. Kummeli").click();
        await page.waitForLoadState('networkidle');

        await expect (page.getByText("K3, J5: Kummeli ")).toBeVisible();
        await expect (page.getByText("julkaistu ti 10.1.2006")).toBeVisible();
    });

test('check news exist', async ({ page }) => {
    await page.goto("https://areena.yle.fi/tv/opas");

    if ((await page.$('button:text("Vain välttämättömät")')) !== null){
        await page.click('button:text("Vain välttämättömät")')
    }

    await expect (page.getByText("Kymmenen uutiset")).toBeVisible();
});
