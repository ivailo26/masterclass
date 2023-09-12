/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.*/

function countUniqueValues(arr){
    let uniqueValues = 0;
    let newValue = arr[0];
    if (newValue) {
        uniqueValues++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (newValue !== arr[i]) {
            newValue = arr[i];
            uniqueValues ++;
        }
    }
    console.log(uniqueValues);
    // return uniqueValues;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
