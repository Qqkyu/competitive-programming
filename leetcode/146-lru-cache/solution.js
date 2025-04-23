/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.list = new DoubleLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const val = this.map.get(key).val;
  this.list.remove(this.map.get(key));
  this.map.set(key, this.list.add(key, val));
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.list.remove(this.map.get(key));
  }
  this.map.set(key, this.list.add(key, value));
  if (this.map.size > this.capacity) {
    const head = this.list.head;
    this.map.delete(head.key);
    this.list.remove(head);
  }
};

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(key, val) {
    const node = { key, val, prev: null, next: null };
    if (this.head) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    return node;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }
}
