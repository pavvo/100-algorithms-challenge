add = (numbersToAdd) => {

    var total = 0;

    numbersToAdd.forEach(element => {
       total = total + element
    });

    console.log(total);
}

add([1,3,4,6])
add([2,5,4,8,3])

module.exports = add;