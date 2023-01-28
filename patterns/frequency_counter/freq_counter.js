/*
    this patterns uses objects/sets to collect values/frequencies of values. This can often avoid the need of nested loops operations with arrays/strings
*/


// NAIVE SOLUTION

function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr1[i] ** 2) {
                arr2.splice(arr1[i], 1)
            }
        }
    }

    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))

// tc -> O(N^2), sc -> O(1)


// OPTIMIZED 



function same(arr1, arr2) {
    let frequency_counter1 = {}
    let frequency_counter2 = {}


    // iterate the array, and add the elements into the frequency_counter objects, if appeared before add 1.
    for (val of arr1) {
        frequency_counter1[val] = (frequency_counter1[val] || 0) + 1;
    }

    for (val of arr2) {
        frequency_counter2[val] = (frequency_counter2[val] || 0) + 1;
    }


    // iterate the keys of the object (frequency)
    for (let key in frequency_counter1) {
        // {1: 1, 2: 2, 3: 1}
        if (!(key ** 2 in frequency_counter2)) {
            return false;
        }

        if (frequency_counter2[key ** 2] !== frequency_counter1[key]) {
            return false;
        }
    }

    return true;

}


console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))