function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let sorted = []

  while (arr.length > 0) {
      let x = findLeastEl(arr)
      sorted.push(x[0])
      arr.splice(x[1], 1)
  }
  return sorted

}


function findLeastEl(arr) {
    let least = arr[0]
    let ind = 0
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < least) {
            least = arr[i]
            ind = i
        }
    }
    return [least, ind]
}

// let testArray = [4, 7, 5, 6, 3, 2, 1]
// console.log(selectionSort(testArray))
