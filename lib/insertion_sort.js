function insertionSort(array) {
  for (var i = 0; i < array.length; i ++) {
    var currentVal = array[i];
    var position = i;
    while (position > 0 && array[position-1] > currentVal){
      array[position] = array[position-1];
      position --;
    }
    array[position] = currentVal;
  }
  return array;
}

module.exports = insertionSort;
