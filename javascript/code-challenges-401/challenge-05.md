# [Challenge Five Solution Code](./challenge-05.test.js)

## Challenge Description

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Create a Linked List class
  - Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.
  - The class should contain the following methods:

1. insert

- Arguments: value
- Returns: nothing
- Adds a new node with that value to the head of the list with an O(1) Time performance.

2. includes

- Arguments: value
- Returns: Boolean
- Indicates whether that value exists as a Node’s value somewhere within the list.

3.  to string

- Arguments: none
- Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
- Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Write tests to prove the following functionality:

  - Can successfully instantiate an empty linked list
  - Can properly insert into the linked list
  - The head property will properly point to the first node in the linked list
  - Can properly insert multiple nodes into the linked list
  - Will return true when finding a value within the linked list that exists
  - Will return false when searching for a value in the linked list that does not exist
  - Can properly return a collection of all the values that exist in the linked list
