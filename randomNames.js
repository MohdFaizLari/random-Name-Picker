let arr = ["Ram", "Shyam", "Mohan", "Narayan", "Akshat", "Hari", "Carry"];

function getIndex(arr) {
  let maxLimit = arr.length;
  let index = Math.floor(Math.random() * maxLimit);
  return index;
}

let index = getIndex(arr);
let result = arr[index];
console.log(result);
