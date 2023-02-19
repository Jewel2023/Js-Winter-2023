/**
 * **
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */
et words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT']
let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']

let smallestWord = findSmallest(words)
let smallestPlanet = findSmallest(planets)
console.log("Smallest Word: "+smallestWord)
console.log("Smallest Planet: "+smallestPlanet)

// my function to detect or find smallest word
function findSmallest(myArry){
    let smRslt = myArry[0]
    myArry.forEach(val => {
        if(smRslt>val.toLowerCase()){
            smRslt = val
        }
    })
    return smRslt
}

/**
 * **
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */
 
function firstValueGreaterThanTen(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        return numbers[i];
      }
    }
    return undefined; // if no number greater than 10 is found
  }
  const numbers1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];
const numbers2 = [1, 3, 3, 65, 43, 87, 17];
const numbers3 = [1, 3, 3, 6, 10, 7, 23, 1, 20];

console.log(firstValueGreaterThanTen(numbers1)); 
console.log(firstValueGreaterThanTen(numbers2)); 
console.log(firstValueGreaterThanTen(numbers3)); 

/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */
function getMinimumValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return min;
  }

 const numbers1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];
const numbers2 = [1, -3, 33, 65, 3, 87, 17];
const numbers3 = [1, 23, 3, -6, 10, -7, 23, -1, 20];

console.log(getMinimumValue(numbers1)); 
console.log(getMinimumValue(numbers2)); 
console.log(getMinimumValue(numbers3)); 




 
 
