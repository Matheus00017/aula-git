var cardapio = "===== escolha uma pizza ======\n";
var cardapio = cardapio + "Numero | nome | preço\n";
cardapio += "1 | Mussarela  | 20,00\n";
cardapio += "2 | Calabresa  | 25,00\n";
cardapio += "3 | marguerita | 23,00\n";
cardapio += "4 | 4 queijos  | 29,99\n";
cardapio += "5 |  Baiana    | 22,50\n";

var numero = parseInt(prompt(cardapio));
var quantidade = parseInt(prompt("Digite a quantidade de pizza que deseja pedir:"));
var valorTotal = 0;

//bebidas

if(numero == 1){
    valorTotal = quantidade * 20.00;
}else if(numero == 2){
    valorTotal = quantidade * 25.00;
}else if(numero == 3){
    valorTotal = quantidade * 23.00;
}else if(numero == 4){
    valorTotal = quantidade * 29.99;
}else if(numero == 5){
    valorTotal = quantidade * 22.50;
}else{
    console.log("Digite um numero de pizza valido")
}

console.log("Sua pizza esta pronta: " + numero);
console.log("Foram pedidas: " + quantidade + " pizza;");
console.log("O valor a pagar foi de: R$" + valorTotal);

var menu = "===== Escolha uma bebida =====\n";
var menu = menu + "Codigo | nome | preço\n";
menu += "1 | Lata de Refrigerante | 5,00\n";
menu += "2 | Refrigerante de 2L   | 10,00\n";
menu += "3 |       Água           | 3,50\n";
menu += "4 |   Água com gás       | 4,50\n";
menu += "5 |       Suco           | 7,20\n";

var Codigo = parseInt(prompt(menu));
var quantos = parseInt(prompt("Digite quantos refrigerantes gostaria de pedir:"));
var totalValor = 0

if(Codigo == 1){
    totalValor = quantos * 5.00
}else if(Codigo == 2){
    totalValor = quantos * 10.00
}else if(Codigo == 3){
    totalValor = quantos * 3.50
}else if(Codigo == 4){
    totalValor = quantos * 4.50
}else if(Codigo == 5){
    totalValor = quantos * 7.20
}else{
    console.log("Digite um codigo vélido")
}

console.log("A bebida escolhida foi: " + Codigo);
console.log("foram pedidas:" + quantos + "bebidas");
console.log("O valor total a pagar: R$" + totalValor);

var totalApagar = valorTotal + totalValor
console.log("O total do pedido ficou em: R$" + totalApagar); 
