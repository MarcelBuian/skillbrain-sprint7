function inversare(numere) {
    return [...numere].reverse();
}

const sirDeNumere = [2, 5, 44, 57, 79, 16.8];
const sirInversat = inversare(sirDeNumere);

console.log("Lista originala: ", sirDeNumere);
console.log("Lista inversata: ", sirInversat);

