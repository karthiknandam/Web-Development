class node {
    constructor(val){
        this.value = val;
        this.left=  null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(val) {
        const newNode = new node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
       // Remember this only runs if the value returnd either this will be in the infinite loop;
        let current = this.root;
        while(true){
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else{
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    search(val){
        
        if(!this.root) return false;
        let current = this.root;
        while(current){
            if(val === current.value) return current;
            if(val > current.value) current = current.right;
            else current = current.left;
        }
        return false;
        
    }
    BFS() {
        let current = this.root ;
          let  queue = [] ;
            let Data = [];
        queue.push(current);
        while(queue.length){
            current = queue.shift();
            Data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return Data;
    }
    DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
const tree = new BST();
tree.insert(21);
tree.insert(28);
tree.insert(41);
tree.insert(40);
tree.insert(39);
tree.insert(12);
tree.insert(10);
tree.insert(8);
tree.insert(9);

