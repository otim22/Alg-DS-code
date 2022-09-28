/*
In other words, if you have 2 columns, of heights 3 and 5, and they are spaced 2 units apart, 
how much water can fit in them? Well, the highest you can go is 3 (as otherwise the water would spill out), 
and the width is 2, so the area is 2 x 3 which is 6.
*/

// Method 1
var maxArea = function(height) {
    let biggestFoundArea = 0

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const maxHeight = Math.min(height[i], height[j])
            const currentArea = maxHeight * (j - i)
            biggestFoundArea = Math.max(biggestFoundArea, currentArea)
        }
    }

    return biggestFoundArea
}

// Method 2
var maxArea = function(height) {
    let biggestFoundArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const maxHeight = Math.min(height[left], height[right])
        const currentArea = maxHeight * (right - left)
        biggestFoundArea = Math.max(biggestFoundArea, currentArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return biggestFoundArea
}