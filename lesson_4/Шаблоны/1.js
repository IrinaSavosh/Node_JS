const express = require("express");
const app = express();

const articles = [
	{ title: "Article 1", discription: "First awesome article" },
	{ title: "Article 2", discription: "Second awesome article" },
	{ title: "Article 3", discription: "Third awesome article" },
];

app.get("/", (req, res) => {
   let html = '<h1>Article list</h1>';

   for (const articleData of articles){
      html +=`<h2>${articleData.title}</h2>`;
      html +=`<p>${articleData.discription}</p>`;

   }

   res.send(html);

});

app.listen(3000);
