function ArrayAvg(myArray) {
    let i = 0,
        summ = 0,
        ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}
let myArray = [1, 5, 2, 3, 7];
let a = ArrayAvg(myArray);
console.log(a)

function min(array) {
    let minimum = array[0];
    for (let element of array) {
        if (element < minimum)
            minimum = element;
    }
    return (minimum)
}
let array = [30, 20, 40, 33];
console.log(min(array));

function max(arrayy) {
    let maximum = arrayy[0];
    for (let element of arrayy) {
        if (element > maximum)
            maximum = element;
    }
    return (maximum)
}
let arrayy = [30, 20, 40, 33];
console.log(max(arrayy));