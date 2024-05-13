const studenti = ["Ioana", "Paul", "Ana", "Gabriel", 'Daniel'];

// console.log(studenti.length);

// console.log("cuvant".toUpperCase());
// Afiseaza numele cu majuscule la toti studentii:
// console.log(studenti[1]);

for (let i = 0; i <= studenti.length - 1; i++) {
    let student = studenti[i];
    let nume = student.toUpperCase();
    console.log(nume);
}



