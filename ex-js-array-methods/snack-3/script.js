const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// qui userò .map e chiederò un return perchè per .map è obbligatorio
// al return aggiungo +1

let nuovoArray = numbers.map (function(numero) {
    return (numero +1)
});

console.log(nuovoArray);