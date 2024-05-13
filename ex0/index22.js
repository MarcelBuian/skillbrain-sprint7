//Returnează numărul de vocale dintr-un șir de caractere (string)
//Creați o funcție care va returna un număr întreg al numărului de 
//vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.

const countVowels = (str) => {
    str = str.toLowerCase();

    const vowels = "aeiou";

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (vowels.includes(el)) {
            count++;
        }
    }

    return count;
}

let str = "Acesta este un string";
console.log("Numarul de vocale din acest string: \n" + str + "\nEste " + countVowels(str));


