var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val)
    if(!root) return newNode

    let cur = root
    let prev = null

    while (cur) {
        if (val > cur.val) {
            prev = cur
            cur = cur.right
        } else {
            prev = cur
            cur = cur.left
        }
    }

    if (val < prev.val) prev.left = newNode
    else prev.right = newNode

    return root
}