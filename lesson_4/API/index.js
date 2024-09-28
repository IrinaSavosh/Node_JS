const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('<h1>Hello!</h1>');
});

//без вывода в консоль терминала
// app.post('/', (req, res) => {
//    res.send('<h1>This is a post request!</h1>');
// });


//с выводом в консоль терминала
app.use(express.json());
app.post('/', (req, res) => {
   console.log(req.body);
   res.send('<h1>This is a post request!</h1>');
});

app.put('/', (req, res) => {
   console.log(req.body);
   res.send('<h1>This is a put request!</h1>');
});

app.delete('/', (req, res) => {
   console.log(req.body);
   res.send('<h1>This is a delete request!</h1>');
});

app.listen(3000);