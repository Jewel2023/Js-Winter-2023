/**
 * 
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = '';

function isFirstLastName(username) {
    let parts = username.split(' ');
    return parts.length === 2;
}

console.log(isFirstLastName('John Gig')); // true
console.log(isFirstLastName('John Gig Hiyti')); // false
console.log(isFirstLastName('John')); // false
console.log(isFirstLastName('')); // false

/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'you NEVEr waLK aLOne'
let abbr = '';
 

function createAbbr(sentence) {
    let parts = sentence.split(' ');
    for (let word of parts) {
        abbr += word[0].toUpperCase();
    }
    return abbr;
}

abbr = createAbbr(sentence2);
console.log(`abbr -> ${a
    bbr}`); // YNWA


/**
 * Q3: Count the number of words in the sentence
 */

let sentence3 = 
'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';

function countWords(sentence) {
    return sentence.split(' ').length;
}

console.log(countWords(sentenc
    e3));

    console.log('amar sonar bangla');