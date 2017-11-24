function mergeSort(array) {
  var length = array.length;
  if (length < 2) {
    return array;
  }
  else {
    var mid = Math.floor(length/2);
    var array1 = array.slice(0, mid);
    var array2 = array.slice(mid, length);
    return mergeArrays(mergeSort(array1), mergeSort(array2));
  }
}

function mergeArrays(left, right) {
  var sortedArray = [];
  while (left.length && right.length){
    if (left[0] >= right[0]){
      sortedArray.push(right.shift());
    }
    else {
      sortedArray.push(left.shift());
    }
  }
  if (left.length){
    Array.prototype.push.apply(sortedArray,left);
  }else if (right.length){
    Array.prototype.push.apply(sortedArray,right);
  }
  return sortedArray
}

module.exports = mergeSort;
