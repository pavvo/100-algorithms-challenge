adjacentElementsProduct = (numbersArray) => {

    largestNumberOne = numbersArray[0]
    largestNumberTwo = numbersArray[0];

    numbersArray.forEach(number => {
        largestNumberOne = largestNumberOne > number ? largestNumberOne : number
    });

    var index = numbersArray.indexOf(largestNumberOne);
    
    if (index > -1) {
        numbersArray.splice(index, 1);
    }

    numbersArray.forEach( secondNumber => {
        largestNumberTwo = largestNumberTwo > secondNumber ? largestNumberTwo : secondNumber
    })

    return largestNumberTwo * largestNumberOne
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([7, 2, 4, -8, 10, 5]));