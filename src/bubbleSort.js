// 升序
function bubbleSort(array) {
  const length = array.length;
  for(let i = 0; i < length - 1; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// 降序
function bubbleSort(array) {
  const length = array.length;
  for(let i = 0; i < length - 1; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j] < array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}