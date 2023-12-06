
// time complexity: linear time
// O(n),big O of n
function find_sum(given_array){
    total = 0;
    for (i in given_array){
        total += given_array[i];
        console.log(total);
    }
    return total;
}
const a = [1, 4, 67];
console.log(find_sum(a));
// constant time
// O(1), big O of 1




// quadratic time (二次方程式)
// Obig O of n square