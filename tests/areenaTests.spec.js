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

    const channels = page.$$(".channel-header__logo ");

    for (const element of (await channels)) {
        await expect (element.getAttribute("aria-label")).toBeDefined();
    }
});
