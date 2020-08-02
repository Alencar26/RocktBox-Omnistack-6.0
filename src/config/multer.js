// CONFIGURANDO O MULTER

const multer = require('multer');
const path = require('path'); // vem por padão no node. (manipular arquivos)
const crypto = require('crypto');

//exportando um objeto do multer
module.exports = {

    //destino do arquivo - (path ajuda a padronizar o caminho dos arquivos)
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    // salva os arquivos no disco local
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            });
        },
    }),
    
};