// Импорт модуля Express
const express = require('express');

// Создание приложения
const app = express();

// Порт из переменной окружения или 3000 по умолчанию
const PORT = process.env.PORT || 3000;

// База данных цитат (в памяти)
const quotes = [
  { 
    id: 1, 
    text: "Сложнее всего начать действовать, все остальное зависит только от упорства.", 
    author: "Амелия Эрхарт" 
  },
  { 
    id: 2, 
    text: "Логика приведет вас из пункта А в пункт Б. Воображение приведет вас куда угодно.", 
    author: "Альберт Эйнштейн" 
  },
  { 
    id: 3, 
    text: "Через 20 лет вы будете больше жалеть о том, чего не сделали, чем о том, что сделали.", 
    author: "Марк Твен" 
  },
  { 
    id: 4, 
    text: "Единственный способ делать великие дела — любить то, что вы делаете.", 
    author: "Стив Джобс" 
  },
  { 
    id: 5, 
    text: "Жизнь — это то, что с вами случается, пока вы строите другие планы.", 
    author: "Джон Леннон" 
  }
];

//  Главная страница
app.get('/', (req, res) => {
  res.json({ 
    message: "Welcome to Quote API! ", 
    version: "1.0.0",
    endpoints: [
      { method: "GET", path: "/", description: "Эта информация" },
      { method: "GET", path: "/quotes", description: "Все цитаты" },
      { method: "GET", path: "/quotes/random", description: "Случайная цитата" },
      { method: "GET", path: "/quotes/:id", description: "Цитата по ID" },
      { method: "GET", path: "/health", description: "Проверка здоровья" }
    ]
  });
});

//  Получить все цитаты
app.get('/quotes', (req, res) => {
  res.json({ 
    count: quotes.length,
    data: quotes 
  });
});

//  Получить случайную цитату
app.get('/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ 
    message: "Random quote",
    data: quotes[randomIndex] 
  });
});

//  Получить цитату по ID
app.get('/quotes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);
  
  if (quote) {
    res.json({ data: quote });
  } else {
    res.status(404).json({ 
      error: "Quote not found", 
      message: `Цитата с ID ${id} не найдена` 
    });
  }
});

//  Проверка здоровья (health check)
app.get('/health', (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

//  Обработка 404
app.use((req, res) => {
  res.status(404).json({ 
    error: "Not Found", 
    message: `Маршрут ${req.method} ${req.path} не найден` 
  });
});

//  Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(` Quote API запущен на порту ${PORT}`);
  console.log(` Главная: http://localhost:${PORT}/`);
  console.log(` Health: http://localhost:${PORT}/health`);
});