function numarVocale(sir) {
    const vocale = sir.match(/[aeiou]{1}/gi);
    if (vocale === null) {
        return 0;
    }
    return vocale.length;
}
const count = "Aici se gasesc cateva vOcalE";
console.log(numarVocale(count)); 