var totalNQueens = function(n) {
    // global result
    var result = []

    const dfs = (i, n, slate) => {
        // backtracking case
        let lastQ = i - 1

        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            // col conflict
            if (slate[prevQ]) return

            // if dia conflict
            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])

            if(rowDiff === colDiff) return
        }

        // base case
        if(i === n) {
            result.push(slate.slice())
            return
        }

        // dfs recursive case
        for (let col = 0; col < n; col++) {
            slate.push(col)
            dfs(i + 1, n, slate)
            slate.pop()
        }
    }

    dfs(o, n, [])
    return result.length
}
