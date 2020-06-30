function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  sortedArr = []
  while (arr.length > 0) {
    let smallest = Math.min(...arr)
    sortedArr.push(smallest)
    let index = arr.indexOf(smallest) 
    arr.splice(index, 1)
  }

  return sortedArr

}

console.log(selectionSort([3, 5, 1]))