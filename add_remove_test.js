import BinarySearchTreeSet from "./binary-search-tree-set.js";

const list = [52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]
const A = new BinarySearchTreeSet(list);

console.log("Original:")
console.log(A.toStringFormat())

console.log("Remove Test:")
A.remove(52)
console.log(A.toStringFormat())
