function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let length = arr.length;
  for(let i = 1; i < length; i++) {
    let key = arr[i]
    let index = i-1;
    while(index >= 0 && arr[index] > key){
      
     arr[index + 1 ] = arr[index] 
      index = index - 1
    }
    arr[index + 1] = key;
  } console.log(arr)
}
originalArray = [15,22,33,45,5]
insertionSort(originalArray)
