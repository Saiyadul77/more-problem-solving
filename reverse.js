const greetings = 'Hello, How are you?';
function reverseLetter(reverse) {
    let reverseNumber = '';  //must use let not const
    for (const letter of reverse) {
        // console.log(letter);
        reverseNumber = letter + reverseNumber;
    }
    return reverseNumber;
}
let uniqueReverse = reverseLetter(greetings);
console.log(uniqueReverse);