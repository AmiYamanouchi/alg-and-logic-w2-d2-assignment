//Ami, Marina, MarinaY
// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]
const binarySearch = function(arr, target) {

        let first = 0;
        let last = arr.length - 1;
        let position = -1;
        let found = false;
        let middle;

        while (found === false && first <= last) {
            middle = Math.floor((first + last)/2);
            if (arr[middle] == target) {
                found = true;
                position = middle;
            } else if (arr[middle] > target) {
                last = middle - 1;
            } else {
                first = middle + 1;
            }
        }

        return `Target is index ${position}`;
    
    }
        console.log(binarySearch(testArray, 19));
        console.log(binarySearch(testArray, 12));
        console.log(binarySearch(testArray, 26));