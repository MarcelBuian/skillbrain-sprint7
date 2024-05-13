function vocale(litere) {
    let numarVocale = 0;

    for (let i = 0; i < litere.length; i++) {
        const vocale = "aeiou";

        for (let j = 0; j < vocale.length; j++) {
            if (litere[i] === vocale[j]) {
                numarVocale++;
                break;
            }
        }
    }

    return numarVocale;
}

const paragraf = "oare cate vocale sunt in acest paragraf?";
const nrvocale = vocale(paragraf);

console.log(nrvocale);