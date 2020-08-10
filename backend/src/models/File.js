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
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
});

//CAMPO VIRTUAL << NÃO EXISTE LÁ NO MANGODB, MAS, EXISTE NO BACKEND
File.virtual('url').get(function() {

     // usando variável ambiente para informar a url
    const url = process.env.URL || 'http://localhost:3333';
    return `${url}/files/${encodeURIComponent(this.path)}`;

    // usando url estática
   // return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

// exportando o mongoose model com nome de 'Box' e passando o schema como parâmetro.
module.exports = mongoose.model('File', File);