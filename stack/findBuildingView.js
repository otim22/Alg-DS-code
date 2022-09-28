var findBuildingView = function(heights) {
    const start = heights.length - 1
    const result = [start]

    for (let i = heights.length - 2; i >= 0; i--) {
        let curBuilding = heights[i]
        let lastBuilding = heights[result[result.length - 1]]

        if(curBuilding > lastBuilding) {
            result.push(i)
        }
    }

    return result.reverse()
}