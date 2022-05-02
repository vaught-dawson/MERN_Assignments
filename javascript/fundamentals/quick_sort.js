const quickSort = (arr = [], bound = [0, arr.length - 1]) => {
  if (bound[0] >= bound[1] - 1) return;

  pivotIndex = partitionSort(arr, bound);

  quickSort(arr, [bound[0], pivotIndex - 1]);
  quickSort(arr, [pivotIndex, bound[1]]);
  return arr;
};

const partitionSort = (arr, bound) => {
  const pivotIndex = Math.floor((bound[0] + bound[1]) / 2);
  let [i, j] = [bound[0], bound[1]];
  console.log("Pivot: ", pivotIndex);
  console.log("Bound: ", bound);

  while (i < j) {
    while (arr[i] < arr[pivotIndex]) {
      i++;
    }
    while (arr[j] > arr[pivotIndex]) {
      j--;
    }
    if (i < j) {
      console.log(`Swapping ${arr[i]} with ${arr[j]}`);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return j;
};

let testArr = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];
console.log(quickSort(testArr));
