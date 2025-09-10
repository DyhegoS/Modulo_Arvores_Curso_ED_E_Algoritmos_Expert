import BinarySearchTreeSet from "./binary-search-tree-set.js";

const A = new BinarySearchTreeSet([1, 2, 3, 4, 5]);
const B = new BinarySearchTreeSet([4, 5, 6, 7, 8]);

console.log("size: " + A.size());
console.log("isEmpty: " + A.isEmpty());

console.log("\nA: " + A)
console.log("\nB: " + B)

let C = A.union(B);
console.log("UNION: " + C);

C = A.intersection(B);
console.log("Intersection: " + C);

C = A.difference(B);
console.log("Difference: " + C);

