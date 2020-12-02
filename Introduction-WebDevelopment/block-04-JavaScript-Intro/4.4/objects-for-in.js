const info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

// Exercise 1
console.log('Bem-vinda,', info.personagem)

// Exercise 2
info.recorrente = 'Sim'

// Exercise 3
for (const key in info) {
  console.log(key)
}

// Exercise 4
for (const values in info) {
  console.log(info[values])
}

// Exercise 5
const info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Moutain, Dell's Four Comics #178",
  nota: "O Último MacPatinhas",
  recorrente: "Sim",
}

for (const properties in info) {
  if (info[properties] === info2[properties]) {
    console.log("Ambos recorrentes");
  } 
  else {
    console.log(info[properties] + " e " + info2[properties]);
  }
}
