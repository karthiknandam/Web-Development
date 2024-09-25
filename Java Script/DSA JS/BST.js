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

