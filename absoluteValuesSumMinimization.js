function absoluteValuesSumMinimization(numberArray) {
    const isEven = numberArray.length % 2 === 0;
    return isEven ? numberArray[numberArray.length / 2 - 1] : numberArray[Math.floor(numberArray.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));