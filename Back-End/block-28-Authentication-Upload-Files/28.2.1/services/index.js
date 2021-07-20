const fs = require('fs/promises');

// const invalidFile = (file, buffer) => (!file || !buffer)
//   && ();

// const isExtensionValid = (file) => !file.originalname.includes('png')
//   && ();

const fileExists = async (file) => {
  const uploadsDirFiles = await fs.readdir(`${__dirname}/../uploads`);

  return uploadsDirFiles.some((fileName) => file.includes(fileName.split('-')[1]));
};

// const validateFile = async (file, buffer) => {

// };

  module.exports = {
  fileExists,
};
