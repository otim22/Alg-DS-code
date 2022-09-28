var permuteUnique = function(nums) {
    // global result
    const result = []

    // dfs recursive helper
    const dfs = function(i, nums) {
        // base case
        if (i === nums.length) {
            result.push(nums.slice())
            return
        }

        // dfs recursive case
        let hash = {}
        for (let j = i; j < nums.length; j++) {
            if (hash[nums[j]]) continue
            hash[nums[j]] = true

            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(i + 1, nums)
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    dfs(0, nums)
    return result
}