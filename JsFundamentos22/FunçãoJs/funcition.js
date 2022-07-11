
/* as funções permitem agrupar uma serie de instruções para executar uma tarefa especifica*/

/* funName e um escopo de uma função basica com o hello Zé e por fora da função estamos chamando ela para ser executada atraves da assinatura funName();*/
function funName(){

	console.log("hello zé");

}
funName();



/*função passExam temos um escopo com variaveis que será usadas como parametro, para os candidatos serem provados na unipe ou no colegio no ensino medio, 
exame que será publicado semana que vem, alunos */

/* caso a nota for maior ou igual a 71 o aluno e aprovado direto se a nota foi maior ou igual a 51, aluno voltara para o ensino medio se não, falhou no ensino.*/

function passExam(nome, nota){

	var passUniPe = 71;
	var passColegio = 51;

	if (nota >= passUniPe) {
		console.log(nome + " Parabéns você passou para a unipe kk " + nota + ' points');
	
	} else if (nota >= passColegio){
		console.log( nome + "\n" + "Parabéns você passou no colegio faça o vestibular para o unipe " + nota + 'Pontos');
	} else {
		console.log( nome + "\n"+ " você falhou ");
	}
}

/* utilizando a assinatura vamos passar dois parametros o nome e a nota entre parenteses*/
passExam('José', 51);
passExam('walace', 50);
passExam('jayane',81);