const Box = require('../models/Box');

class BoxController {

    async store(req,res) {

        const { title } = req.body;

        const box = await Box.create({ title: title});

        return res.json (box);

    }

    async show(req,res) {

        const box = await await Box.findById(req.params.id).populate({
            path: 'files', // aqui é qual campo eu quero popular
            options: { sort: { createdAt: -1 }} // Agora estou ordenando de forma decrescente lá no MongoDB
        });

        return res.json(box);

    }

}

module.exports = new BoxController();