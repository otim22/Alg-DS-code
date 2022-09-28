const isPalindrome = (s, start, end) => {
    while (start < end) {
        if (s[start] !== s[end]) return false
        start++
        end--
    }

    return true
}

var palindromePartition = function(i) {
    // global result
    const result = []

    // dfs recursive helper
    const dfs = (i, s, slate) => {
        // base case
        if (i === s.length) {
            result.push(slate.slice())
            return
        }

        // dfs recursive case
        for (let j = i; j < s.length; j++) {
            if(isPalindrome(s, i, j)) {
                slate.push(s.slice(i, j + 1))
                dfs(j + 1, s, slate)
                slate.pop()
            }
        }
    }
}