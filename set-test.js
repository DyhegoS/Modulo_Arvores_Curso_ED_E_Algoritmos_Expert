import BinarySearchTreeSet from "./binary-search-tree-set.js";

const A = new BinarySearchTreeSet([52, 17, 67]);

console.log("size: " + A.size());
console.log("isEmpty: " + A.isEmpty());

// console.log("A contains 83? " + A.constains(83))
// console.log("A contains 58? " + A.constains(58))

console.log(A.toString())

console.log(A.toStringFormat())

