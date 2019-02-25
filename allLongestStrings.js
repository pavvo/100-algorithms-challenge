allLongestStrings = stringsArray => {

    var longestStrings = [];
    var longestLength = 0;

    stringsArray.forEach(string => {
        longestLength = longestLength < string.length ? string.length : longestLength;
    });

    stringsArray.forEach(string => {
        if(string.length === longestLength){
            longestStrings.push(string)
        }
    })

    return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));