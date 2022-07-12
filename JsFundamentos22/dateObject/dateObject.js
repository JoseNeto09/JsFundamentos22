/* Date que recebe data e hora do computador atual. */
var date = new Date();

/* Capturando o ano atual do computador. */
var year = date.getFullYear();

/* Capturando o mes atual do computador. */
var month = date.getMonth();

/* Colocando manualmente ano dia e mes. */
date.setFullYear(2022);
date.setDate(12);
date.setMonth(7);


/* Exibindo dia ano e mes*/
console.log(date);
console.log(year);
console.log(month);