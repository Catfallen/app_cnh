function binarySearchInsertIndex(arr, value, key) {
  let low = 0;
  let high = arr.length;

  const target = String(value).toLowerCase();

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = String(arr[mid][key]).toLowerCase();

    if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function insertSorted(arr, obj, key) {
  // normaliza o email antes de inserir
  obj[key] = String(obj[key]).toLowerCase();

  const index = binarySearchInsertIndex(arr, obj[key], key);
  arr.splice(index, 0, obj);
}

function binarySearch(arr, value, key) {
  let low = 0;
  let high = arr.length - 1;

  const target = String(value).toLowerCase();

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = String(arr[mid][key]).toLowerCase();

    if (midValue === target) return mid;
    if (midValue < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

module.exports = {
  binarySearch,
  insertSorted
};
