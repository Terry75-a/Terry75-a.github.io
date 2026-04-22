const express = require('express');
const path = require('path');


const app = express();

const rutas = require("./routes/rutas");
app.use('/', rutas);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());