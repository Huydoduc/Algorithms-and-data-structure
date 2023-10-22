/*--Directions
Implement a Queue datastructure using two stacks. Do not create an array inside of the "queue" class. Queue should implement the methods "add", "remove",  "peek" 
for a remider on what each method does, look back at the queue exercise*/
//-- examples
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek(); //return 1
// q.remove(); //return 1
// q.remove(); return 2

const Stack = require("../stack/stack.js");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

const newq = new Queue();
newq.add(1);
newq.add(2);
console.log(newq);
console.log(newq.peek());
