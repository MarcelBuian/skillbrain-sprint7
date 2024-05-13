const printSum = function (arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

const printSumDoi = function (arr) {
    let suma = 0;
    arr.map((elem) => {
        suma += elem;
    });
    return suma;
}

const arr1 = [1, -5, 20, -34, 16, 29, 36, -4];
const arr2 = [3.45, -2.68, 356, -75.96, 64, 19.28];

console.log(printSum(arr1));
console.log(printSum(arr2));

console.log(printSumDoi(arr1));
console.log(printSumDoi(arr2));