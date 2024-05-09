type Challenge = {
  id: number;
  title: string;
  description: string;
  placeholder: string;
  difficulty: string;
};
export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Day 1 : Find Longest Word in a String",
    description: `Q. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.
        ===========================================================
        Note:
        Constraints:
        The input string may cotain alphabetic characters, digits, spaces and punctuation.
        The input string is non-empty
        The input string may contain multiple words separated by spaces
        ===========================================================
        Note:
        If the input string is empty or contains only whitespace the function should return an false.
        The function should ignore leading and trailing whitespace.
        ===========================================================
        Example: 
        findLongestWord('The quick brown fox jumped over the lazy dog') should return 'jumped'
        `,
    placeholder: `function findLongestWord(str) {
            // Your code here
        }
        findLongestWord('The quick brown fox jumped over the lazy dog')
        `,
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Day 2 : Generate Hash Tag from a String",
    description: `Q. You are required to implement a function generateHash that generates  hash tag from a given string.
        ===========================================================
        Note:
        The hash tag should be constructed as follows:
        
        1. The input string should be converted to a hash tag format, where each word is capitalized and concatented together without spaces.
        2. If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
        3. Otherwise, the function should return the generated hash tag prefixed with #.
        ===========================================================
        Note:
        Example:
        generateHash('Hello World') should return '#HelloWorld'`,
    placeholder: `function generateHash(str) {
            // Your code here
            return hashTagWord;
          }
          generateHash('Hello World')`,
    difficulty: "easy",
  },
  {
    id: 3,
    title: "Day 3 : Count the Characters in a String",
    description: `Q.  Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of items the specified character appears in the string.
        ===========================================================
        Constraints:
        1. The function should be case-sensitive.
        2. The function should handle both lowercase and uppercase characters.
        3. The character parameter can be any printable ASCII character (the function should accept any character that is part of ASCII character set and is printable).`,
    placeholder: `function countChar(str, char){
            // Your code here
        }
        countChar('Hello World', 'o')`,
    difficulty: "easy",
  },
  {
    id: 4,
    title: "Day 4 : Check Triangle Type",
    description: `Q. Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene"
        ===========================================================
        console.log(checkTriangle(3,3,3)); //Output: equilateral
        console.log(checkTriangle(3,4,3)); //Output: isosceles
        console.log(checkTriangle(5,8,6)); //Output: scalene
        ===========================================================
        Constraints:
        1. If all three sides are of equal length, return "equilateral".
        2. If only two sides are of equal length, return "isosceles";
        3. If all three sides are of different lengths, return "scalene"`,
    placeholder: `function checkTriangleType(a,b,c,){
            // Your code here
        }
        checkTriangleType(3,3,3)`,
    difficulty: "easy",
  },
  {
    id: 5,
    title: "Day 5 : Sort an Array of Numbers in Ascending Order",
    description: `Q. Write a function to sort an array of numbers in an ascending order.
        ===========================================================
        console.log(sortAscending([5,3,10,8])) //Output: [3,5,8,10]
        console.log(typeof sortAscending[2]);
        ===========================================================
        Constraints:
        1. The function should take an array of numbers as input.
        2. It should return a new array with the numbers sorted in ascending order.
        3. The original array should remain unchanged.
        4. You are not allowed to use the build-in sort() method.`,
    placeholder: `function sortAscending(arr){
            // Your code here
        }
        sortAscending([5,3,10,8])`,
    difficulty: "easy",
  },
  {
    id: 6,
    title: "Day 6 : Determine Palindrome String",
    description: `Q. Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.
        ===========================================================
        console.log(isPalindrome("A man, a plan, a canal, Panama")) // True
        console.log(isPalindrome("racecar")) //True
        console.log(isPalindrome("hello")) //False
        ===========================================================
        Constraints:
        1. The input string may contain letters, digits, spaces, punctuation, and special characters.
        2. The function shoule be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
        3. Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
        4. The function should return true if the input string is a palindrome and false otherwise.`,
    placeholder: `function isPalindrome(str) {
            // Your code here
          }
          isPalindrome(carrace);`,
    difficulty: "easy",
  },
  {
    id: 7,
    title: "Day 7 : Find the Maximum Number in an Array of Numbers",
    description: `Q. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
        ===========================================================
        Example:
        console.log(findMax([1,5,3,9,2])); Output: 9
        console.log(findMax([-10,-5,-3,-9,-2])); Output: -2
        console.log(findMax([5])); Output: 5`,
    placeholder: `function findMax(arr){
            // Your code here
        }
        findMax([1,5,3,9,2])`,
    difficulty: "easy",
  },
  {
    id: 8,
    title: "Day 8 : Find the Facotorial of a Number using Recursion",
    description: `Challenge: Factorial Finder
        ===========================================================
        Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
        Here are some examples of factorial calculations:
        ===========================================================
        factorial(0) => 1
        factorial(1) => 1
        factorial(2) => 2
        factorial(3) => 6
        factorial(4) => 24
        factorial(5) => 120
        ===========================================================
        Your function should work for any non-negative integer input
        ===========================================================
        Example: 
        console.log(factorial(5));  Output: 120
        console.log(factorial(0));  Output: 1
        console.log(factorial(3));  Output: 6
        ===========================================================
        Show it with recursive function`,
    placeholder: `function factorial(n){
            // Your code here
        }
        factorial(5)`,
    difficulty: "medium",
  },
  {
    id: 9,
    title: "Day 9 : Calculate the Average",
    description: `Calculate the Average
        ===========================================================
        Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.
        ===========================================================
        Your function should:
        1. Accept an array of numbers as input.
        2. Calculate the sum of all the numbers in the array.
        3. Divide the sum by the total number of elements in the array to find the array.
        4. Return the calculated average.
        ===========================================================
        Example: 
         console.log(calculateAverage([5,10,2,8])) Output: 6.25
         ===========================================================
         Note: Ensure the function handles arrays of any length. The average should be returned as a floating-point number.`,
    placeholder: `function calculateAverage(arr){
            // Your code here
        }
        calculateAverage([5,10,2,8])`,
    difficulty: "medium",
  },
  {
    id: 10,
    title: "Day 10 : Compare Two Arrays for Equality",
    description: `Q. Write a function arraysAreEqual that take two arrays arr1 and arr2 as input and returns true if the arrays are equal. (i.e. contain the same elements in the same order), and false otherwise.
        ===========================================================
        // Example usage:
        console.log(arraysAreEqual([1,2,3],[1,2,3]))  Output : true
        console.log(arraysAreEqual([1,2,3],[1,2,4]))  Output : false
        console.log(arraysAreEqual([],[]))  Output : true
        ===========================================================
        Note: 
        1. The function should return false if the arrays have different lengths.
        2. The function should compare each element of arr1 with the corresponding elememnt in arr2.
        3. The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.
        `,
    placeholder: `function arraysAreEqual(arr1, arr2){
            // Your code here
        }
        arraysAreEqual([1,2,3], [1,2,3])`,
    difficulty: "easy",
  },
  {
    id: 11,
    title: "Day 11 : Sum of Digits in a Number",
    description: `Q. Write a function that takes a number as input and returns the sum of its digits.
        ===========================================================
        //Example usage:
        console.log(sumOfDigits(1234)) Output: 10
        console.log(sumOfDigits(4321)) Output: 10
        console.log(sumOfDigits(123456)) Output: 21
        ===========================================================
        Constraints: 
        1. The input number will always be a positive integer.
        2. The input can have multiple digits.
        3. The output should be thes um of all the digits in the input number.
        ===========================================================
        Homework: 
        1. This function calculates the sum of digits without converting the number to  a string.
        `,
    placeholder: `function sumOfDigits(num){
            // Your code here
        }
        sumOfDigits(1234)`,
    difficulty: "easy",
  },
  {
    id: 12,
    title: "Day 12 : Remove Duplicates from an Array of Integers",
    description: `Q. Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.
        ===========================================================
        Example: 
        console.log(removeDuplicates([1,2,3,2,1,4])) //Output: [1,2,3,4]
        console.log(removeDuplicates([5,6,7,7,8,8,9])) //Output: [5,6,7,8,9]
        console.log(removeDuplicates([1,2,3,4])) //Output: [1,2,3,4]
        console.log(removeDuplicates([])) //Output: []
        ===========================================================
        The new Set()method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.
        ===========================================================
        Constraints:
        1. The input array may contain both positive and negative integers.
        2. The input array may be empty.
        3. The elements at the input array are not guaranteed to be sorted.
        4. The output array should retain the original order of elements from the input array.
        `,
    placeholder: `function removeDuplicates(arr){
            // Your code here
        }
        removeDuplicates([1,2,3,2,1,4])`,
    difficulty: "medium",
  },
  {
    id: 13,
    title: "Day 13 : Count the Number of Vowels in a String",
    description: `Q. Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a','e','i','0','u' as vowels (both lowercase and uppercase)
        ===========================================================
        Example: 
        console.log(countVowels("Helloo world")) Output: 4
        console.log(countVowels("ThE quIck brOwn fOx")) Output: 5
        console.log(countVowels("qwe")) Output: 0
        ===========================================================
        Constraints: 
        1. The input string may contain letters in both uppercase and lowercase.
        2. The output should be a non-negative integer representing the count of vowels in the input string.
        `,
    placeholder: `function countVowels(str){
            // Your code here
        }
        countVowels("Helloo world")`,
    difficulty: "medium",
  },
  {
    id: 14,
    title: "Day 14 : Determine if a Number is Power of Two",
    description: `Q. Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two and false otherwise.
        Example usage: 
        console.log(isPowerOfTwo(8)) Output: true
        console.log(isPowerOfTwo(7)) Output: false
        ===========================================================
        Notes:
        1. The input will be a positive integer.
        2. Zero(0) and negative integers are not considered power of two.
        3. The function should return true if the given number is a power of 2, and false otherwise.
        ===========================================================
        We can solve it using bitwise operator to but it your choice to do it and let me know in the comment section.`,
    placeholder: `function isPowerOfTwo(num){
            // Your code here
        }
        isPowerOfTwo(8)`,
    difficulty: "hard",
  },
  {
    id: 15,
    title: "Day 15 : Sum of squares of all elements in an array",
    description: `Q.Write a function to calculate the sum of squares of all elements in an array.
        ===========================================================
        For example, given the array [1,2,3] the function should return 14.
        1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14
        console.log(sumOfSquares([1,2,3])) Output: 14`,
    placeholder: `function sumOfSquares(arr){
            // Your code here
        }
        sumOfSquares([1,2,3])`,
    difficulty: "easy",
  },
  {
    id: 16,
    title: "Day 16 : Find the Minimum Value in an Array of Numbers",
    description: `Q. Write a function that takes an array of numbers as input and returns the minimum value found in the array.
        ===========================================================
        Constraints: 
        1. The input array may contain both positive and negative integers.
        2. The input array may be empty.
        3. The input array may contain duplicate values.
        ===========================================================
        console.log(findMin([5,10,2,8])) Output: 2
        console.log(findMin([5,-3,0,12,-7])) Output: -7
        console.log(findMin([])) Output: undefined (or any suitable message for empty array)
        ===========================================================
        Note: 
        1. Ensure the function handle edge cases gracefully, such as an empty input array.
        2. Consider using ES6 features like the spread syntax (...) for a concise implementation.
        ===========================================================
        The spread syntax ( ...) in JavaScript is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
        For example: if arr is [5,10,2,8] then ...arr expands to 5.10,2,8.`,
    placeholder: `
        function findMin(arr){
            // Your code here
        }
        findMin([5,10,2,8])`,
    difficulty: "medium",
  },
  {
    id: 17,
    title: "Day 17 : Convert a String to CamelCase & snake_case",
    description: `Q. Write a function that convert a string to camelCase & snake_case.
        ===========================================================
        console.log(toCamelCase("hello world thapa")) //Output: helloWorldThapa
        console.log(toSnakeCase("hello World")); //Output: hello_world`,
    placeholder: `function toCamelCase(str) {
            // Your code here
          }
          
          function toSnakeCase(str) {
            // Your code here
          }
          toCamelCase("hello world thapa");
            toSnakeCase("hello World");
          `,
    difficulty: "hard",
  },
  {
    id: 18,
    title: "Day 18 : Check if a Character is Uppercase",
    description: `Q. Write a function to check if a character if uppercase or lowercase.
        ===========================================================
        Constraints:
        1. The input char will be a single character.
        2. The character can be any printable ASCII character.
        3. You can assume that the input will always be a string of length 1.
        ===========================================================
        Example:
        console.log(isUpperCase("s")) // True
        console.log(isUpperCase("b")) // False
        ===========================================================
        Note:
        Ensure that the function correctly identifies uppercase characters based on their ASCII values.
        Optimize the function to handle edge cases efficiently.`,
    placeholder: `function isUpperCase(char){
            // Your code here

        }
        isUpperCase("s")`,
    difficulty: "easy",
  },
  {
    id: 19,
    title: "Day 19 : Check a String Starting Substring",
    description: ` Q. Write a function to check if a given string starts with a specific substring.
        ===========================================================
        str : A string(e.g : Hello World);
        subStr :  A substring to check if it starts the given string(eg: Hello);
        Output : true if the given string starts with the specified substring, otherwise false.
        ===========================================================
        Example : 
        console.log(startsWith("Hello world","hello"))  Output : True
        console.log(startsWith("Hello world","World"))  Output : True`,
    placeholder: `function startsWith(str, subStr) {
            // Your code here
          }
          startsWith("Hello world","hello")`,
    difficulty: "medium",
  },
  {
    id: 20,
    title: "Day 20 : Reverse a String",
    description: `Q. Write a function to reverse a string without using any build-in methods or libraries. The function should take a string and return the reversed string.
        ===========================================================
        Example: 
        console.log(reverseString("hello")) OUTPUT : olleh `,
    placeholder: `function reverseString(str){
            // Your code here
        }
        reverseString("hello")`,
    difficulty: "medium",
  },
  {
    id: 21,
    title: "Day 21 : Calculate Mean",
    description: `Q. Write a function called calculateMean that takes an array of numbres as input and returns the mean (average) of those numbers.
        todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbres.
        ===========================================================
        Constraints:
        1. The input array may contain positive and negative integers.
        2. The input array may be empty. If it is empty, the function should return 0.
        ===========================================================
        console.log(calculateMean([1,2,3,4,5])) //Output: 3
        console.log(calculateMean([10,20,30])) //Output: 20
        console.log(calculateMean([-1,0,1])) //Output: 0
        console.log(calculateMean([])) //Output: 0`,
    placeholder: `function calculateMean(arr){
            // Your code here
        }
        calculateMean([1,2,3,4,5])`,
    difficulty: "easy",
  },
  {
    id: 22,
    title: "Day 22  : Calculate Median",
    description: `Q. Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the media value. If the arrray has an even number of elementes,return the average of the two middle values.
        ===========================================================
        For example: the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5-7)/2 = 6.
        ===========================================================
        todo Tips:
        1.Sort the array in ascending order.
        2. If the array has an odd number of elements, the median is the middle element.
        3. If the array has an even number of elements, the median is the average of the two middle elements.
        ===========================================================
        console.log(findMedian([3,3,5,9,15])) //Output: 5
        console.log(findMedian([3,5,7,9])) //Output: 6
        console.log(findMedian([1,2,3,4,5])) //Output: 3`,
    placeholder: `function findMedian(arr) {
            // Your code here
          }
          findMedian([3,3,5,9,15])`,
    difficulty: "medium",
  },
  {
    id: 23,
    title: "Day 23 : Count Occurences of Each element",
    description: `Q. Write a JavaScript function to count the occurence of each element in an array and store the counts in an object. The keys of te object represent the elements of the array, and the values should represent the number of times each element appears in the array.
        ===========================================================
        TODO:
        1. Accept an array of numbers as an input.
        2. Create an empty object called counts to store the counts of each element.
        3. Iterate through each number in the array.
        5. For each number, increment the count in the counts object.
        6. If the count for a number doesnot exist yet, initlialize it to 1.
        7. Return the counts object containing the counts of each element.
        ===========================================================
        INPUT:
        const numbers = [1,2,2,3,1,4,2];
        OUTPUT:
        {'1':2,'2':3,'3':1,'4':1 }
        ===========================================================
        CONSTRAINTS:
        1. The input array may contain positive integers only.
        2. You can assume that the input array isnot empty.`,
    placeholder: `function countOccurrences(arr){
            // Your code here
        }
        countOccurrences([1,2,2,3,1,4,2])`,
    difficulty: "medium",
  },
  {
    id: 24,
    title: "Day 24 : Find Mode in an Array",
    description: `Q. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently)./
        ===========================================================
        console.log(findMode([1,2,2,3,1,4,2])) ;OUTPUT : 2
        ===========================================================
        CONSTRAINTS:
        1.  The input array will always contain at least one element.
        2. The mode will always be unique (i.e. there won't be multiple numbers with the same highest.)`,
    placeholder: `function findMode(arr) {
            // Your code here
          }
          findMode([1,2,2,3,1,4,2])`,
    difficulty: "medium",
  },
  {
    id: 25,
    title: "Day 25 : Find Factorial of a Number",
    description: `Q. Write a function to calculate the facotrial of a number(using recursion)
        ===========================================================
        Recursion: 
        Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input untuil it reachers a base case.
        ===========================================================
        Base Case:
        The base case is the condition in a recursion function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function wou.d continue calling itself indefinitely, leading to what's known as infinite recursion.
        ===========================================================
        Recursion Case:
        The recursion case is the condition in a recursive function that determines when the function should call itself should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.
        ===========================================================
        console.log(factorial(5)) OUTPUT: 120`,
    placeholder: `function factorial(num) {
            // Your code here
          }
          factorial(5)`,
    difficulty: "medium",
  },
  {
    id: 26,
    title: "Day 26 : Find the nth Fibonacci Number",
    description: `Q. Write a function to find the nth Fibonacci number.
        ===========================================================
        The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the fibonacci series looks like this: 0,1,2,3,5,8,13,21,...
        ===========================================================
        todo: The Fibonacci number is calculated using the following formula:
        todo syntax: f(n) = f(n-1)+f(n-2) where f(1) = f(2) = 1
        ===========================================================
        console.log(fibonacci(0)); OUTPUT: 0
        console.log(fibonacci(1)); OUTPUT: 1
        console.log(fibonacci(2)); OUTPUT: 1
        console.log(fibonacci(3)); OUTPUT: 2
        console.log(fibonacci(4)); OUTPUT: 3
        console.log(fibonacci(5)); OUTPUT: 5`,
    placeholder: `function fibonacci(num){
            // Your code here
        }
        fibonacci(5)`,
    difficulty: "medium",
  },
  {
    id: 27,
    title: "Day 27 : Repeat the String",
    description: ` Q. Write a function called repeatString that takes two parameters.
        str : A string that needs to be repeated.
        num : An integer representing the number of tiems the string should be repeated.
        The function should repeat the string str the specified number of tiems num adn return the resulting string.
        ===========================================================
        Example: 
        console.log(repeatString("abc",5)) //OUTPUT: "abcabcabcabcabc";
        ===========================================================
        Constraints: 
        1. The input string str will contain only alphanumeric characters and punctuation marks.
        2. The input number num will be a non negative integer.
        3. The output string length should not exceed the length of str multiplied by num.`,
    placeholder: `function repeatString(str, num){
            // Your code here
        }
        repeatString("abc",5)`,
    difficulty: "medium",
  },
  {
    id: 28,
    title: "Day 28 : Truncate the String",
    description: `  Q.  Coding Challenge ; Truncate a String
        ===========================================================
        Write a function called truncateString that takes two parameters:
        str : A string that needs to be truncated.
        maxLength : An integer representing the maximum length of the string allowed.
        The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the trucated string.
        ===========================================================
        EXAMPLE:
        console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
        OUTPUT:
        "A-tisket..."
        ===========================================================
        Constraints:
        1.The input string str will contain only alphanumeric characters and punctuation marks.
        2. The maximum length maxLength will be a positive integer.
        3. The output string length should exceed maxLength + 3 characters due to the addition of '...'.
        4. If space lies at the end after truncation, then it must have to remove that space.`,
    placeholder: `function truncateString(str, maxLength){
            // Your code here
        }
        truncateString("A-tisket a-tasket A green and yellow basket",8)`,
    difficulty: "medium",
  },
  {
    id: 29,
    title: "Day 29 : Number Range Generator",
    description: ` Coding Challenge : Number Range Generator
        ===========================================================
        Write a function called numberRanage that generate an array containing consecutive numbers from a to b (inclusive).
        ===========================================================
        INPUT:
        a: An integer representing the starting number of the range.
        b: An integer representing the ending number of the range.
        arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.
        ===========================================================
        OUTPUT:
        An array containing consecutive numbers from a to b (inclusive).
        ===========================================================
        CONSTRAINTS:
        a and b will be integers else print "Parameters must be integer."
        a will be less than or equal to b else print "First parameter should be less than or equal to second parameter."
        ===========================================================
        console.log(numberRange(0,5)) // [0,1,2,3,4,5];`,
    placeholder: `function numberRange(a, b) {
            // Your code here
          }
            numberRange(0,5)`,
    difficulty: "medium",
  },
  {
    id: 30,
    title: "Day 30 : Number Range Generator with Recursion",
    description: `Coding Challenge : Number Range Generator Recursively
        ===========================================================
        Write a function called numberRange that generate an array containing consecutive numbers from a to b (inclusive) with recursion.
        ===========================================================
        INPUT:
        a: An integer representing the starting number of the range.
        b: An integer representing the ending number of the range.
        arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.
        ===========================================================
        OUTPUT:
        An array containing consecutive numbers from a to b (inclusive).
        ===========================================================
        CONSTRAINTS:
        a and b will be integers
        a will be less than or equal to b.
        console.log(numberRangeRecursion(0,5)) // [0,1,2,3,4,5];`,
    placeholder: `fuction numberRange(a, b, arr = []) {
            // Your code here
        }
        numberRange(0,5)`,
    difficulty: "hard",
  },
  {
    id: 31,
    title: "Day 31 : Simple Password Validator",
    description: `Challenge : Simple Password Validator
        ===========================================================
        Q. Write a function called SimplePasswordValidator that takes a single parameter.
        password : A string representing the password to be validated.
        The function should validate the password based on the following criteria:
        ===========================================================
        1. The passwod must contain at least one lowercase letter, one uppercase letter, and one digit.
        2. The length of the password must be at least 8 characters.
        3. The function should return tru if the password meets all the criteria, otherwise it should return false.
        ===========================================================
        INPUT:
        password: A non-empty string representing the password to be validated.
        ===========================================================
        OUTPUT:
        true if the password meets all the criteria.
        false otherwise.
        ===========================================================
        CONSTRAINTS:
        THe input string password will contain only alphanumeric characters and punctutation marks.
        `,
    placeholder: `function SimplePasswordValidator(password){
            // Your code here
        }
        SimplePasswordValidator("Hello@123")`,
    difficulty: "medium",
  },
  {
    id: 32,
    title: "Day 32 : Image Filtering",
    description: `Challenge : Image Filtering
    ===========================================================
        Q. Write a function to filter image on the basis of category.
        Note: 
        1. The function takes a single parameter "category".
        2. The function returns the array of objects equal to the category.
        ===========================================================
        OUTPUT:
        [
          { id: 3, category: 'fashion', name: 'image3.jpg' },
          { id: 5, category: 'fashion', name: 'image5.jpg' }
        ]
        `,
    placeholder: `
        const images = [
            { id: 1, category: 'nature', name: 'image1.jpg' },
            { id: 2, category: 'nature', name: 'image2.jpg' },
            { id: 3, category: 'fashion', name: 'image3.jpg' },
            { id: 4, category: 'nature', name: 'image4.jpg' },
            { id: 5, category: 'fashion', name: 'image5.jpg' }
            ];
            function filterImages(category){
                // Your code here
                }
                filterImages('fashion')
                `,
    difficulty: "easy",
  },
  {
    id: 33,
    title: "Day 33 : Random Hex Color Generator",
    description: `Coding Challenge : Random Hex Color Generator
    ===========================================================
    Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG, and BB are two digit hexadecimal numbers representing the red, green, and blue components of the color respectively.
    ===========================================================
    Your challenge is to implement the randomHexColor function using JavaScript and ensure that it produces a valid hexadecimal color code with a length of 7 characters ( including the # symbol).
    ===========================================================
    CONSTRAINTS:
    1. The output color code should always with # followed by six hexadecimal characters. (RRGGBB)
    2. The function should not take any parameters.
    3. The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color coes 
    ===========================================================
    HINT: Conver the random number into hexadecimal string reprsentation.
    console.log(randomHexColor());`,
    placeholder: `function randomHexColor(){
        // Your code here
    }
    randomHexColor();`,
    difficulty: "medium",
  },
  {
    id: 34,
    title: "Day 34 : Remove Duplicates from an Array",
    description: `Challenge : Remove Duplicates from an Array
    ===========================================================
    Write a function removeDuplicates that takes an array of elements as input and returns a new array
    with duplicate elements removed.
    ===========================================================
    Your taks is to implement the removeDuplicates function using JavaScript and ensure that he returned array contains only unique elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurence of each unique element preserved.
    ===========================================================
    Constraints:
    1. The input array may contain elements of any data type.
    2. The function should retun a new array with duplicate elements removed, while preserving the order of elements from the original array.
    3. You should use the provided removeDuplicates function signature without any additional parameters.
    ===========================================================
    console.log(removeDuplicates([1,2,3,3,4,4,5]));
    console.log(removeDuplicates(["a","b","c","b","a"]));`,
    placeholder: `function removeDuplicates(arr){
        // Your code here
    }
    removeDuplicates([1,2,3,3,4,4,5]);`,
    difficulty: "medium",
  },
  {
    id: 35,
    title: "Day 35 : Checks Object is Empty or Not",
    description: ` Challenge : Check Object Emptiness
    ===========================================================
    Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.
    ===========================================================
    Your task is to implement the isEmptyObject using JavaScritp and return a message indicating whether the object is empty or not.
    ===========================================================
    CONSTRAINTS:
    1. The input object may have any number of properties, including zero.
    2. The function should return a message indicating whether the object is empty or not.
    3. You should use the provided isEmptyObject function signature without any additional parameters.
    ===========================================================
    console.log(isEmptyObject({name : "Manoj"})) OUTPUT: it's not empty
    console.log(isEmptyObject({})) OUTPUT: it's empty
    console.log(isEmptyObject({keyWithNull : null})) OUTPUT: it's empty
    console.log(isEmptyObject({keyWithUndefined : undefined})) OUTPUT: it's empty`,
    placeholder: `function isEmptyObject(obj){
        // Your code here
    }
    isEmptyObject({name : "Manoj"});
    isEmptyObject({});
    isEmptyObject({keyWithNull : null});
    isEmptyObject({keyWithUndefined : undefined});`,
    difficulty: "medium",
  },
  {
    id: 36,
    title: "Day 36 : Array and Object Conversion",
    description: `Challenge: Convert Object to Array and Vice Versa
    ===========================================================
    Your task is to implement two functions:
    ===========================================================
    Convert Object to Array : Write a function objectToArray that takes an object as an input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.
    ===========================================================
    Covert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function and returns a new object with the keys and values from the array.)
    ===========================================================
    Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers, and objects.
    ===========================================================
    CONSTRAINTS:
    1. The input object may contain properties of any data type.
    2. The input array must contain arrays with exactly two elements(key-value pairs).
    3. The output object should hae properties in the same order as the original object.
    4. You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.
    ===========================================================
    const obg = {
        name : "Kodyfier Shrestha",
        age : 23,
        city : "Damauli"
    }`,
    placeholder: `function objectToArray(obj){
        // Your code here
    }
    function arrayToObject(arr){
        // Your code here
    }
    const obj = {
        name : "Kodyfier Shrestha",
        age : 23,
        city : "Damauli"
    }
    const arr = objectToArray(obj);
    console.log(arr);
    console.log(arrayToObject(arr));`,
    difficulty: "easy",
  },
  {
    id: 37,
    title: "Day 37 : Find Simple Interest",
    description: `Challenge : Simple Interest Calculator
    ===========================================================
    Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.
    ===========================================================
    console.log(calculateSimpleInterest(1000,5,3))  OUTPUT: 150`,
    placeholder: `
    function calculateSimpleInterest(principal, rate, time){
        // Your code here
    }
    calculateSimpleInterest(1000,5,3)
    `,
    difficulty: "easy",
  },
  {
    id : 38,
    title : 'Day 38 : Number of Days Between Dates',
    description : `Challenge : Number of Days Between Two Dates
    ===========================================================
    Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The date will be provided in YYYY-MM-DD
    ===========================================================
    Hint:
    Days = 24*60*60*1000
    ===========================================================
    console.log(calculateDaysBetweenDates("2024-01-01","2024-01-30")) //OUTPUT : 29`,
    placeholder : `
    function calculateDaysBetweenDates(date1, date2){
      // Your code here
    }
    calculateDaysBetweenDates("2024-01-01","2024-01-30")  
      `,
    difficulty : 'medium'
  },{
    id : 39,
    title : 'Day 39 : Calculate Age of a Person',
    description : `Challenge : Calculate Age from birthDate
    ===========================================================
    Create a function calculateAge that takes birthDate as input and returns the current age of the person. The birthDate will be provided in the format YYYY-MM-DD.
    ===========================================================
    Requirements:
    1. The function must handle leap years and varying numbers of days in each month accurately.
    2. Consider the timezone difference and ensure the age is calcualated based on the current date in your local time zone.
    3. The output should be the age in whole years.
    ===========================================================
    console.log(calculateAge("1990-05-15")); //OUTPUT: 33
    ===========================================================
    //TODOS:
    1. Checks if the current month is less than the birth month of it's the same month but today's date is before the birth date. If either condition is true, it subtracts one from the age because the birthday has not yet occured this year. `,
    placeholder : `
    function calculateAge(birthDate){
      // Your code here
    }
    console.log(calculateAge("1990-05-15")) //OUTPUT : 33
    `,
    difficulty : 'hard'
  },
  {
    id : 40,
    title : "Create Bar Chart",
    description : `Challenge : Simple Bar Chart Using Array Data
    ===========================================================
    Write a function generateBarChart that takes an array of  numbers and generates a text-based bar chart.
    ===========================================================
    console.log(generateBarChart([5,3,9,2]));
    ===========================================================
    1 : *****
    2 : ***
    3 : *********
    4 : **`,
    placeholder : `function generateBarChart(arr){
      //You code here
    }
    console.log(generateBarChart([5,3,9,2]));`,
    difficulty : 'hard'
  },
  {
    id : 41,
    title : 'Simple Currency Converter',
    description : `Challenge : Simple Currency Converter
    ===========================================================
    Write a function convertCurrency to convert from one currency to another using static exchange rates.
    ===========================================================
    Requirements:
    1. Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
    2. Use a fixed object to store exchange rates relative to a base currency (e.g: USD)
    3. The function should return the converted amount in the target currency.
    4. Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.
    ===========================================================
    console.log(convertCurrency(100, "GBP","EUR"))`,
    placeholder : `const rates = {
      USD : 1,
      EUR : 0.9,
      GBP : 0.8,
      INR : 82
  }
  function convertCurrency(amount, fromCurrency, toCurrency){
      // Your code here 
  }
  console.log(convertCurrency(100, "GBP", "EUR"));
  `,
  difficulty : 'medium'
  },{
    id: 42,
    title : 'Day 42 : Validate Credt Card',
    description : `Challenge : Validate a Credit Card (Luhn Algorithm)
    ===========================================================
    Write a function validateCreditCard to validate credit card numbers using the Luhn algorithm.
    ===========================================================
    REQUIREMENTS:
    1. Write a function named validateCreditCard that takes a credit card number as a string.
    2. The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
    3. Ensure the function can handle numbers as strings, which may include spaces and dashes.
    ===========================================================
    Luhn Algorithm Steps:
    1. Prepare the Number: Start with the digits of the number, For example, if validating the number 79927398713.
    2. Reverse the digits:  It becomes 31789379297.
    3. Double Every Second Digit: 3, 1*2,7,8*2 and so on.
    4. If doubling the number result in a number greater than 9, subtract 9 from it. Now, it becomes 3,2,7,7,9,6,7,9,2,5,9
    5. Sum All Digits : Add all the digits together. 3+2+7+7+9+6+7+9+2+5+9
    6. Check Modulo 10: If the sum module 10 is 0. then the number is valid.
    Here, 66%10 = 6, which is not 0. So, 79927398713 is not a valid credit card number.
    ===========================================================
    Example:
    console.log(validateCreditCard("4539 1488 0343 6467")); OUTPUT: true
    console.log(validateCreditCard("7992 7398 7134 6783")); OUTPUT: false`,
    placeholder : `function validateCreditCard(cardNum){
      //Your code here
    }
    console.log(validateCreditCard("4539 1488 0343 6467));`,
    difficulty : 'medium'
  }
];
