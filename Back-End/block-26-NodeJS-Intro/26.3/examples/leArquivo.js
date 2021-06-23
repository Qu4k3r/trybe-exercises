const fs = require('fs');

function leArquivo(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, "utf-8");
    return fileContent;
  } catch {
    return null;
  }
}

module.exports = leArquivo;
