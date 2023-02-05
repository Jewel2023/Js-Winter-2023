/**
 * 1:
 * create a variable myNumber and assign any (numeric) value to it.
 * 
 * if myNumber-value is divisible by 5, print 'divisible by 5'
 * if myNumber-value is divisible by 3, print 'divisible by 3'
 * if myNumber-value is divisible by 5 and 3, print 'divisible by 5 and 3'
 * if myNumber-value is NOT divisible by 5 or 3, print the value of myNumber
 * 
 * myNumber = 17
 * 
 */
console.log(`\nQ1:\n`);
let myNumber = 17;

if (myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log("divisible by 5 and 3");
} else if (myNumber % 5 === 0) {
    console.log("divisible by 5");
} else if (myNumber % 3 === 0) {
    console.log("divisible by 3");
} else {
    console.log(myNumber);
}

/**
 * 
 * Q2:
 * const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
 * 
 * if Basketball is present at index-2 (ignoring cases), Print 'Basketball is present at index-2
 * if Baseketball is not present at index-2 (ignoring cases), print 'Basketball is not present at index-2'
 * if Basketball is not present in the array, replace, index-2-value with 'Basketball; and print sports-array
 * 
 * 
 */


    if Basketball is NOT present in array
        replace, index-2-value with 'Basketball; and print sports-array
    else
        if Basketball is present at index-2
            Print 'Basketball is present at index-2
        else
            'Basketball is not present at index-2'

            const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];

            if (sports.indexOf("Basketball") === -1) {
                sports[2] = "Basketball";
                console.log(sports);
            } else {
                if (sports[2].toLowerCase() === "Bbasketball".toLowerCase()) {
                    console.log("Bbasketball is present at index-2");
                } else {
                    console.log("Bbasketball is not present at index-2");
                }
            }    
            
            
/**
 * *ssss
 * Q3:
 * const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
 * 
 * if the 'Earth' is present as the first-element in the array, print "Earth is present at the correct place"
 * otherwise, Add 'Earth' as the first-element in the array; then print the planets-array
 * 
 */
console.log(`\nQ3:\n`);

// const planets = ['Jupiter', 'Earth', 'MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
// console.log(`planets -> ${planets}`);
// if (planets.indexOf('Earth') === 0) {
//     console.log('Earth is present at the correct place');
// } else {
//     planets.unshift('Earth');
//     console.log(planets);
// }

const planets = ['Earth mother', 'MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
console.log(`planets -> ${planets}`);
if (planets[0].localeCompare('Earth') === 0) {
    console.log('Earth is present at the correct place')
} else {
    planets.unshift('Earth');
    console.log(planets);
 */
    const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
    console.log(`planets -> ${planets}`);
    
    if (planets[0].toLowerCase() === 'earth') {
        console.log('Earth is present at the correct place');
    } else {
        planets.unshift('Earth');
        console.log(planets);
    }



 