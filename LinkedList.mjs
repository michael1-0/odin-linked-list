import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    if (this.head !== null) {
      let node = this.head;
      while (true) {
        if (node.next === null) {
          node.next = new Node(data);
          break;
        }
        node = node.next;
      }
    } else {
      this.head = new Node(data);
    }
  }

  prepend(data) {
    if (this.head !== null) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      this.head = new Node(data);
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let count = 1;
    let node = this.head;
    while (true) {
      if (node.next === null) {
        break;
      }
      count++;
      node = node.next;
    }

    return count;
  }

  getHead() {
    if (this.head === null) {
      return "Cannot get head: empty list";
    }
    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return "Cannot get tail: empty list";
    }

    let node = this.head;
    while (true) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  at(index) {
    if (this.head === null) {
      return "Cannot get node at index " + index + ": empty list";
    }

    if (index >= this.size()) {
      return "Input exceeds size";
    }

    let count = 0;
    let node = this.head;
    while (count < this.size()) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
  }

  pop() {
    if (this.head === null) {
      return "Cannot pop node: empty list";
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let node = this.head.next;
    while (true) {
      if (node.next === null) {
        prevNode.next = null;
        break;
      }
      prevNode = node;
      node = node.next;
    }
  }

  contains(data) {
    if (this.head === null) {
      return "Cannot find data: empty list";
    }

    let node = this.head;
    let foundData = false;
    while (node) {
      if (node.data === data) {
        foundData = true;
      }
      node = node.next;
    }

    return foundData ? true : false;
  }

  find(data) {
    if (this.head === null) {
      return "Cannot find index: empty list";
    }

    let node = this.head;
    let found = false;
    let index = 0;
    while (node) {
      if (node.data === data) {
        found = true;
        break;
      }
      node = node.next;
      index++;
    }

    return found ? index : null;
  }

  insertAt(index, data) {
    if (this.head === null) {
      console.log("Cannot insert: empty list");
      return;
    }

    if (index < 0 || index >= this.size()) {
      console.log(
        `Invalid index: value must be from 0 to and including ${
          this.size() - 1
        }`
      );
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size() - 1) {
      this.append(data);
      return;
    }

    let currentIndex = 1;
    let prevNode = this.head;
    let node = this.head.next;
    while (true) {
      if (currentIndex === index) {
        const newNode = new Node(data);
        prevNode.next = newNode;
        newNode.next = node;
        break;
      }

      prevNode = node;
      node = node.next;
      currentIndex++;
    }
  }

  removeAt(index) {
    if (this.head === null) {
      console.log("Cannot remove: empty list");
      return;
    }

    if (index < 0 || index >= this.size()) {
      console.log(
        `Invalid index: value must be from 0 to and including ${
          this.size() - 1
        }`
      );
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentIndex = 1;
    let prevNode = this.head;
    let node = this.head.next;
    while (true) {
      if (currentIndex === index) {
        const tempNode = node.next;
        node = null;
        prevNode.next = tempNode;
        break;
      }
      prevNode = node;
      node = node.next;
      currentIndex++;
    }
  }

  print() {
    if (this.head === null) {
      console.log("Cannot print: empty list");
      return;
    }

    let string = "";

    let node = this.head;
    while (true) {
      string = string + `( ${node.data} ) -> `;

      if (node.next === null) {
        string = string + "null";
        break;
      }
      node = node.next;
    }

    console.log(string);
  }
}
