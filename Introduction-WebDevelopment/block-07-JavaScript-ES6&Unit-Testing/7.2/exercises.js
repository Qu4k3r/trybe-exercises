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

orderModifier(order);
