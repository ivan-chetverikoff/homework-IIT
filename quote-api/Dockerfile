#  Шаг 1: Базовый образ
FROM node:18-alpine

#  Шаг 2: Рабочая директория
WORKDIR /usr/src/app

#  Шаг 3: Копируем package.json для кэширования зависимостей
COPY package*.json ./

#  Шаг 4: Устанавливаем только production зависимости
RUN npm install --production

#  Шаг 5: Копируем исходный код
COPY . .

#  Шаг 6: Переменная окружения (порт)
ENV PORT=3000

#  Шаг 7: Документируем порт
EXPOSE 3000

#  Шаг 8: Команда запуска
CMD ["node", "index.js"]