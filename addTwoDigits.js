addTwoDigits = (number) => {
    
    let splitedNumber = number.toString().split('')

    return splitedNumber.reduce((a, b) => { return parseInt(a) + parseInt(b) })

}

console.log(addTwoDigits(29))
console.log(addTwoDigits(37))
console.log(addTwoDigits(83))