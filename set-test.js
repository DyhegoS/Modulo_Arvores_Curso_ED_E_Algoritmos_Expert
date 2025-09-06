import BinarySearchTreeSet from "./binary-search-tree-set.js";

const A = new BinarySearchTreeSet([52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]);
const B = new BinarySearchTreeSet([11, 14, 17, 23, 26,31, 33, 46, 52, 55, 67, 83]);

console.log("size: " + A.size());
console.log("isEmpty: " + A.isEmpty());

console.log("Keys A: ")
console.log(A.keys())
console.log("Keys B: ")
console.log(B.keys())