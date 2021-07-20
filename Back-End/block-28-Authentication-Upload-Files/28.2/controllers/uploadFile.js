const path = require('path');

const fs = require('fs/promises');

const { upload } = require('../middlewares');

const uploadFile = [
  upload.memoryUpload.single('picture'),
  async (req, res, _next) => {
    const { file: { buffer, ...file } } = req;
    const filePath = path.join(__dirname, '..', 'uploads', file.originalname);

    await fs.writeFile(filePath, buffer);

    return res.json({ message: 'Upload realizado com sucesso.', file, filePath });
  },
];

module.exports = uploadFile;
