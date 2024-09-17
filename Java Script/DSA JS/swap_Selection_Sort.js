// we use the j value to i +1 beacuse we basicaly need the next items not the sorted items of the values;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
    }
    return arr;
}

console.log(selectionSort([2, 3, 1, 5, 6]));