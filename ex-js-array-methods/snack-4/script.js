const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// come per la task 3, inizialmente l'avevo anche fatta bene con return giusto,
// non me la stampava e non capivo perchè, ho provato altro, spoiler: non avevo fatto 
// console.log

let nuovoArray = posts.map(function(name) {
  return name.author
});

console.log(nuovoArray);