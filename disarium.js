//A number is called Disarium if sum of its digits powered with their respective positions is equal to the number itself.

function determineDisarium(num) {
    let stringNum = num.toString()
    digits = stringNum.split('')
    let sum = 0;
    for (let i =0; i < digits.length; i++){
        sum += (parseInt(digits[i]))**(i+1)
    }
    if(sum==num)return `${num} is a Disarium`
    return `${num} is not in anyway a Disarium`
}

console.log(determineDisarium(73))