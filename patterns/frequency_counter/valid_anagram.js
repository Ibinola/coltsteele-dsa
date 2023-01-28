/*
Write a function to determine if the second string is an anagram of the first. (anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman)
    GIVEN two strings 
        if anagram
        OUTPUT true
    ELSE false
*/

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let str_freq = {} // O(n)

    for (let char of str1) { // O(n)
        str_freq[char] = (str_freq[char] || 0) + 1;  
    }

    for (let char of str2) {  // O(n)
        if (!str_freq[char]) {
            return false
        } else {
            str_freq[char] -= 1;
        }
    }

    return true;


}

console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zza")) // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car"));// false
console.log(validAnagram("awesome", "awesom")); // false

// tc -> O(n), O(n)