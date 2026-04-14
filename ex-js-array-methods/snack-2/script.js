const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Stessa cosa della task1 ma qui ho un array di oggetti e mi serve l'elemento name

people.forEach(function(nomeDiPersona) {
  console.log(nomeDiPersona.name)
});