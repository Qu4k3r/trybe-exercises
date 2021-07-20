const path = require('path');
const fs = require('fs/promises');

const middlewares = require('../middlewares');
// const services = require('../services');

const uploadFile = [
  middlewares.upload.single('file'),
  async (req, res, next) => {
    // const { file: { buffer, ...file } } = req;

    const file = req.file;
    const buffer = req.file?.buffer;

    if (req.invalidFileType) {
      return next({ message: 'Extension must be "png"', statusCode: 403 });
    }

    if (req.fileExists) {
      return next({ message: 'File already exists', statusCode: 409 });
    }

    if (!file || !file.originalname) {
      console.log(file, 'oi')
      return next({ message: 'A casa caiu creitin, num tem arquivo', statusCode: 404 });
    }

    const filePath = path.join(__dirname, '..', 'uploads', `${Date.now()}-${file.originalname}`);

    await fs.writeFile(filePath, buffer);

    return res.json({ message: 'OK!' });
  },
];

module.exports = uploadFile;
