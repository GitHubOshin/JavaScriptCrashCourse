//* FUNCTION

function add(a, b) {
  return a + b
}

console.log(add(2, 2))

function calculateVat(money, vat) {
  return (money * vat) / 100
}

const totalVat = calculateVat(1290, 7)
console.log(totalVat)
