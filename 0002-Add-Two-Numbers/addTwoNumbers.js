/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0);
    let pos = head;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            sum = sum - 10;
            carry = 1;
        }

        pos.next = new ListNode(sum);
        pos = pos.next;

        sum = carry;
        carry = 0;
    }

    return head.next;
};