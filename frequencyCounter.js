/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 * Note: You may assume the string contains only lowercase alphabets.
 * Time Complexity - O(n)*/

function validAnagram(a, b){
    const str1 = a.split("").sort().join("");
    const str2 = b.split("").sort().join("");
    if (str1 === str2) {
        console.log(true);
        // return true;
    } else {
        console.log(false);
        // return false;
    }
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
