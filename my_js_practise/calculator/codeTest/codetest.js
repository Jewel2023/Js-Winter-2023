// /*
//  * Q1: Write code to remove given value from the given array
//  * Points: 30
//  * 
//  * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
//  * 
//  * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
//  * 
//  * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
//  */
// console.log('\nQ1');
// const arr1 = [21, 32, 12, 43, 45, 65, 12];
// const num1 = 12;
// let arr1Result = [];        // final ans should be in this variable (get values in arr1Result from arr1 which are NOT equals to num1)
// ​
// ​arr1Result = arr1.scarch(val => val !== num1);

// console.log(arr1);          // [21, 32, 12, 43, 45, 65, 12];
// console.log(arr1Result);    // [21, 32, 43, 45, 65];


/**
 * Q2: Write code to calculate the total of all balances in the accounts-array
 * Points: 40
 * 
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
total = 15000
​
​
​
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 4567,
        balance: 2500
    },
    {
        accountNumber: 5678,
        balance: 1200
    },
]
total = 4700
* 
*/
console.log('\nQ2');
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
                 // final ans should be in this variable
 let total = accounts.reduce((sum, val) => sum + val.balance, 0);

console.log(`Total of all balances in the accounts array: ${total}`);

/**
 * Write code to find the index of second-occurrence of 'baSeBalL' (ignoring cases) in the arr3-array
 * if baseball is not present twice or more in the array; code should ans -1
 * otherwise code should ans the index of second-occurrence of baseball in arr3-array
 * Points: 30
 * 
 * const arr3 = ['FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
 * arr3Result = 5
 * 
 * const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
 * arr3Result = 3
 * 
 * const arr3 = ['earTh', 'JUPiTer', 'nePtUne', 'saturn', 'BASeball'];
 * arr3Result = -1
 * 
 * const arr3 = ['earTh', 'nePtUne', 'saturn'];
 * arr3Result = -1
 */
console.log('\nQ3');
const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
let arr3Result;             // final ans should be in this variable
let count = 0;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i].toLowerCase() === "baseball") {
        count++;
        if (count === 2) {
            arr3Result = i;
            break;
        }
    }
}
//if (jaar3) arr3Result = -1;

//console.log(arr3);
//console.log(`the index of second-occurrence of 'baSeBalL' (ignoring cases) in the arr3-array : ${arr3Result}`);

console.log('hel');
let num=10, num=20, num=30,
let inc2=num1++


















