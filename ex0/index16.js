let studenti1 = ["Ioana", "Paul", "Ana", "Gabriel", 'Daniel'];

const studenti2 = studenti1.slice();
const studenti3 = studenti1;
const studenti4 = [...studenti1];

studenti2.reverse();
studenti3.pop();


console.log(studenti1);
console.log(studenti2);
console.log(studenti3);
console.log(studenti4);


let a = "Ana";
const b = a;
a = a + "AreMere";

console.log(a, b);