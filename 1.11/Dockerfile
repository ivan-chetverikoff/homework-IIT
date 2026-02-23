FROM amazoncorretto:8-alpine

WORKDIR /usr/src/app

# Копируем Maven wrapper и pom.xml для кэширования зависимостей
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Копируем исходный код
COPY src ./src

# Даём права на выполнение mvnw и собираем проект
RUN chmod +x mvnw && ./mvnw package

# Открываем порт
EXPOSE 8080

# Запускаем JAR-файл
CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]