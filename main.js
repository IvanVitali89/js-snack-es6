// creo l'oggetto con gli array, genero numeri random tra 1 e 10, e con ciclo li inserisco, stampo l'oggetto


const Team = [{
    nome: 'Juve',
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: 'Inter',
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0
}, {
    nome: 'Lazio',
    puntiFatti: 0,
    falliSubiti: 0
}]
let puntiRandom = 0;
let falliRandom = 0;


for (i = 0; i < Team.length; i++) {
    puntiRandom = getRandomInt(10)
    falliRandom = getRandomInt(10)
    Team[i].puntiFatti = puntiRandom;
    Team[i].falliSubiti = falliRandom;
}
console.log(Team);


/**
 * Description placeholder
 *
 * @param {*number} max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}