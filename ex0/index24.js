
const arr1 = [1, -5, 20, -34, 16, 29, 36, -4, "ana"];

const arr2 = arr1.map(function (value) {
    if (typeof value !== 'number') {
        throw "lista trebuie sa contina doar numere";
    }
    return value >= 0 ? value : null;
});

const arr3 = arr2.filter(function (value) {
    return value != null;
});


let numerePozitive = 0;
arr1.forEach(function (value) {
    if (value > 0) {
        numerePozitive++;
    }
});

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(numerePozitive);