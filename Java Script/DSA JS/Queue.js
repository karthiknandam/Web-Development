class node{
    constructor(val){
        this.first = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(val){
        const newNode = new node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    deQueue(){
        if(!this.first) return false;
        const removed = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removed;
    }
}
const queue = new Queue();
