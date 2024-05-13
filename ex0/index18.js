let studenti1 = ["Ioana", "Paul", "Ana", "Gabriel", 'Daniel'];

const studenti2 = ["Radu", ...studenti1, "Marius"];

console.log(studenti1);

const listaString = studenti2.join(", ");

console.log("lista este " + studenti2);
console.log("lista este " + listaString);