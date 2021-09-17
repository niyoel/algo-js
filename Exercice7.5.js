const points = [40, 100, 1, 5, 25, 10];

function sortArray(array) {
    var temp = [];
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[i] < array[j]) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
        return array;
    }
}

console.log(sortArray([8, 6, 0, 4, 1, 7, 3, 5, 9, 6, 11, 2, 10]));