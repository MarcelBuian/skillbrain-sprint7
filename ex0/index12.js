const studenti = ["Ioana", "Paul", "Ana", "Gabriel", 'Daniel', 'Marius', "Maria"];

este_nume_de_fata = (nume) => nume.slice(-1) === 'a';

const studentiFete = studenti.filter(este_nume_de_fata);


console.log(studenti);
console.log(studentiFete);

