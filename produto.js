//solicite o nome do produto
//solicite a quantidade de vendida
//solicite o valor do produto
//apresente o valor total
//solicite a % de desconto
//apresente o r$ total de desconto
//apresente o valor total da venda depois do desconto

var nomeProduto = prompt("Digite o nome do produto ");//coca cola
var quantidadeVendia = prompt("Digie a quantidade do produto");//5
var valorProduto = parseFloat(prompt("digite o valor do produto: " )); //50,00
var valorTotal = quantidadeVendida * valorProduto;//5 * 50,00 
console.log(("o valor total deu" + valorTotal));//250,00
var porcentagemDescontoesconto = prompt(("degite o valor da % de desconto"));
var porcentagemDecimal =porcentagemDesconto / 100
var descontoReais = valorTotal * porcentagemDecimal;
console.log("o desconto em R$ doi de " + descontoReais);
var descontoTotal = valorTotal - descontoReais;
console.log("o produto teve um total de " + descontoTotal);

