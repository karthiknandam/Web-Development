class node{
    constructor(val){
        this.first = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const newNode = new node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return false;
        const removed = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        
        this.first = this.first.next;
        this.size--;
        return removed.first;
    }
}