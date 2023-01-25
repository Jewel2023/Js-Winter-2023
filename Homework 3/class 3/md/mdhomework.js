/** 
 * 
*/
let fTemp = 47;

let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);


//C>F
//T(°F) = T(°C) × 9/5 + 32
let cTempintoTTemp=(fTemp× 9/5 + 32);
let fTempintoFTemp=(fTemp× 9/5 + 32);
console.log(`${fTemp}°F is equals to ${fTempIntoKTemp}°K`);


//C>K
//C>T(°C) = T(K) - 273.15
let fTempintoKTemp=(fTemp-273.15 );
console.log(`${fTemp}°F is equals to ${fTempIntoKTemp}°K`);

//K>F
//T(°F) = T(K) × 9/5 - 459.67
let kTempintoFTemp(ftemp× 9/5 - 459.67);
console.log(`${kTemp}°F is equals to ${fTempIntoKTemp}°K`);


//K>C
//T(°C) = T(K) - 273.15
let kTempintoCTemp(ftemp× 9/5 - 459.67);
console.log(`${kTemp}°F is equals to ${cTempIntoKTemp}°K`);
