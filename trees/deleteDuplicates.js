var deleteDuplicates = function(head) {
    let dummy = new ListNode(-Infinity, head)
    let cur = head
    let prev = dummy

    while (cur) {
        if (cur.val === prev.val) {
            while (cur && cur.val === prev.val) {
                cur = cur.next
            }

            prev.next = cur
        } else {
            prev = cur
            cur = cur.next
        }
    }

    return dummy.next
}