// Exercise 1

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const getName = order.order.delivery.deliveryPerson;
  const getCustomerName = order.name;
  const getTel = order.phoneNumber;
  const getAdress = order.address.street;
  const getNumber = order.address.number;
  const getApartment = order.address.apartment;
  // Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701
  console.log(`Olá, ${getName}. Entrega para: ${getCustomerName}, Telefone: ${getTel}, ${getAdress}, Nº: ${getNumber}, AP: ${getApartment}`)
}

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.
  let newName = order.order.delivery.delivery;
  newName = 'Luiz Silva';
  let newPizza = Object.keys(order.order.pizza);
  newPizza = ['muzzarella', 'calabresa'];
  const drink = order.order.drinks.coke.type;
  let newTotal = order.payment.total;
  newTotal = 50;

  console.log(`Olá, ${newName}. O total do seu pedido de ${newPizza.join(', ')} e ${drink} é R$${newTotal},00.`)
}

// orderModifier(order);

// Exercise 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



// Part I
// Crie uma função para substituir o turno da lesson2 para 'manhã'. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addMorningShiftLesson2 = (key, obj, val) => {
  obj[key] = val;
}

addMorningShiftLesson2('turno', lesson2, 'manhã');

// console.log(lesson2);

// Part II
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listAllKeys = obj => Object.keys(obj);
// console.log(listAllKeys(lesson2));

// Part III
// Crie uma função para mostrar o tamanho de um objeto.
const showObjectLength = obj => Object.keys(obj).length;
// console.log(showObjectLength(lesson2));

// Part IV
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listAllValues = obj => Object.values(obj);
// console.log(listAllValues(lesson2));

// Part V
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/* const allLessons = {lesson1, lesson2, lesson3}; OR

const arrayOfLessons = [];
arrayOfLessons.push(lesson1, lesson2, lesson3)
const allLessons = array => {
  const newObject = {};
  for (const i in array) {
    newObject[`lesson${Number(i) + 1}`] = array[i];
  }
  return newObject;
};
*/

// console.log(allLessons(arrayOfLessons));

/*
{
  lesson1:
  { materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã' },
  lesson2:
  { materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite' },
  lesson3:
  { materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite' }
};
*/

// Part VI
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allLessons = {lesson1, lesson2, lesson3};
const sumOfStudents = (obj) => {
  let totalStudents = 0;
  for (i in obj) {
    totalStudents += Number(obj[i]['numeroEstudantes']);
  }
  return totalStudents;
}

// console.log(sumOfStudents(allLessons));

// Part VII
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, pos) => Object.values(obj)[pos];
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Part VIII
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, val) => {
  let isTrue = false;
  for (const [keys, valor] of Object.entries(obj)) {
    if (key === keys && val === valor) {
      isTrue = true;
    }
  }
  return isTrue;
}
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bonus
// Part I
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countMathStudents = obj => {
  let mathStudents = 0;
  // pega todos os subobjetos e joga dentro de um novo array [{}...{}]
  const subObjectsArray = Object.values(obj);
  for (const i in subObjectsArray) {
    // pega todos os valores de todos os subobjetos e joga dentro de um novo array [mat, 20, maria clara, noturno]
    const subject = Object.values(subObjectsArray[i])[0];
    if (subject === 'Matemática') {
      mathStudents += Number(Object.values(subObjectsArray[i])[1]);
    }
  }
  return mathStudents;
}
// console.log(countMathStudents(allLessons));

// Part II
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (obj, str) => {
  let totalStudents = 0;
  const subjectsArray = [];
  const objValuesArray = Object.values(obj)
  for (const i in objValuesArray) {
    if (objValuesArray[i].professor === str) {
      totalStudents += objValuesArray[i].numeroEstudantes;
      subjectsArray.push(objValuesArray[i].materia);
    }
  }
  const report = {professor: str, aulas: subjectsArray, estudantes: totalStudents};
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
