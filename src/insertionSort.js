function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[j] < arr[i]) {

          let temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp

        }

    }

  }

  return arr

}

console.log(insertionSort([3, 5, 1]))