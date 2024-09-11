const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const counterFilePath = path.join(__dirname, 'counters.json');

// Функция для чтения счетчиков из файла
function readCounters() {
    try {
        const data = fs.readFileSync(counterFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return {}; // В случае ошибки возвращаем пустой объект
    }
}

// Функция для записи счетчиков в файл
function writeCounters(counters) {
    fs.writeFileSync(counterFilePath, JSON.stringify(counters, null, 1), 'utf8'); // третий параметр в JSON.stringify - количество отступов вложенных структур
}

// Инициализируем счетчики
let counters = readCounters();

// Обработчик для главной страницы
app.get('/', (req, res) => {
    counters['/'] = (counters['/'] || 0) + 1;
    writeCounters(counters);
    res.send(`<h1>Главная страница</h1><p>Количество просмотров: ${counters['/']}</p>`);
});

// Обработчик для страницы "О нас"
app.get('/about', (req, res) => {
    counters['/about'] = (counters['/about'] || 0) + 1;
    writeCounters(counters);
    res.send(`<h1>О нас</h1><p>Количество просмотров: ${counters['/about']}</p>`);
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});