// Method 1 with isValid helper function
const isValid = (str) => {
    const stack = []
    let i = 0
    let len = str.length

    while (i < len) {
        let curParen = str[i]
        stack.push(curParen)

        let open = stack[stack.lenth - 2]
        let closed = stack[stack.lenth - 1]

        if (open + closed === '()') {
            stack.pop()
            stack.pop()
        }
        i++
    }

    return stack.length === 0
}

var generateParenthesis = function(n) {
    // global result
    const result = []

    // dfs recursive helper
    const dfs = (i, n, slate) => {
        if (i === n * 2) {
            if (isValid(slate.join(''))) {
                result.push(slate.join(''))
            }
            return
        }

        // dfs recursive case
        // add open paren
        slate.push('(')
        dfs(i + 1, n, slate)
        slate.pop()

        // add close paren
        slate.push(')')
        dfs(i + 1, n, slate)
        slate.pop()
    }

    dfs(0, n, [])
    return result
}


// Method 2 without isValid helper function more efficient
var generateParenthesis = function(n) {
    // global result 
    const result = []

    // dfs recursive helper
    const dfs = () => {
        // backtracking case
        if(oCount > n) return
        if(cCount > oCount) return

        // base case
        if (i === n * 2) {
            result.push(slate.join(''))
            return
        }

        // dfs recursive case
        // add open paren
        slate.push('(')
        dfs(i + 1, n, slate, oCount + 1, cCount)
        slate.pop()

        // add closed paren
        slate.push(')')
        dfs(i + 1, n, slate, oCount, cCount + 1)
        slate.pop()
    }
}