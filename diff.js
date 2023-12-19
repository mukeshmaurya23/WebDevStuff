
function findDiff(arr1, arr2) {
  let updated = 0, added = 0, removed = 0;

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        found = true;
        updated++;
        break;
      }
    }
    if (!found) {
      added++;
    }
  }
  removed = arr1.length - updated;
  return {
    updated,
    added,
    removed
  };
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let diff = findDiff(arr1, arr2);

console.log(diff);
