// const http = require('http');
// const  server = http.createServer((req, res) =>{

//    res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//    });

//    res.end(`<h1>Страница загружена</h1>`);
//    console.log(`Запрос получен`);
// });

// const port = '3000';

// server.listen(port);

/**_______________________________________________-- */

const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		res.end(`<a href="/about">Перрейти на страницу обо мне!</a>`);
	} else if (req.url === "/about") {
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		res.end(`<a href="/">Перрейти на страницу главная!</a>`);
	} else {
		res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});

		res.end('<h1>Страница не найдена!</h1>');
	}
	// res.writeHead(200, {
	//    'Content-Type': 'text/html; charset=utf-8'
	// });

	// res.end(`<h1>Страница загружена</h1>`);
	// console.log(`Запрос получен`);
});

const port = "3000";

server.listen(port);
