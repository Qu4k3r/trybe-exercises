let bruteSalary = 3500
let inssAliq
let ir

/*INSS*/
if (bruteSalary > 5189.82) {
  inssAliq = 570.88
}

else if (bruteSalary >= 2594.93) {
  inssAliq = 0.11 * bruteSalary
}

else if (bruteSalary >= 1556.95) {
  inssAliq = 0.09 * bruteSalary
}

else if (bruteSalary <= 1556.94) {
  inssAliq = 0.08 * bruteSalary
}

let baseSalary = bruteSalary - inssAliq

/*IR*/
if (baseSalary > 4664.68) {
  ir = 0.275 * baseSalary - 869.36
}

else if (baseSalary >= 3751.06) {
  ir = 0.225 * baseSalary - 636.13
}

else if (baseSalary >= 2826.66) {
  ir = 0.15 * baseSalary - 354.8
}

else if (baseSalary >= 1903.99) {
  ir = 0.075 * baseSalary - 142.80
}

else if (baseSalary <= 1903.98) {
  ir = 0
}

let liquidSalary = baseSalary - ir

console.log(liquidSalary)
console.log(`If these numbers are correct, my liquid salary will be ${liquidSalary - 0.17*3500} --> considering my brute salary = 3500`)
