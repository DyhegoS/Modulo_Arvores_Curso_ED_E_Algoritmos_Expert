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

    add(key){
        if(key === null){
            throw new Error("Chave não pode ser nula!");
        }

        if(this.isEmpty()){
            this.#root = new Node(key, null);
            this.#root.left = new Node(null, this.#root);
            this.#root.right = new Node(null, this.#root);
            this.#size++;
            return;
        }

        let node = this.#findKeyLocation(this.#root, key);

        if(node.isSentinel()){
            let parent = node.parent;
            let newNode = new Node(key, parent);
            newNode.left = new Node(null, newNode);
            newNode.right = new Node(null, newNode);

            if(node === parent.left){
                parent.left = newNode;
            }
            else if(node === parent.right){
                parent.right = newNode;
            }

            this.#size++;
        }
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