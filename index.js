function bruteForceTwoSum(array, sum) {
    let sumArray = [];
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = i; j < array.length; ++j) {
            if (i !== j && array[i] + array[j] === sum) {
                let arr = [array[i],array[j]];
                sumArray.push(arr);
            }
        }
    }
    return sumArray;
}

function binarySearchTwoSum(array, sum) {
    array.sort((a,b)=> a-b);
    let sumArray = [];
    for (let i = 0; i < array.length-1; ++i) {
        let left = i+1;
        let right = array.length-1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (array[i] + array[mid] === sum) {
                sumArray.push([array[i],array[mid]]);
                break;
            }
            if (array[i] + array[mid] > sum) {
                right = mid;
            }
            else {
                left = mid;
            }
        } 
    }
    return sumArray; 
}

function binaryMatch(array,missingNumber){
    return !!array.filter(num => num === missingNumber);
}

function hashTwoSum(array, sum) {
    let hash = {};
    let sumArray = [];
    for (let i = 0; i < array.length; ++i) {
        let num = array[i];
        let complementNum = sum - num;
        if (hash[complementNum]) {
            sumArray.push([complementNum, num]);
        }
        else {
            hash[num] = 1;
        }
    }
    return sumArray; 
}