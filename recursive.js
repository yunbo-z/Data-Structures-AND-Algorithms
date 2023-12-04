//there is a frog wants to across the river
//have 10 stones / 11 feet in total inside the river
//every time this frog can only move 1 or two feet
//count how many ways are there for this frog to cross the river?


// n is the number of the stones
// in this way is not very efficient
// function num_ways(n) {
//     if (n == 1 || n == 0) {
//         return 1;
//     } else {
//         return num_ways(n - 1) + num_ways(n - 2);
//     }

// }


// function num_ways(n) {

//     if (n == 0 || n == 1) {
//         return 1
//     }
//     else {
//         let nums = [0, n]
//         nums[0] = 1;
//         nums[1] = 1;
//         for (i = 2; i <= n; i++) {
//             nums[i] = nums[i - 1] + nums[i - 2];
//         }
//         return nums[n];
//     }

// }


//now imagine every time this frog can cross 1,3 or 5 feet
function num_ways(n) {
    if (n == 0) {
        return 1;
    }
    else {
        // let nums = [0, n];
        nums[0] = 1;
        for (i = 1; i <= n; i++) {
            total = 0;
            for (j in [1, 3, 5]) {
                if (i - j >= 0) {
                    total += nums[i - j];
                }
            }
            nums[i] = total;
        }
        return nums[n];
    }

}

console.log(num_ways(3));