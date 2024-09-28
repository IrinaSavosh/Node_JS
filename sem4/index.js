
Есть код:
const express = require("express");
const app = express();
const users = [];
let uniqueID = 0;
app.use(express.json());
app.get("/users", (req, res) => {
	res.send({ users });
});
app.post("/users", (req, res) => {
	uniqueID += 1;
	users.push({
		id: uniqueID,
		...req.body,});
	res.send({ id: uniqueID });});
app.put("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find((user) => user.id === userId);
	if (user) {
		const { firstName, secondName, age, city } = req.body;
		user.firstName = firstName;
		user.secondName = secondName;
		user.age = age;
		user.city = city;}});
app.listen(3000);
Необходимо дописать функционал:
Для того, чтобы пользователи хранились постоянно, а не только, когда запущен сервер, необходимо реализовать хранение массива в файле.
Подсказки:
— В обработчиках получения данных по пользователю нужно читать файл
— В обработчиках создания, обновления и удаления нужно файл читать, чтобы убедиться, что пользователь существует, а затем сохранить в файл, когда внесены изменения
— Не забывайте про JSON.parse() и JSON.stringify() - эти функции помогут вам переводить объект в строку и наоборот.
