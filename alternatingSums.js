alternateSums = (arrayOfNumbers) => {
    let oddNumberSum = 0;
    let evenNumberSum = 0;

    for( let i = 0; i < arrayOfNumbers.length; i++) {
        arrayOfNumbers[i] % 2 === 0 ? evenNumberSum += arrayOfNumbers[i] : oddNumberSum += arrayOfNumbers[i]
    }

    return[oddNumberSum, evenNumberSum]
}

console.log(alternateSums([50,60,60,45,70]))