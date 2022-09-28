var levelOrderBottom = function(root) {
    if(!root) return []

    const queue = [root]
    const result = []

    while (queue.length) {
        let len = queue.length
        result.push(queue.map(node => node.val))

        while (len--) {
            let node = queue.shift()
            if(node.left) queue.push(nide.left)
            if(node.right) queue.push(nide.right)
        }
    }

    return result.reverse()
}