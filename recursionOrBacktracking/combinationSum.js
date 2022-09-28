var combinationSum = function(candidates, target) {
    // global result
    const result = []
    candidates.sort((a, b) =>  a - b)

    // dfs recursive helper
    const dfs = (i, candidates, target, slate) => {
        // backtracking case
        if(target < 0) return
        
        // base case
        if (target === 0) {
            result.push(slate.slice())
            return
        }
        
        // dfs recursive case
        for (let j = i; j < candidates.length; j++) {
            slate.push(candidates[j])
            dfs(j, candidates, target - candidates[j], slate)
            slate.pop()
        }
    }

    dfs(0, candidates, target, [])
    return result
}