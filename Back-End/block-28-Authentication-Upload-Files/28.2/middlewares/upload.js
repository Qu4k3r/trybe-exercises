const multer = require('multer');
const path = require('path');

const filePath = path.join(__dirname, '..', 'uploads');

const memoryStorage = multer.memoryStorage();

const diskStorage = multer.diskStorage({
  destination: filePath,
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: filePath });

const memoryUpload = multer({ storage: memoryStorage });
const diskStorageUpload = multer({ storage: diskStorage });

module.exports = {
  upload,
  memoryUpload,
  diskStorageUpload,
};
