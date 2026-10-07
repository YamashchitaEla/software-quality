## Test Conditions

- TCND-01 - успішна авторизація валідного користувача;
- TCND-02 - авторизація з неправильним Username;
- TCND-03 - авторизація з неправильним Password;
- TCND-04 - авторизація з порожнім Username;
- TCND-05 - авторизація з порожнім Password;
- TCND-06 - авторизація заблокованого користувача.

## Checklist

- Успішна авторизація з валідними даними.
- Відмова в авторизації з неправильним Username.
- Відмова в авторизації з неправильним Password.
- Перевірка порожнього Username.
- Перевірка порожнього Password.
- Відмова в авторизації заблокованого користувача.

## TC-LOGIN-01 - Успішна авторизація standard_user

** Type :** Positive

** Preconditions :**
- відкрита сторінка Login;
- користувач не авторизований.

** Test Data :**
- Username: standard_user
- Password: secret_sauce

** Steps :**
1. У пoлe Username ввести standard_user.
2. У пoлe Password ввести secret_sauce.
3. Натиснути кнопку Login.

** Expected Result :**

Після введення standard_user і правильного пароля та натискання Login користувач успішно авторизується і переходить на сторінку Products. 

** Actual Result :**

Після введення standard_user і правильного пароля та натискання Login відкрилася сторінка Products

** Result :**

Pass

## TC-LOGIN-02 - Відмова в авторизації при неправильному Username

** Type :** Negative

** Preconditions :**
- Відкрита сторінка Login;
- Користувач не авторизований.

** Test Data :**
- Username: unreal_user (або інший Username, що не входить до списку допустимих standard_user, locked_out_user, problem_user performance_glitch_user, error_user, visual_user)
- Password: secret_sauce

** Steps :**
1. У пoлe Username ввести unreal_user.
2. У пoлe Password ввести secret_sauce.
3. Натиснути кнопку Login.

** Expected Result :**

Після введення unreal_user і правильного пароля та натискання Login користувачу відмовлено в авторизації з повідомленням "Epic sadface: Username and password do not match any user in this service".

** Actual Result :**

Після введення unreal_user і правильного пароля та натискання Login з'явилося повідомлення "Epic sadface: Username and password do not match any user in this service".

** Result :**

Pass

## TC-LOGIN-03 - Відмова в авторизації при неправильному Password

** Type :** Negative

** Preconditions :**
- Відкрита сторінка Login;
- Користувач не авторизований.

** Test Data :**
- Username: standart_user 
- Password: secretsauce

** Steps :**
1. У пoлe Username ввести standart_user.
2. У пoлe Password ввести secretsauce.
3. Натиснути кнопку Login.

** Expected Result :**

Після введення standart_user і неправильного пароля secretsauce та натискання Login користувачу відмовлено в авторизації з повідомленням "Epic sadface: Username and password do not match any user in this service".

** Actual Result :**

Після введення standart_user і неправильного пароля secretsauce та натискання Login з'явилося повідомлення "Epic sadface: Username and password do not match any user in this service".

** Result :**

Pass

## TC-LOGIN-04 - Відмова в авторизації при порожньому Username

** Type :** Negative

** Preconditions :**
- Відкрита сторінка Login;
- Користувач не авторизований.

** Test Data :**
- Username: 
- Password: secret_sauce

** Steps :**
1. Пoлe Username залишити порожнім.
2. У пoлe Password ввести secret_sauce.
3. Натиснути кнопку Login.

** Expected Result :**

Після залишення поля Username порожнім і введення правильного пароля та натискання Login користувачу відмовлено в авторизації з повідомленням "Epic sadface: Username is required".

** Actual Result :**

Після залишення поля Username порожнім і введення правильного пароля та натискання Login з'явилося повідомлення "Epic sadface: Username is required".

** Result :**

Pass

## TC-LOGIN-05 - Відмова в авторизації при порожньому Password

** Type :** Negative

** Preconditions :**
- Відкрита сторінка Login;
- Користувач не авторизований.

** Test Data :**
- Username: standart_user
- Password: 

** Steps :**
1. У пoлe Username ввести standart_user.
2. Пoлe Password зилишити порожнім
3. Натиснути кнопку Login.

** Expected Result :**

Після введення standart_user і залишення поля пароля порожнім та натискання Login користувачу відмовлено в авторизації з повідомленням "Epic sadface: Password is required".

** Actual Result :**

Після введення standart_user і залишення поля пароля порожнім та натискання Login з'явилося повідомлення "Epic sadface: Password is required".

** Result :**

Pass

## TC-LOGIN-06 - Відмова в авторизації locked_out_user

** Type :** Negative

** Preconditions :**
- Відкрита сторінка Login;
- Користувач не авторизований.

** Test Data :**
- Username: locked_out_user
- Password: secret_sauce

** Steps :**
1. У пoлe Username ввести locked_out_user.
2. У пoлe Password ввести secret_sauce.
3. Натиснути кнопку Login.

** Expected Result :**

Після введення locked_out_user і правильного пароля та натискання Login користувачу відмовлено в авторизації з повідомленням "Epic sadface: Sorry, this user has been locked out".

** Actual Result :**

Після введення locked_out_user і правильного пароля та натискання Login з'явилося повідомлення "Epic sadface: Sorry, this user has been locked out".

** Result :**

Pass

### Decision Table для форми Login

| Тип | Элемент | R1 | R2 | R3 | R4 | R5 |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Conditions** | C1: Username допустимий? | T | T | F | T | F |
| | C2: Password правильний? | T | T | T | F | F |
| | C3: Користувач заблокований? | F | T | - | - | - |
| **Actions** | A1: Products | X | | | | |
| | A2: Locked message | | X | | | |
| | A3: Invalid credentials | | | X | X | X |

# Результати виконання

| Test Case | Type | Result |
|---|---|---|
| TC-LOGIN-01 | Positive | Pass |
| TC-LOGIN-02 | Negative | Pass |
| TC-LOGIN-03 | Negative | Pass |
| TC-LOGIN-04 | Negative | Pass |
| TC-LOGIN-05 | Negative | Pass |
| TC-LOGIN-06 | Negative | Pass |
