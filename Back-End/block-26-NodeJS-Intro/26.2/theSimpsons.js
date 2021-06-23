const fs = require('fs/promises');

const file = './simpsons.json';

const showCharacter = async () => {
  try {
    const fileContent = await fs.readFile(file, "utf-8");
    const fileContentToObject = JSON.parse(fileContent);
    fileContentToObject.map(({id, name}) => console.log(`${id} - ${name}`));
  } catch(e) {
    console.error(e.message);
  }
}

const searchById = async (id) => {
  const fileContent = await fs.readFile(file, "utf-8");
  const fileContentToObject = JSON.parse(fileContent);
  const findById = fileContentToObject.find(({id: charId}) => Number(charId) === id);
  
  return findById || new Error("id nao encontrado");
  // if (!findById) throw new Error("id nao encontrado");
  // return findById;
};

// searchById(55)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.message));

const modifySimpsons = async () => {
  const fileContent = await fs.readFile(file, "utf-8");
  const simpsons = JSON.parse(fileContent);

  const filteredSimpsons = simpsons.filter(({id}) => id !== '6' && id !== '10');

  return fs.writeFile(file, JSON.stringify(filteredSimpsons)) || new Error("algo deu errado");
}

// modifySimpsons()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.message))

const createNewSimpsons = async () => {
  const fileContent = await fs.readFile(file, "utf-8");
  const simpsons = JSON.parse(fileContent);

  const newSimpsons = [];

  simpsons.forEach((char) => (char.id <= 4 && char.id >= 1) && newSimpsons.push(char));

  return fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons)) || new Error("algo deu errado");
}

createNewSimpsons()
  .then((res) => res)
  .catch((err) => console.error(err.message));