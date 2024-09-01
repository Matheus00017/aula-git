var primeiroNumero = parseInt(prompt("digite o valor a converter: "));
var porcentagem = parseInt(prompt("digite a porcentagem que deseja encontrar: "));

//var converter o numero inteiro para decimal
//só é possivel achar a % usando numero decimal

var porcentagemDecimal = porcentagem / 100;

//multiplica o valor pela porcentagem para encontrar o resultado 

var resultado = valor * porcentagemDecimal;
console.log("o resultado é : " + resultado);