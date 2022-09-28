var findTargetSumWays = function(nums, target) {
    // gloabl result
    let result = 0

    const dfs = (i, nums, target, runningSum) => {
        // base case
        if (i === nums.length) {
            if (runningSum === target) {
                result++
            }

            return
        }

        // dfs recursive case
        // include positive
        runningSum += nums[i]
        dfs(i + 1, nums, target, runningSum)
        runningSum -= nums[i]

        // include negative
        runningSum -= nums[i]
        dfs(i + 1, nums, target, runningSum)
        runningSum += nums[i]
    }

    dfs(0, nums, target, 0)
    return result
}