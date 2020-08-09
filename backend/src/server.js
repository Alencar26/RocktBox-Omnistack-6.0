const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');

//imports local:
const Routes = require('./routes');

const app = express();

app.use(cors()); // permite que todos possam acessar suas aplicações.

const server = http.Server(app);   //<==// configurando requisição http e web Socket
const io = socket(server);        //<==// configurando requisição http e web Socket

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    });
});

// conexão com o banco de dados em nuvem: Atlas-(https://cloud.mongodb.com/)
mongoose.connect('mongodb+srv://rocktbox:2637396@cluster0.2dza1.mongodb.net/RocktBoxDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});


app.use(express.json()); // json não permite envio de arquivos!
app.use(express.urlencoded({ extended: true })); // permite envios de arqivos pela url
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // toda vez que acessar a rota '/file' o express vai redirecionar para 
                                                                        // o diretório onde estão os arquivos físicos. 

app.use(Routes);

server.listen(3333, () => {
    console.log("Server Ativo!")
});