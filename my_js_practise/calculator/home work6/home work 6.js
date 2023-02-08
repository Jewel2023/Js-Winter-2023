/**
 * 
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
const str1 = 'YOu lIVe ONlY ONcE';
let titleCaseStr1 = '';             // final answer must be in the variable
let str1 = 'YOu lIVe ONlY ONcE';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'


 */

let str1 = 'gooD mORNIng';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  //'Good morning'
console.log(titleCaseStr1);    

let str1 = 'have a great day';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  // 'Have a great day'
console.log(titleCaseStr1); 


let str1 = 'apple banana cherry';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  // 'Apple Banana Cherry'
console.log(titleCaseStr1); 



let str1 = 'heLlO deAR, haVE a great DAy tO yOu';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  // 'Hello Dear, Have A Great Day To You'
console.log(titleCaseStr1); 


let str1 = 'qUEen';
let str1 = '';
let str2 = str1.toLowerCase().split(' ');
for (let i = 0; i < str2.length; i++) {
    let firstVal = str2[i][0].toUpperCase;
    console.log(str2[i]);
}
console.log(str1);                  // 'Queen'
console.log(titleCaseStr1);


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'good morning'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const str2 = 'hello dear how are you doing';
let reverseStr2 = '';           // final answer must be in the variable
let strArray = str2.split(' ');
for (let i = strArray.length-1; i >= 0; i--) {
    reverseStr2 = reverseStr2+strArray[i]+" ";
}
console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'

const str2 = 'have a great day';
let reverseStr2 = '';           // final answer must be in the variable
let strArray = str2.split(' ');
for (let i = strArray.length-1; i >= 0; i--) {
    reverseStr2 = reverseStr2+strArray[i]+" ";
}
console.log(str2);              // 'day great a have'
console.log(reverseStr2); 
 
const str2 = 'good morning';
let reverseStr2 = '';           // final answer must be in the variable
let strArray = str2.split(' ');
for (let i = strArray.length-1; i >= 0; i--) {
    reverseStr2 = reverseStr2+strArray[i]+" ";
}
console.log(str2);              // 'good morning'
console.log(reverseStr2);

onst str2 = 'Learn';
let reverseStr2 = '';           // final answer must be in the variable
let strArray = str2.split(' ');
for (let i = strArray.length-1; i >= 0; i--) {
    reverseStr2 = reverseStr2+strArray[i]+" ";
}
console.log(str2);              // 'Learn'
console.log(reverseStr2);


/**
 *  Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
const arr3 = [1, 1, 1, 2, 3, 1, 2];
let avg;                // final answer must be in the variable
let sum = 0
for (let i = 0; i < arr3.length; i++) {
    sum = sum+arr3[i];
}
avg = sum/arr3.length;
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57

 /**
  *  Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
const str4 = 'aPPlE bANAna chErRY';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'apple banana cherry'
console.log(abbr.toUpperCase());          // ABC

const str4 = 'have a great day';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'have a great day'
console.log(abbr.toUpperCase()); //'HAGD'


const str4 = 'gooD mORNIng';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'gooD mORNIng'
console.log(abbr.toUpperCase()); //'GM'


const str4 = 'gooD mORNheLlO deAR, haVE a great DAy tO yOu';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'heLlO deAR, haVE a great DAy tO yOu'
console.log(abbr.toUpperCase()); //'HDHAGDTY'


const str4 = 'gooD mORNheLlO deAR, haVE a great DAy tO yOu';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'heLlO deAR, haVE a great DAy tO yOu'
console.log(abbr.toUpperCase()); //'HDHAGD


const str4 = 'qUEen';

let str5 = str4.split(' ')
let abbr = '';              // final answer must be in the variable
for (let i = 0; i < str5.length; i++) {
    abbr = abbr+str5[i][0]
}
console.log(str4);          // 'qUEen'
console.log(abbr.toUpperCase()); //'Queen'

5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */

let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i].toUpperCase();
}
console.log(arr5); 
console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']

