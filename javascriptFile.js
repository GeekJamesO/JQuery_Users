function BubbleSort(arr) {
  for (var front = 0; front < arr.length - 1; front++) {
    for (var back = front + 1; back < arr.length ; back++) {
      console.log("front = " + front + "; back = " + back + ";");
      if (arr[front] > arr[back] ) {
        var temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort([2,4,6,8,10,12,15,13,17,19,1]) );
