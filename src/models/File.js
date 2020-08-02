// ESSE MODEL REPRESENTA UM ARQUIVO DENTRO DO PROGRAMA!

const mongoose = require('mongoose');

const File = new mongoose.Schema({

    title: {
        type: String,
        require: true, // torna o campo obrigatório
    },
    path: {
        // caminho de onde está o arquivo:
            //Ex: ./pastaFilme/Acao/Filme.mp4
        type: String,
        required: true, // campo obrigatório
    },
    files: []
}, {
    timestamps: true,
});

// exportando o mongoose model com nome de 'Box' e passando o schema como parâmetro.
module.exports = mongoose.model('File', File);