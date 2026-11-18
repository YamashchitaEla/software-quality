import { test, expect } from "@playwright/test";

test("TC-01: Успішна авторизація", async ({ page }) => {
    // Відкриваємо сторінку
    await page.goto("/");
    // Вводимо логін
    await page.getByTestId("username").fill("standard_user");
    // Вводимо пароль
    await page.getByTestId("password").fill("secret_sauce");

    // Натискаємо Login
    await page.getByTestId("login-button").click();

    // Перевіряємо результат
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText("Products", { exact: true })).toBeVisible();
});

test("TC-02: Хибна авторизація", async ({ page }) => {
    // Відкриваємо сторінку
    await page.goto("/");
    // Вводимо логін
    await page.getByTestId("username").fill("standard_user");
    // Вводимо пароль
    await page.getByTestId("password").fill("wrong_password");

    // Натискаємо кнопку Login
    await page.getByTestId("login-button").click();

    // Отримуємо повідомлення про помилку
    const errorMessage = page.getByTestId('error');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match any user in this service');
});

test("TC-03: Додавання товару до кошика", async ({ page }) => {
    // Відкриваємо сторінку
    await page.goto("/");
    // Вводимо логін
    await page.getByTestId("username").fill("standard_user");
    // Вводимо пароль
    await page.getByTestId("password").fill("secret_sauce");
    // Натискаємо Login
    await page.getByTestId("login-button").click();

    // Додавання товару
    await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click()
    // Перевірка кількості на індикаторі кошика
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    // Перехід до кошика
    await page.locator('.shopping_cart_link').click();
    // Перевірка назви товару в кошику
    await expect(page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })).toBeVisible();
});