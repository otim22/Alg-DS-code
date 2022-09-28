// Method 1
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const results = []
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] !== nums[i - 1]) { // making sure our solution set does not contain duplicate triplets
            let left = i + 1
            let right = nums.length - 1
            
            while(left < right) {
                const currentSum = nums[i] + nums[left] + nums[right]
                if(currentSum === 0) {
                    results.push([nums[i], nums[left], nums[right]])
                    while(nums[left] == nums[left + 1]) left++
                    while(nums[right] == nums[right - 1]) right-- // making sure our solution set does not contain duplicate triplets
                    left++
                    right--
                } else if (currentSum < 0) {
                    left++
                } else if (currentSum > 0) {
                    right--           
                }
            }
        }
    }
    
    return results
};


// Method 2
const twoSum = function (j, target, nums) {
    let k = nums.length - 1
    let result = []

    while(j < k) {
        let left = nums[j]
        let right = nums[k]

        if (left + right > target) {
            k--
        } else if (left + right < target) {
            j++
        } else {
            result.push([(target * 1), left, right])
            while (j < k && nums[j] === nums[j + 1]) j++
            while (j < k && nums[k] === nums[k + 1]) k--
            j++
            k--
        }
    }

    return result
}

var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) continue // Remove duplicates

        let target = nums[i] * -1
        let subResult = twoSum(i + 1, target, nums)
        result.push(...subResult)
    }
    return result
}
