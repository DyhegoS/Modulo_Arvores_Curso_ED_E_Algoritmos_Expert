export default class BinarySearchTreeSet{
    #size;
    #root;

    constructor(){
        this.#size = 0;
        this.#root = new Node(null, null);
    }

    size(){
        return this.#size;
    }

    isEmpty(){
        return this.#size === 0;
    }

    #findKeyLocation(node, key){
        while(!node.isSentinel()){
            if(key === node.key){
                return node;
            }
            else if(key < node.key){
                node = node.left;
            }
            else{
                node = node.right;
            }
        }
        return node;
    }
}


class Node{
    constructor(key, parent){
        this.key = key;
        this.parent = parent;
        this.left = this.right = null;
    }

    isSentinel(){
        return this.key === null; 
    }
}