// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, onError) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//       onError(errorMessage);
//     }
//   }, delay(6000));
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);

// ======================================================================================================================================

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// ======================================================================================================================================

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 6000); // C

// ======================================================================================================================================

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars.name);
// };

// setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// ======================================================================================================================================

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (callback) => {
//   setTimeout(() => console.log(`Mars temperature is: ${callback()} degree Celsius`), messageDelay());

//   // outra solucao:
//   // console.log('Mars terperature is: ' + callback() + ' degree Celsius');
// };
// sendMarsTemperature(getMarsTemperature);

// faz parte da outra solução:
// setTimeout(sendMarsTemperature, messageDelay(), getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// ======================================================================================================================================

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback1, callback2) => callback1(getMarsTemperature()) + callback2(getMarsTemperature());
// setTimeout(sendMarsTemperature, messageDelay(), temperatureInFahrenheit, greet)


// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// const sendMarsTemperature = ((callback1, callback2) => {
//   setTimeout(() => {
//     callback1(getMarsTemperature());
//   }, messageDelay())
//   setTimeout(() => {
//     callback2(getMarsTemperature());
//   }, messageDelay())
// });

// sendMarsTemperature(temperatureInFahrenheit, greet);

// ======================================================================================================================================

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = ((successCallback, errorCallback) => {
  if (getMarsTemperature() < 25) {
    return errorCallback('Robot is busy');
  }
  return successCallback(getMarsTemperature());
});

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(sendMarsTemperature, messageDelay(), temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(sendMarsTemperature, messageDelay(), greet, handleError);

// Lembre que funcoes podem ser usadas como parametro (funcExempl) e como um retorno, ou seja,
// você está chamando a função e capturando o valor retornado por ela (funcExempl());


/* Outro detalhe: setTimeout é uma funcao que permite ser escrita dentro de uma função, como:


function xablau() {
  setTimeout(() => {});
}


Ou da seguinte maneira:

setTimeout(funcaoParametro, numero*, ...parametros**);

Obs.:

*: pode ser a chamada de uma funcao que retorna um numero inteiro;
**: ... significa que mais de um aparametro pode ser passado, afinal esses parametros sao da funcaoParametro;

Outra obs.: vale ressaltar que o tempo de intervalo passado como atraso da chamada da funcaoParametro é o mesmo para todas as 
callbacks passadas em ...parametros (se houver callback passada como parametro);

Caso queira passar tempos de atraso diferentes para cada allback, será necessario passar a funcao setTimeout() dentro de cada callback;

É isso, GGs!
*/
