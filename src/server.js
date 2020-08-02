const express = require('express');
const mongoose = require('mongoose');

//imports local:
const Routes = require('./routes');

const app = express();

// conexão com o banco de dados em nuvem: Atlas-(https://cloud.mongodb.com/)
mongoose.connect('mongodb+srv://rocktbox:2637396@cluster0.2dza1.mongodb.net/RocktBoxDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // json não permite envio de arquivos!
app.use(express.urlencoded({ extended: true })); // permite envios de arqivos pela url

app.use(Routes);

app.listen(3333, () => {
    console.log("Server Ativo!")
});