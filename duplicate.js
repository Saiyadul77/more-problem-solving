// const duplicateNames = ['asadul', 'saiyadul', 'baharul', 'ziaul', 'saiful', 'faijul', 'badrul', 'fakrul', 'sadrul', 'nurul', 'khairul', 'ruhul', 'asadul', 'saiyadul', 'baharul', 'ziaul', 'saiful', 'faijul', 'badrul', 'fakrul', 'sadrul', 'nurul', 'khairul', 'ruhul'];

// function duplicate(names) {
//     const unique = [];
//     // for (let i = 0; i < names.length; i++) {
//     //     const element = names[i]
//     //     // console.log(element);
//     // }
//     for (const element of names) {
//         console.log(element);
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const uniqueNames = duplicate(duplicateNames);
// console.log(uniqueNames);

const numbers = [2, 6, 8, 10, 2, 7, 3, 1, 2, 3, 4, 5, 7, 2, 3, 4, 5, 8, 9, 4, 5, 6, 7, 3, 2, 1, 4, 8, 9, 7, 8, 4, 5, 6, 3, 4, 2, 1, 5];
function duplicateNumbers(number) {
    const realNumber = [];
    for (const element of number) {
        // console.log(element);
        if (realNumber.indexOf(element) == -1) {
            realNumber.push(element);
        }
    }
    return realNumber;
}
let uniqueNumbers = duplicateNumbers(numbers);
console.log(uniqueNumbers);