var deleteNode = function(node) {
    let next = node.next.next
    node.val = node.next.val
    node.next = next
}