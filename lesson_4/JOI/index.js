// const Joi = require('joi');

// const schema = Joi.string();

// const result = schema.validate(4);

// console.log(JSON.stringify(result, null, 2));

/**----------------------------------*/

const express = require("express");
const Joi = require("joi");

const app = express();

const articles = [];
let uniqueID = 0;

const articleScheme = Joi.object({
	title: Joi.string().min(5).required(),
	content: Joi.string().min(10).required(),
});

const idScheme = Joi.object({
	id: Joi.number().required(),
});

app.use(express.json());

app.get("/articles", (req, res) => {
	res.send({ articles });
});

app.get("/articles/:id", (req, res) => {
	const idValidationResult = idScheme.validate(req.params);
	if (idValidationResult.error) {
		return res.status(400).send(idValidationResult.error.details);
	}

	const article = articles.find((article) => article.id === Number(req.params.id));

	if (article) {
		res.send({ article });
	} else {
		res.status(404);
		res.send({ article: null });
	}

	// res.send({ articles });
});
