/* 
                    LAÇO DE REPETIÇÃO DO WHILE

    O do/while tem quase o mesmo funcionamento que o while, a diferença
    é que com o uso dele teremos os comandos executados ao menos uma única vez.

*/


//Array de nome de pessoas que será exibindo no laço do while.
var pessoas = ['José', 'João', 'Lucas', 'Fernanda', 'Jayane', 'Thais'];

//variavel de inicialização.
var i = 0;


do {

    /* exibindo pessoas */
    console.log(pessoas[i]);

    /* incrementando a variavel (i) */
    i++;

    /* while irá percorrer o array pessoas de acordo com o seu devido tamanho */
}   while (i < pessoas.length);