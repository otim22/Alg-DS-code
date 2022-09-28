/**
 * Given an array nums of n integers, return an array of all the 
 * unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
*/
var fourSum = function(nums, target) {
    let result = []
    let len = nums.length
    
    if(len < 4) return []
    
    let sortedNums = nums.sort((a, b) => a - b)
    
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && sortedNums[i] === sortedNums[i - 1]) continue
        
        for(let j = i + 1; j < len - 2; j++) {
            if(j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue
            
            let left = j + 1
            let right = len - 1
            
            while(left < right) {
                const total = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right]
                
                if(total === target) {
                    result.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]])
                    
                    while (sortedNums[left] === sortedNums[left - 1]) left++
                    while (sortedNums[right] === sortedNums[right + 1]) right--
                    left++
                    right--
                } else if(total < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    
    return result
}