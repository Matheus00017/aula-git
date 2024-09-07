//**
/*A primeira estrutura condicional é o IF
* ele tem a  anatomia de if(condição){}}else{}
*
*porém,podemos ter mais de 1 comdição
*neste caso usamos if(){} else if () {}... else{}
*
*exemplo para a idade brasileira:
*/

var anoNascimento = parseInt(prompt("Digite o ano que nasceu"));

// cria um elemento de data
const data = newdate

const idade = anoAtual - anoNascimento
console.log("Sua idade é: " + idade);

if(idade >= 18){
    console.log("você é maior de idade");
    console.log("1. pode tirar CNH!");
    console.log("2. É obrigado a votar!");
    console.log("3. Pode consumir bebidas alcoolicas e entrar em qualquer lugar.");
}else if (idade >= 16){
    console.log("você é menor de idade,porem:");
    console.log("pode votar!");
    console.log("pode ser emancipado!");
    console.log("pode entar em algum lugaes desacopanhados.");
}else{
    console.log("você é completamente menor de idade!");
    console.log("é completamente dependente de um responsável");
}

