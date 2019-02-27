genCharArray = (charA, charZ) => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

const alphabetArray = genCharArray('a', 'z');

alpahabeticShift = (inputString) => {
    let inputShifted = inputString.split('');

    for ( var i = 0; i < inputShifted.length; i++) {
        var index = 0;

        if(inputShifted[i] !== 'z'){
            index = alphabetArray.indexOf(inputShifted[i]) + 1 
        }

        inputShifted[i] = alphabetArray[index]
    }

    return inputShifted.join('')
    
}

console.log(alpahabeticShift('crazy'))