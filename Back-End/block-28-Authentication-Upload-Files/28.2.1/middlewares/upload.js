const multer = require('multer');

const services = require('../services');

const memoryStorage = multer.memoryStorage();

const fileFilter = async (req, file, cb) => {
  if (!file.originalname.includes('png')) {
    req.invalidFileType = true;
    return cb(null, false);
  }

  if (await services.fileExists(file.originalname)) {
    req.fileExists = true;
    return cb(null, false);
  }

  return cb(null, true);
};

const uploadMemoryStorage = multer({ storage: memoryStorage, fileFilter });

module.exports = uploadMemoryStorage;
