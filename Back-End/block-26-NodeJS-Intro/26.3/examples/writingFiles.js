const fs = require('fs/promises');
module.exports = async function writingFiles(fileName, fileContent) {
  await fs.writeFile(`../${fileName}`, fileContent);
  return fileContent;
}
