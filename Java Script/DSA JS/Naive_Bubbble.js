function takeval(arr){
    for(let i = arr.length-1 ; i > 0 ; i--){
        for(let j = i-1 ; j >= 0 ; j--){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(takeval([64, 34, 25, 12, 22, 11, 90, 3, 87, 42, 55, 1, 100, 76, 8, 31, 19, 70, 95, 50]));