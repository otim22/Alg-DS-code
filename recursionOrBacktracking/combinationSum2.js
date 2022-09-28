var combinationSum2 = function(candidates, target) {
    // global result
    const result = []

    // sort input
    candidates.sort((a, b) => a - b)

    // dfs recursive helper
    const dfs = (i, candidates, target, slate) => {
        // backtracking case
        if(target < 0) return
        
        // base case
        if(target === 0) {
            result.push(slate.slice())
            return
        }

        // dfs recursive case
        for (let j = i; j < candidates.length; j++) {
            if (i !== j && candidates[j] === candidates[j - 1]) continue
            slate.push(candidates[j])
            dfs(j + 1, candidates, target - candidates[j], slate)
            slate.pop()
        }
    }

    dfs(0, candidates, target, [])
    return result
}