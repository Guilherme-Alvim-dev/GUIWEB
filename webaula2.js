/*criar uma variável*/
let nome = "Sabrina";
let altura = 1.80;

/*Concatenção de string*/
console.log(nome+" possui "+altura+" de altura.");

/*interpolação de string*/
console.log(`${nome} possui ${altura} de altura.`);

let numero = 10;
let texto = "10";
/*Comparação igualdade (==)*/
console.log(numero == texto);

/*Comparação com igualdade escrita (===)*/
console.log(numero === texto);


/*Operador lógico (E) -- Representação: &&*/
/*Operador Lógico (OU) -- Representação: `*/


let media = 5.5;

if(media>=7 && media<=10){
    console.log("Aluno aprovado");
}else if(media>4 && media<6){
    console.log("Aluno de Exame");
}else{
    console.log("Aluno reprovado");
}

let valor = 3;

switch(valor){
    case 1:
        console.log ("O valor é 1");
        break;
    case 2:
        console.log("O valor é 2");
        break;
    case 3:
        console.log("O valor 3");
        break;
    case 4:
        console.log("O valor é 4");
        break;
    default:
        console.log("Opção inválida");

}

const readline = require('readline-sync');
let nome1 = readline.question('Digite o nome: ');

console.log(nome1);

/*cenas dos próximos capítulos
Laço de repetição: for (), while() e do...while() */
