var subsetsWithDup = function(nums) {
    // global result
    const result = []
    nums.sort((a, b) => a - b)

    // dfs recursive helper
    const dfs = (i, nums, slate) => {
        // base case
        if (i === nums.length) {
            result.push(slate.slice())
            return
        }

        // dfs recursive case
        // exclude
        dfs(i + 1, nums, slate)

        // include
        slate.push(nums[i])
        dfs(i + 1, nums, slate)
        slate.pop()
    }

    dfs(0, nums, [])
    const hash = {}
    for(let el of result) {
        if(hash[el]) continue
        hash[el] = el
    }
    
    return Object.values(hash)
}