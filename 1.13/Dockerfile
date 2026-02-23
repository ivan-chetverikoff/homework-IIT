# Используем официальный образ Go версии 1.16
FROM golang:1.16-alpine

# Устанавливаем git (нужен для go mod) и ca-certificates (для HTTPS запросов)
RUN apk add --no-cache git ca-certificates

WORKDIR /usr/src/app

# Копируем файлы модулей Go для кэширования зависимостей
COPY go.mod go.sum ./

# Скачиваем зависимости (выполнится только если go.mod изменится)
RUN go mod download

# Копируем исходный код
COPY . .

# Собираем проект: создаём статический бинарный файл
RUN go build -o server .

# Открываем порт 8080
EXPOSE 8080

# Запускаем скомпилированный сервер
CMD ["./server"]