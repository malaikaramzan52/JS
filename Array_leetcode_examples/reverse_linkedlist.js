class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to reverse the linked list
function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;  // Save next node
        curr.next = prev;      // Reverse the pointer
        prev = curr;           // Move prev forward
        curr = next;           // Move curr forward
    }
    return prev;
}

// Helper function to print the list
function printList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
        result += current.val + " -> ";
        current = current.next;
    }
    result += "null";
    console.log(result);
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

let reversedHead = reverseList(head);

console.log("Reversed List:");
printList(reversedHead);