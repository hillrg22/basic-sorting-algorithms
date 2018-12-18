// Write a swapping function

function swap(array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  return array
}

// Implement Bubble Sort

function bubbleSort(array) {
  var done = false;

  while(!done) {
    done = true;
    for (let i=1; i< array.length; i++){
      if (array[i-1] > array[i]){
        done = false;
        swap(array, (i-1), i)
      }
    }
  }
  return array
}

// Implement Selection Sort

function selectionSort(array) {
let currentMinimum = array[0];
let minIndex = 0;
let n = 0;

  while(n < array.length-1){
    // console.log("n =", n, "array.length -1: ", (array.length-1))
    for (let i = n; i < array.length; i++){
      if(array[i]< currentMinimum){
        currentMinimum = array[i]
        minIndex = i
      }
    }
    swap(array, n, minIndex)
    n++
    currentMinimum = array[n]
    minIndex = n


  }

  return array
}

// Sample data
const arraySample = [5, 8, 13, 1, 9, 43, 19, 33]


bubbleSort(arraySample)
console.log(selectionSort(arraySample))

// console.log(swap(arraySample, 1,5))
