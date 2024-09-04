// const http = require('http');
// let count = 0;
// const  server = http.createServer((req, res) =>{
//    if (req.url === '/') {
//       count += 1;
//   }

//    res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//    });
//    // count+=1;

//    res.end(`<h1>Страница загружена ${count} раз</h1>`);
//    console.log(`Запрос получен ${count}`);
// });

// const port = '3000';

// server.listen(port);

const { count } = require("console");
const http = require("http");
let countMain = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		countMain++;

		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		res.end(`<a href="/about">Перейти на страницу обо мне!</a>
         <h1>Главная страница загружена ${countMain} раз(а)!</h1>`);
	} else if (req.url === "/about") {
      countAbout++;
		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		res.end(`<a href="/">Перейти на страницу главная!</a>
         <h1>Страница обо мне загружена ${countAbout} раз(а)!</h1>`);
	} else {
		res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });

		res.end("<h1>Страница не найдена!</h1>");
	}
	// res.writeHead(200, {
	//    'Content-Type': 'text/html; charset=utf-8'
	// });

	// res.end(`<h1>Страница загружена</h1>`);
	// console.log(`Запрос получен`);
});

const port = "3000";

server.listen(port);
