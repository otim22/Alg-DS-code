var maxProfit = function(prices) {
    let sellIdx = prices.length - 1
    let profit = 0
    for (let buyIdx = sellIdx; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx]
        let sellVal = prices[sellIdx]

        if (buyVal - sellVal >= 0) {
            sellIdx = buyIdx
        } else {
            let price = sellVal - buyVal
            profit = Math.max(profit, price)
        }
    }

    return profit
}