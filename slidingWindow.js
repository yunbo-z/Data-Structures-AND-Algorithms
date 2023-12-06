// best time to Buy and sell stock


//find the lowest price day to buy, hightest price day to sell
//buy date earlier than sell date
//two pointers: b=buyday s=sellday
//compare b<=s ? profi=sv-bv;maxP=max(maxP,profi);s++ : b+1;s+1;

var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (i=1; i < prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
            console.log("minprice "+ minPrice)
        }
        else{
            maxProfit = Math.max( maxProfit , prices[i] - minPrice );
            console.log("prices is: "+ prices[i] + " " +"maxprofit is: "+ maxProfit)
        }

    }
    return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));