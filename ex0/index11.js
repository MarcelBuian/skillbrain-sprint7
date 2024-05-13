const studenti = ["Ioana", "Paul", "Ana", "Gabriel", 'Daniel', 'Marius', "Maria"];

function este_nume_de_fata(nume) {
    return nume.slice(-1) === 'a';
}

const studentiFete = studenti.filter(este_nume_de_fata);


console.log(studenti);
console.log(studentiFete);

