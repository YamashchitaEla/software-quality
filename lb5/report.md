# Лабораторна робота №5
## Інтеграційне тестування компонентів та зовнішніх систем
**Виконала: Ямащіта Рікаенжела Юкінобівна**
**Група: 6.1213-2пі**
**Дата: 27.10.2026**

## 1. Component Integration Testing
### Test Object
`CartService <-> shop-utils`

### Scenario 1 — Discount
Test Data:
- item 1: price = 100;
- item 2: price = 200;
- discount = 10%.
Expected Result:
`270`
Actual Result:
`270`
Result:
`Pass`

### Scenario 2 — Invalid Discount
Test Data:
- item: price = 100;
- discount = 110%.
Expected Result:
`Discount must be between 0 and 100`
Actual Result:
`Discount must be between 0 and 100`
Result:
`Pass`

## 2. System Integration Testing
### Test Object
`ExternalEchoGateway ↔ Postman Echo`
### Test Data
- orderId = `ORD-001`;
- total = `270`.
### Expected Result
```json
{
"orderId": "ORD-001",
"total": 270
}
```
### Actual Result
```json
{
"orderId": "ORD-001",
"total": 270
}
```
### Result
`Pass`

## Висновки
Під час лабораторної роботи було успішно освоєно та реалізовано на практиці компонентне інтеграційне та системне інтеграційне тестування. Усі створені тест-сценарії для перевірки взаємодії внутрішніх компонентів CartService <-> shop-utils, включаючи негативний тест на обробку помилок валідації, а також системний тест для взаємодії ExternalEchoGateway із зовнішнім сервісом Postman Echo через HTTP, завершилися зі статусом PASS. Проведені практичні експерименти наочно продемонстрували відмінності між рівнями тестування та підтвердили високу залежність системних інтеграційних тестів від конфігурації тестового середовища та стабільності мережі.