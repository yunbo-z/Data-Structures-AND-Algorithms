//a=1:special; a=0:normal
//charCodeAt method: returns the Unicode of the character at a specified index (position) in a string.
//array.from method: returns an array from any object with a length property.
//map()

//find the normal key: convert charvalue into an arry 
//set 'start' and 'end' to represent the current window
//track the nunber of the normal characters in the current window:
//current value == 
//move the end pointer, update the count of normal chara
//if normal chara > k, move the start pointer,
function getSpecialSubstring(s, k, charValue) {
    const charValueArr = Array.from(charValue);
    isNormal = charValueArr.map(c => c === '0');//reture true or false for each position
    console.log(isNormal)
    let start = 0;
    let end = 0;
    let normalCount = 0;
    let maxLen = 0;
    while (end < s.length) {
        if (isNormal[s.charCodeAt(end) - 'a'.charCodeAt(0)]) {
            console.log('here is' + isNormal[s.charCodeAt(end) - 'a'.charCodeAt(0)])
            console.log(s.charCodeAt(end))
            normalCount++;
        }
        while (normalCount > k) {
            if (isNormal[s.charCodeAt(start) - 'a'.charCodeAt(0)]) {
                normalCount--;
            }
            start++;
        }
        maxLen = Math.max(maxLen, end - start + 1);
        end++;
    }

    return maxLen;
}
console.log(getSpecialSubstring('abcde', 2, '10101111111111111111111111'));