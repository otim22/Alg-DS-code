const pivot = (nums, left, right) => {
    let p = right
    let j = left
    let i = left - 1

    while (j <= p) {
        if (nums[j] < nums[p]) {
            i++
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        } else {
            j++
        }
    }

    i++
    [nums[i], nums[p]] = [nums[p], nums[i]]

    return i
}

var quickSort = function(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        let pIndx = pivot(nums, left, right)

        quickSort(nums, left, pIndx - 1)
        quickSort(nums, pIndx + 1, right)
    }

    return nums
}