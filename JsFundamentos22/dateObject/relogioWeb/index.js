/* Implementanod um relogio com javaScript linkado com html apenas para exibir data e hora em tempo real*/

                                        /* Função Main RelogioWeb */
function relogioWeb(){
    
    /* variavel do tipo var utilizando Date para capturar a data do meu computador*/
    var date = new Date();

    /* utliznado o date.getHourus para capturar a hora do, relogio do meu computador */
    var horas = date.getHours();

    /* utliznado o date.getMinutes para capturar os minutos, do relogio do meu computador */
    var minutos = date.getMinutes() + '';

    /* utliznado o date.getSeconds para capturar os minutos relogio do meu computador */
    var segundos = date.getSeconds() + '';



    /* utliznado o date.getDay para capturar o relogio do meu computador */
    var dia = date.getDay();
    
    /* condição verificando o tamanho de horas que e do tipo date*/ 
    if (horas.length < 2) {
        horas = '0' + horas;
    }

    /* condição verificando o tamanho de minutos que e do tipo date*/
    if (minutos.length < 2) {
        minutos = '0' + minutos;
    }

    /* condição verificando o tamanho de segundos que e do tipo date*/
    if (segundos.length < 2) {
        segundos = '0' + segundos;
    }



    
    /* um Array com os dias da semana de segunda a domingo, que será concatenada na variavel var e será exibida no html.*/ 
    var semana = ['Segunda-feira', ' Terça-feira ', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'];


    /* chamando condições e array para compor o nosso relogio web*/
    var relogio = semana[dia-1] + horas + ':' + minutos + ':' + segundos;


    /* passando a o relogio via document.getElementaByid para o html.*/
    document.getElementById('relogio').innerHTML = relogio;
}


relogioWeb();