var cardapio = "===== escolha um tipo de pizza==== \n";
cardapio = cardapio + "numero |nome | preço: \n"
cardapio += "1 | mussarela | 20,00  \n";
cardapio += "2 | calabresa | 25,00 \n";
cardapio += "3 | marguerita | 23,00  \n";
cardapio += "4 | 4 queijos | 29,99  \n";
cardapio += "5 | baiana | 22,50  \n";

var numeroPizza = parseInt(prompt(cardapio));
var quantidade = parseInt(prompt("Digite a quantidade de pizzas:"));
var valorTotal = 0 ;

if(numeroPizza == 1){
valorTotal = quantidade * 20.00;
}else if(numeroPizza == 2){
valorTotal = quantidade * 25.00;
}else if(numeroPizza == 3){
valorTotal = quantidade * 23.00;
}else if(numeroPizza == 4){
valorTotal = quantidade * 29.99;
}else if(numeroPizza == 5){
valorTotal = quantidade * 22.50;
}else{
    console.log("Digite um numero valido");
}
console.log("Sua pizza esta pronta" + numeroPizza );
console.log("foram pedidas ["  + quantidade + "] pizzas");
console.log("Total a pagar : R$" + valorTotal);