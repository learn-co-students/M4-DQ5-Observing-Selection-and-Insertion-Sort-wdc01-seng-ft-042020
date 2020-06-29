// function selectionSort(arr) {
//   // your code here!
//   // arr is an array of unsorted integers (i.e. [3, 5, 1])

// let originalArray = [...arr]


// let newArray = aoriginalArray.forEach(num => {
// minElement = Math.min(...originalArray)
// })

// console.log(newArray)


// }





let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
      }
  }
  // return arr;
  console.log(arr)
}

originalArray = [15,22,33,45,5]
selectionSort(originalArray)
