const Box = require('../models/Box');
const File = require('../models/File');

class FileController {

    async store(req,res) {
        // pegando o id que vai na url e procurando no banco
        const box = await Box.findById(req.params.id);

        const file = await File.create({
                title: req.file.originalname,
                path: req.file.key,
        });
        
        box.files.push(file);

        await box.save();

        req.io.sockets.in(box._id).emit('file', file); // utilizando o web sockets para informar em tempo real que um novo
                                                      // arquivo foi criado naquela pasta.

        return res.json(file);
    }

}

module.exports = new FileController();

