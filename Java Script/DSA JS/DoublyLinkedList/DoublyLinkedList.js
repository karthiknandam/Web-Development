class node {
    constructor(val){
        this.head = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }
    pop(){
        if(!this.tail) return false;
                const tail = this.tail;
        if(this.length === 1 ){
            this.head = null;
            this.tail = null;
        }
        else{
        this.tail = tail.prev;
        this.tail.next = null; 
        tail.prev = null;
        }
        this.length--;
        return tail;
    }
    shift(){
        if(!this.head) return false;
        if(this.length === 1) return this.pop();
        const head = this.head;
        this.head = head.next;
        this.head.prev = null;
        head.next = null;
        this.length--;
        return head;
    }
    unShift(val){
        if(!this.head) return this.push(val);
        const newNode =  new node(val);
        this.head.prev = newNode;
        // here we set the prev of current head element to the newnode in order to store the value
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return true;
    }
    get(index){
        // Gai gpt for optimising the code;
        if(index < 0 || index >= this.length) return false;
        let current;
        const middle = Math.floor((this.length) / 2);
        console.log(middle);
        if(index <= middle){
            current = this.head;
            for(let i = 0 ; i < index ; i++){
                current = current.next;
            }
        } 
        else{
            current = this.tail;
            for(let i = this.length - 1 ; i > index ; i--){
                current = current.prev
            }
        }
        return current;
    }
    set(index , value){
        if(index < 0 || index >= this.length) return false;
        const getVal = this.get(index);
        getVal.head = value;
        return true;
    }
    insert(index , val){
        if(index , 0 || index > this.length) return false;
        if(index === 0) return !!this.unShift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new node(val);
        const getPrev = this.get(index -1);
        newNode.prev = getPrev;
        getPrev.next.prev = newNode;
        newNode.next = getPrev.next;
        getPrev.next = newNode;
        this.length++;
        return this;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        const getVal = this.get(index - 1);
        const removeItem = getVal.next;
        removeItem.next.prev = getVal;
        getVal.next = removeItem.next;
        this.length--;
        removeItem.next = null;
        removeItem.prev = null;
        return removeItem;
    }
}
const list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)
list.push(11)
list.push(12)
