const express = require('express');
const multer = require('multer');

//imports local
const multerConfig = require('./config/multer');

const routes = express.Router();

//CONTROLLERS:
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files', multer(multerConfig).single('file') ,FileController.store);

module.exports = routes;