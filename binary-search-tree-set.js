export default class BinarySearchTreeSet {
    #size;
    #root;

    constructor(collection = []) {
        this.#size = 0;
        this.#root = new Node(null, null);
        this.addAll(collection);
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    addAll(collection) {
        collection.forEach(item => this.add(item));
    }

    add(key) {
        if (key === null) {
            throw new Error("Chave não pode ser nula!");
        }

        if (this.isEmpty()) {
            this.#root = new Node(key, null);
            this.#root.left = new Node(null, this.#root);
            this.#root.right = new Node(null, this.#root);
            this.#size++;
            return;
        }

        let node = this.#findKeyLocation(this.#root, key);

        if (node.isSentinel()) {
            let parent = node.parent;
            let newNode = new Node(key, parent);
            newNode.left = new Node(null, newNode);
            newNode.right = new Node(null, newNode);

            if (node === parent.left) {
                parent.left = newNode;
            }
            else if (node === parent.right) {
                parent.right = newNode;
            }

            this.#size++;
        }
    }

    #findKeyLocation(node, key) {
        while (!node.isSentinel()) {
            if (key === node.key) {
                return node;
            }
            else if (key < node.key) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }
        return node;
    }

    constains(key){
        const node = this.#findKeyLocation(this.#root, key);
        return !node.isSentinel()
    }

    keys() {
        let keysList = [];
        this.#collectKeys(this.#root, keysList);
        return keysList;
    }

    #collectKeys(node, keysList) {
        if(!node.isSentinel()){
            this.#collectKeys(node.left, keysList);
            keysList.push(node.key);
            this.#collectKeys(node.right, keysList);
        }
    }

    toString(){
        return this.keys().toString();
    }

    toStringFormat(){
        let sb = [];
        this.#toStringFormatHelper(this.#root, 0, sb);
        return sb.join("");
    }

    #toStringFormatHelper(node, depth, sb){
        if(!node.isSentinel()){
            this.#toStringFormatHelper(node.right, depth + 1, sb);
            let spaces = (depth > 0) ? "  ".repeat(depth) + "--" : "";
            let parent = (depth > 0) ? node.parent.key.toString() : "";
            sb.push(`${spaces}(${node.key})${parent}\n`);
            this.#toStringFormatHelper(node.left, depth + 1, sb);
        }
    }
}


class Node {
    constructor(key, parent) {
        this.key = key;
        this.parent = parent;
        this.left = this.right = null;
    }

    isSentinel() {
        return this.key === null;
    }
}