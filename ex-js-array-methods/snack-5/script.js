const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// qui userò filter perchè non devo modificare nulla.
// i numeri dovranno essere quelli % 2 === 0
// vuole un return che è sempre true o false

let arrayCheContieneSolamenteNumeriPari = nums.filter (function (number) {
    if (number % 2 === 0) 
        return true
});



/* // potrei scriverlo anche così ma mi confonde veramente le idee:
let arrayCheContieneSolamenteNumeriPari = nums.filter (function (number) {
return number % 2 === 0 
}); */

console.log(arrayCheContieneSolamenteNumeriPari);



