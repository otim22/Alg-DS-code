var permute = function(nums) {
    // global result
    const result = []

    // dfs recursive helper
    const dfs = (i, nums) => {
        if (i === nums.length) {
            result.push(nums.slice())
            return
        }

        // dfs recursive case
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(i + 1, nums)
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    dfs(0, nums)
    return result
}