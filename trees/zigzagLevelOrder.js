var zigzagLevelOrder = function(root) {
    if(!root) return []

    const queue = [root]
    const result = []
    let count = 0

    while (queue.length) {
        let len = queue.length

        if(count % 2 === 0) result.push(queue.map(node => node.val))
        else result.push(queue.map(node => node.val).reverse())
        count++

        while (len--) {
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    return result
}