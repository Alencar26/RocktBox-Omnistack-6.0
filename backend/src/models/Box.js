// ESSE MODEL REPRESENTA UMA PASTA DENTRO DO PROGRAMA!

const mongoose = require('mongoose');

const Box = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    files: [
        // array de arquivos.
        // porque uma pasta pode ter vários arquivos.
        { type: mongoose.Schema.Types.ObjectId, ref: 'File'} // relacionamento no mongodb
    ]
}, {
    timestamps: true,
});

// exportando o mongoose model com nome de 'Box' e passando o schema como parâmetro.
module.exports = mongoose.model('Box', Box);