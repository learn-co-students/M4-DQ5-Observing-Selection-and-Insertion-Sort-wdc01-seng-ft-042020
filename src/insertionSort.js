function insertionSort(arr) {
    // for every item in the collection
    // check if the previous item is greater than the current item
    // if greater, the current item is not in place: swap it with the previous item
    // repeat this process until the item is in the proper place
    // only then move on to the next item in the collection
    let greater
    let lesser
    for (let i = 1; i < arr.length; i+=1) {
        if (arr[i] < arr[i - 1]) {

            lesser = arr[i]
            greater = arr[i - 1]
            arr[i - 1] = lesser
            arr[i] = greater
            i -= 2

        }

    }
    return arr
}

// let testArray = [4, 7, 5, 6, 3, 8, 9, 0, 2, 4, 2, 1]
// console.log(insertionSort(testArray))
