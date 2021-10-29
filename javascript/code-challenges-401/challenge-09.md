# Reverse a Linked List

## Feature Tasks'

- Ask the candidate to write a function to reverse a Singly Linked List.

- Avoid utilizing any of the built-in methods available in your language.

- Attempt to guide the candidate to an in-place solution (i.e. avoid creating a copy of the Linked List)

This problem can be approached in several ways:
Iterating over the linked list and storing a reference to a current node, its previous node, and its next node.
In every iteration, after the next node is stored, the current’s node next pointer is pointed at the stored reference to the previous node.

## Example

- Input | Output

  - head->[3]->[2]->[1] | head->[1]->[2]->[3]
  - head->['a']->['b']->['c'] | head->['c']->['b']->['a']

## [Solution Code](challenge-09.test.js)