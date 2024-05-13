

// conditie => bool[true / false]

// Infitite Loop = >repetitie inifinita
// CTRL + C (iesim)

const factorial = (n) => {
    let counter = 1;
    let result = 1;

    while (counter <= n) {
        result = result * counter;
        counter = counter + 1;
    }

    return result;
}

const rez = factorial(3);
console.log(rez);

