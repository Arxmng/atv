const prompt = require('prompt-sync')()


const salario = Number(prompt('Digite o Salario'))
const percentual = Number(prompt('Digite o percentual de reajuste'))

const  salarionovo = salario + (salario * (percentual/100))

console.log(salarionovo);