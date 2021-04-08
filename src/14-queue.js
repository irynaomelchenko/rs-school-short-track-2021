/* eslint-disable prefer-destructuring */
const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.arrOfValues = [];
  }

  get size() {
    return this.arrOfValues.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.arrOfValues.push(element);
    return this.head;
  }

  dequeue() {
    this.head = this.head.next;
    return this.arrOfValues.shift();
  }
}

module.exports = Queue;
