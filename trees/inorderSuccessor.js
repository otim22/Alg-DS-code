var inorderSuccessor = function(root, p) {
    // Check if p has right subtree
    if (p.right) {
        let cur = p.right
        let prev = null

        while(cur) {
            prev = cur
            cur = cur.left
        }

        return prev
    }

    // If p does not have a right subtree
    let cur = root
    let prev = null

    while (cur !== p) {
        if (p.val < cur.val) {
            prev = cur
            cur = cur.left
        } else {
            cur = cur.right
        }
    }

    return prev
}