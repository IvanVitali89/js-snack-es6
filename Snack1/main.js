//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

// ciclo lungo numero di bici, prende primo valore e lo salvo in var, se è più grande del valore dopo rimane in variabile altrimenti lo sostituisce, stampa valore

const bicycle = [{
    nome: 'bici1',
    peso: 15
}, {
    nome: 'bici2',
    peso: 16
}, {
    nome: 'bici3',
    peso: 5
}, {
    nome: 'bici4',
    peso: 32
}, {
    nome: 'bici5',
    peso: 25
}]


let pesoMinore = bicycle[0].peso;



for (let i = 1; i < bicycle.length; i++) {
    if ( pesoMinore > bicycle[i].peso)
        pesoMinore = bicycle[i].peso
} 
console.log(pesoMinore);
