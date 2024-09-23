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
  insert(val, index) {
    // finding the previous one value in order to search the index value which is
    // finding the geting the index - 1 value to set the index value and next value correspoding to it:

    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new node(val);
    const value = this.get(index - 1);
    newNode.next = value.next;
    value.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const getVal = this.get(index - 1);
    const value = getVal.next;
    getVal.next = value.next;
    this.length--;
    return value;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
  rev() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}
const list = new SinglylinkedList();
list.push(1);
list.push(2);
list.push(3);
