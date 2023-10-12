/* ---description
Create a queue data structure. the queue should be a class with methods 'add' and 'remove'. adding to the queue should store an element until it is removed
--- Example 
const q = new Queue();
q.add(1);
q.remove(); return 1; */

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
}

const q = new Queue();
q.add("huy");
q.add(1);
console.log(q.remove());
