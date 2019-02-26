almostIncreasingSequence = (sequence) => {

    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        
        if(sequence[i] <= sequence[i-1]) {
            count++
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            } 
        } 
        
        
    }
    

    /* numbersArray.forEach(number => {
        if(numbersArray[number] - numbersArray[number + 1] != -1){
            return count++
        } else {
            return count
        }
    }); */

    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 