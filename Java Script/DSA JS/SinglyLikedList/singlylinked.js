class node {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

class SinglylinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return newTail;
  }
  shift() {
    if (!this.head) return undefined;
    const value = this.head;
    this.head = value.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return value;
  }
  unShift(val) {
    let newVal = new node(val);

    if (!this.head) {
      this.head = newVal;
      this.tail = this.head;
    } else {
      newVal.next = this.head;
      this.head = newVal;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val >= this.length || val < 0) return false;
    let count = 0;
    let value = this.head;
    while (val !== count) {
      value = value.next;
      count++;
    }
    return value;
  }
  set(val, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.head = val;
      return true;
    }
    return false;
  }
}
const list = new SinglylinkedList();
list.push("KART");
list.push("Nan");
list.push("Dam");
