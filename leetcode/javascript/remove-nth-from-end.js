/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_2 = function (head, n) {
    var first = head;
    var second = head;
    for (var i = 0; i < n; i++) {
        second = second.next;
    }
    if (second != null) {
        while (second.next != null) {
            first = first.next;
            second = second.next;
        }
    }
    if (second != null && first.next != null) {
        first.next = first.next.next;
    } else {
        head = head.next;
    }
    return head;
};

var removeNthFromEnd_1 = function (head, n) {
    var first = head;
    var second = head;
    for (var i = 0; i < n; i++) {
        second = second.next;
    }
    if (second != null) {
        while (second.next != null) {
            first = first.next;
            second = second.next;
        }
    }
    if (second != null && first.next != null) {
        first.next = first.next.next;
    } else {
        head = head.next;
    }
    return head;
};