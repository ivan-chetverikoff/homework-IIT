#  Quote API

Простой REST API для получения случайных цитат великих людей. Создано в рамках курса Docker от Helsinki University.

##  Возможности

- Получение всех цитат
- Получение случайной цитаты
- Получение цитаты по ID
- Health check эндпоинт
- Полностью контейнеризировано

##  Быстрый старт

### Через Docker (рекомендуется)

```bash
# Pull образа из Docker Hub
docker pull ваш-username/quote-api:latest

# Запуск контейнера
docker run -d -p 3000:3000 --name quote-api ваш-username/quote-api