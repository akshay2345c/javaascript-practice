const str = " Hello, JavaScript!";

// 1. charAt(index)
console.log(str.charAt(1)); // "H" string ma kai position upar kayo letter chhe te check thay

// 2. charCodeAt(index)
console.log(str.charCodeAt(1)); // 72 (ASCII of 'H')  same as above but return ASCII value

// 3. codePointAt(index)
console.log(str.codePointAt(1)); // 72 same as above but range of code is high

/* charCodeAt()	UTF-16 Code Unit (0-65535)	❌ (Only returns half of a surrogate pair)
codePointAt()	Full Unicode Code Point (0-1114111)	✅ (Returns the actual Unicode value)*/

// 4. concat(str2, str3, ...)
console.log(str.concat(" is awesome!")); // " Hello, JavaScript! is awesome!" string joinner

// 5. endsWith(searchString, length)
console.log(str.endsWith("! ")); // true last letter check kare

// 6. includes(searchString, position)
console.log(str.includes("Java")); // true string exiting letters check kare

// 7. indexOf(searchValue, fromIndex)
console.log(str.indexOf("Java")); // 8  first letter ni indext out put aape

// 8. lastIndexOf(searchValue, fromIndex)
console.log(str.lastIndexOf("a")); // 10 last search letter ni index

// 9. localeCompare(compareString, locales, options)
console.log(str.localeCompare("hello")); // 1, 0, or -1


/*console.log("apple".localeCompare("banana"));  // -1 (apple comes before banana)
console.log("grape".localeCompare("apple"));   // 1  (grape comes after apple)
console.log("hello".localeCompare("hello"));   // 0  (both are the same)
*/


// 10. match(regex)
console.log(str.match(/Java/g)); // ["Java"]  /g stand for global search it means check all occurance

// 11. matchAll(regex)
console.log([...str.matchAll(/a/g)]); // [ 'a', 'a' ]

// 12. normalize(form)
console.log("é".normalize("NFC")); // "é"

// 13. padEnd(targetLength, padString)
console.log("JavaScript".padEnd(15, ".")); // "JavaScript...."

// 14. padStart(targetLength, padString)
console.log("JS".padStart(5, "0")); // "000JS"

// 15. repeat(count)
console.log(str.repeat(3)); // "Hello Hello Hello "

// 16. replace(searchValue, replaceValue)
console.log(str.replace("JavaScript", "JS")); // " Hello, JS! "

// 17. replaceAll(searchValue, replaceValue)
console.log(str.replaceAll("a", "orange")); // "orange orange"

// 18. slice(start, end)
console.log(str.slice(1, 6)); // "Hello"

// 19. split(separator, limit)
console.log(str.split("a")); // ["", "Hello,", "JavaScript!", ""]
console.log(str.length);


// 20. startsWith(searchString, position)
console.log(str.startsWith(" Hello")); // true

// 21. substring(start, end)
console.log(str.substring(1, 6)); // "Hello"

// 22. toLocaleLowerCase()
console.log(str.toLocaleLowerCase()); // " hello, javascript! "

// 23. toLocaleUpperCase()
console.log(str.toLocaleUpperCase()); // " HELLO, JAVASCRIPT! "

// 24. toLowerCase()
console.log(str.toLowerCase()); // " hello, javascript! "

// 25. toUpperCase()
console.log(str.toUpperCase()); // " HELLO, JAVASCRIPT! "

// 26. trim()
console.log(str.trim()); // "Hello, JavaScript!"

// 27. trimStart() / trimLeft()
console.log(str.trimStart()); // "Hello, JavaScript! "

// 28. trimEnd() / trimRight()
console.log(str.trimEnd()); // " Hello, JavaScript!"

// 29. valueOf()
console.log(str.valueOf()); // " Hello, JavaScript! "

// 30. [Symbol.iterator]() - Iterates over characters
for (const char of str) {
    console.log(char); // Logs each character one by one
}
