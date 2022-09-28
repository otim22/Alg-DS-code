var preorderTraversal = function(root) {
    // Method 1
    // if(!root) return []

    // const stack = [root]
    // const result = []

    // while (stack.length) {
    //     let node = stack.pop()        

    //     result.push(node.val)
    //     if(node.right) stack.push(node.right)
    //     if(node.left) stack.push(node.left)
    // }

    // return result

    // Method 2
    if(!root) return []
    const result = []

    const preorder = (node) => {
        if(!node) return null

        result.push(node.val)
        if(node.left) preorder(node.left)
        // For inorder move line 25 to here result.push(node.val)
        if(node.right) preorder(node.right)
        // For postorder move line 25 to here result.push(node.val)
    }

    preorder(root)
    return result
}